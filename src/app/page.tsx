import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowUpRightFromSquare, faEnvelope, faMailReply } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-10 gap-10">
      <div className="container flex items-center flex-wrap justify-center gap-10">
        <Image
          src="https://makarandmadhavi.github.io/makarand.jpg"
          alt="Makarand Madhavi"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="frosted-glass p-10 max-w-lg">
          <h3 >Hi ! 👋 </h3>
          <h4 className="card-title mb-0">Makarand here </h4>
          <br />
          <p className="secondary-text">Versatile <span className="primary-accent"> Software Engineer</span> with a proven track record in web development, microservices, APIs, machine learning/AI, and DevOps.</p>
          <p className="white">Explore my portfolio to see my projects in action!</p>
          <br />
          <div className="text-3xl">
            <Link href="https://www.linkedin.com/in/makarandmadhavi/" target="_blank" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link> 
            <Link href="https://github.com/makarandmadhavi" className="social-icon"> &nbsp;
              <FontAwesomeIcon icon={faGithub} /> &nbsp;
            </Link>
            <Link href="mailto:madhavi.m@northeastern.edu" className="social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>

          </div>
        </div>
        <div className="frosted-glass p-10 max-w-sm flex flex-col flex-wrap">
        <h2 className="primary-accent">Skills</h2>
        <div className="flex flex-wrap gap-y-2 overflow-y-scroll">
          <div className="badge">Java</div>
          <div className="badge">Python</div>
          <div className="badge">JavaScript</div>
          <div className="badge">TypeScript</div>
          <div className="badge">Node.js</div>
          <div className="badge">React</div>
          <div className="badge">Next.js</div>
          <div className="badge">Express</div>
          <div className="badge">Flask</div>
          <div className="badge">Spring Boot</div>
          <div className="badge">Docker</div>
          <div className="badge">Kubernetes</div>
          <div className="badge">AWS</div>
          <div className="badge">GCP</div>
          <div className="badge">Terraform</div>
          <div className="badge">Pulumi</div>
          <div className="badge">CI/CD</div>
          <div className="badge">Git</div>
          <div className="badge">Machine Learning</div>
          <div className="badge">Deep Learning</div>
          <div className="badge">Neural Networks</div>
          <div className="badge">TensorFlow</div>
          <div className="badge">Keras</div>
          <div className="badge">Scikit-learn</div>
          <div className="badge">Pandas</div>
          <div className="badge">Numpy</div>
          <div className="badge">Matplotlib</div>
          <div className="badge">Dask</div>
          <div className="badge">SQL</div>
          <div className="badge">NoSQL</div>
          <div className="badge">C#</div>
          <div className="badge">Unity</div>
          <div className="badge">Unreal Engine</div>
          <div className="badge">HTML</div>
          <div className="badge">CSS</div>
          <div className="badge">Tailwind</div>
        </div>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-10">
        <h1> <span className="primary-accent">Projects</span>  <span className="white"> &lt;<span className="animated-icon"></span>&gt; </span> </h1>
      </div>

      <div className="container flex gap-5 flex-wrap justify-center">

        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">
          <a href="https://github.com/orgs/Makjets/repositories" target="_blank" className="secondary-accent">
            <h2 className="mr-5">Cloud Native WebApp <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row flex-wrap gap-y-2">
            <div className="badge">Cloud Computing</div>
            <div className="badge">AWS</div>
            <div className="badge">Microservices</div>
            <div className="badge">Infrastructure as Code</div>
            <div className="badge">Java</div>
            <div className="badge">Python</div>
          </div>
          <p className="secondary-text">
            A cloud native web application with a microservices architecture deployed on AWS using infrastructure as code (Pulumi) and
            implementing DevOps Best Practices.
          </p>
          <a href="https://github.com/orgs/Makjets/repositories" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/aws.drawio.svg"
              alt="Cloud architecture Diagram"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>

        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">
          <a href="https://github.com/makarandmadhavi/Emotion_Classification" target="_blank" className="primary-accent">
            <h2 className="mr-5">Facial Emotion Classifier <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row flex-wrap gap-y-2">
            <div className="badge">Machine Learning</div>
            <div className="badge">Neural Networks</div>
            <div className="badge">TensorFlow</div>
            <div className="badge">Keras</div>
            <div className="badge">Flask</div>
          </div>
          <p className="secondary-text">
            A deep learning model that classifies facial emotions using Convolutional Neural Networks.
            The model is deployed as a web application using Flask.
          </p>
          <a href="https://github.com/makarandmadhavi/Emotion_Classification" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/emotion.png"
              alt="UI"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>
        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">

          <a href="https://github.com/makarandmadhavi/api-accounting-integration" target="_blank" className="secondary-accent">
            <h2 className="mr-5">Accounting Dashboard <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row">
            <div className="badge">API Integration</div>
            <div className="badge">Web Development</div>
            <div className="badge">Full Stack</div>
            <div className="badge">Next.js</div>
          </div>

          <p className="secondary-text">
            A full stack web application that provides a dashboard for accounting and finance management.
          </p>
          <a href="https://api-integration.makarandmadhavi.me/" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/icstat.png"
              alt="Accounting Dashboard"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>
        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">
          <a href="https://github.com/makarandmadhavi/Marketting-Campaign-Feature-Engineering-Modeling-Interpretability-report/blob/main/Marketting_Campaign_Feature_Engineering__Modeling_Interpretability_Report.ipynb" target="_blank" className="primary-accent">
            <h2 className="mr-5">Marketting Campaign Reponse Analysis <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row flex-wrap gap-y-2">
            <div className="badge">Statistical Learning</div>
            <div className="badge">AutoML</div>
            <div className="badge">Feature Engineering</div>
            <div className="badge">Model Interpretability</div>
            <div className="badge">Python</div>
          </div>
          <p className="secondary-text">
            A comprehensive report on the analysis of a marketting campaign response using statistical learning, feature engineering and model interpretability techniques.
          </p>
          <a href="https://github.com/makarandmadhavi/Marketting-Campaign-Feature-Engineering-Modeling-Interpretability-report/blob/main/Marketting_Campaign_Feature_Engineering__Modeling_Interpretability_Report.ipynb" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/mk.png"
              alt="Jupyter Notebook"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>
        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">
          <a href="https://makarandmadhavi.me/RollaBallGame/" target="_blank" className="secondary-accent">
            <h2 className="mr-5">Roll a Ball Game <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row flex-wrap gap-y-2">
            <div className="badge">Unity</div>
            <div className="badge">3D</div>
            <div className="badge">Game Development</div>
            <div className="badge">Platformer</div>
            <div className="badge">C#</div>
          </div>
          <p className="secondary-text">
            A 3D platformer game developed using Unity Engine and C#.
          </p>
          <a href="https://makarandmadhavi.me/RollaBallGame/" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/rollball.png"
              alt="Game Snapshot"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>
        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">
          <a href="https://github.com/makarandmadhavi/NU-Chronicles" target="_blank" className="primary-accent">
            <h2 className="mr-5">NU Chronicles <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row flex-wrap gap-y-2">
            <div className="badge">Web Development</div>
            <div className="badge">React</div>
            <div className="badge">Express</div>
            <div className="badge">MongoDB</div>
            <div className="badge">Rest APIs</div>

          </div>
          <p className="secondary-text">
            A web application for students to share their experiences at Northeastern University. The application is built using MERN stack.
          </p>
          <a href="https://github.com/makarandmadhavi/NU-Chronicles" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/chronicle.png"
              alt="Homepage snapshot"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>
        <div className="flex flex-col gap-5 flex-wrap md:w-2/5 frosted-glass px-10 py-5">
          <a href="https://github.com/makarandmadhavi/BootKart---E-Commerce" target="_blank" className="secondary-accent">
            <h2 className="mr-5">Bootkart Ecommerce <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h2>
          </a>
          <div className="flex flex-row flex-wrap gap-y-2">
            <div className="badge">Web Development</div>
            <div className="badge">jQuery</div>
            <div className="badge">php</div>
            <div className="badge">MySQL</div>

          </div>
          <p className="secondary-text">
            A simple E-commerce website for selling electronics based on LAMP stack.
          </p>
          <a href="https://github.com/makarandmadhavi/BootKart---E-Commerce" target="_blank" className="project-item">
            <Image
              src="https://makarandmadhavi.github.io/demouser.gif"
              alt="Demo gif"
              width={500}
              height={500}
              className="w-full"
            />
          </a>
        </div>

      </div>

      <footer className="text-white text-center p-4">
        &copy; 2024 Makarand
      </footer>
    </main>
  );
}
