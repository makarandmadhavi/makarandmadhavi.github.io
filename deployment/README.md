# Deploying this Portfolio

This a step by step guide showcasing how to deploy this nextjs app on a digitalocean server.

## Step 1: Set Up a Droplet

1. Log in to your DigitalOcean account.
2. Click on "Create" -> "Droplets".
3. Choose a distribution (e.g., Ubuntu), select a plan, and configure other settings as needed.
4. Click "Create Droplet" and wait for it to be provisioned.

## Step 2: Install Node.js and Dependencies

1. SSH into your Droplet:
   ```bash
   ssh root@your_droplet_ip
   ```
2. Update package index and install Node.js and npm:
   ```bash
   apt update
   apt install nodejs npm
   ```
3. Install other dependencies if needed (e.g., Git).

## Step 3: Clone and Build Next.js App

1. Navigate to the directory where you want to store your app:
   ```bash
   cd /path/to/your/apps/directory
   ```
2. Clone your Next.js app repository:
   ```bash
   git clone your_repo_url
   ```
3. Install dependencies and build the app:
   ```bash
   cd your_app_directory
   npm install
   npm run build
   ```

## Step 4: Run the App

1. Start the app:
   ```bash
   npm start &
   ```
   This runs the app in the background. Optionally, you can create a `start.sh` script to automate this process and store logs.

## Step 5: Setting Up SSL with Let's Encrypt

1. Install Certbot:
   ```bash
   apt install certbot
   ```
2. Obtain SSL certificate:
   ```bash
   certbot certonly --standalone -d your_domain.com
   ```
3. Follow the instructions to complete the certificate setup.

## Step 6: Configure DNS Records

1. Log in to your domain registrar's website.
2. Navigate to your domain's DNS settings.
3. Add an A record pointing to your Droplet's IP address.
4. Add a CNAME record for 'www' if necessary.

## Step 7: Install and Configure Nginx

1. Install Nginx:
   ```bash
   apt install nginx
   ```

2. Configure Nginx to route traffic to your Next.js app:

   Create a new server block configuration file for your domain:
   ```bash
   nano /etc/nginx/sites-available/your_domain
   ```

   Add the following configuration (replace placeholders accordingly):
   ```nginx
   server {
       listen 80;
       server_name your_domain.com www.your_domain.com;

       location / {
           proxy_pass http://localhost:3000; # Assuming your Next.js app is running on port 3000
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. Enable the server block configuration by creating a symbolic link to the `sites-enabled` directory:
   ```bash
   ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/
   ```

4. Test Nginx configuration syntax:
   ```bash
   nginx -t
   ```

5. If the syntax is okay, restart Nginx to apply changes:
   ```bash
   systemctl restart nginx
   ```

## Step 8: Redirect HTTP to HTTPS

1. Edit the Nginx configuration file:
   ```bash
   nano /etc/nginx/sites-available/your_domain
   ```

2. Inside the server block, add a new `server` directive to redirect HTTP to HTTPS:
   ```nginx
   server {
       listen 80;
       server_name your_domain.com www.your_domain.com;
       return 301 https://$host$request_uri;
   }
   ```

3. Save the changes and exit the editor.

4. Test Nginx configuration syntax:
   ```bash
   nginx -t
   ```

5. If the syntax is okay, restart Nginx to apply changes:
   ```bash
   systemctl restart nginx
   ```

Now, Nginx is configured to route traffic to your Next.js app and automatically redirect HTTP to HTTPS. Ensure that your DNS records are properly configured to point to your server's IP address.

## Step 9: Start/Stop the App

To start the app:
```bash
bash start.sh
```

To stop the app:
```bash
kill $(pgrep node)
```

Create `start.sh` and `stop.sh` scripts to automate these processes if needed.

With these steps completed, your Next.js website should be up and running on DigitalOcean with SSL enabled. Remember to regularly update your app and maintain server security.