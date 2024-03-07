import Image from "next/image";

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
        <div>
          <h3 >Hi ! 👋 </h3>
          <h4 className="card-title mb-0">Makarand here </h4>
          <br />
          <p className="secondary-text">A Versatile <span className="primary-accent"> Software Engineer</span></p>
          <p className="white">Explore my portfolio to see my projects in action!</p>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-10">
        <h1> <span className="primary-accent">Projects</span>  <span className="white"> &lt;<span className="animated-icon"></span>&gt; </span> </h1>
      </div>
      <div className="container flex items-center justify-center gap-10 flex-wrap">
        <div className="frosted-glass project-item">
          <a href="https://github.com/makarandmadhavi/Marketting-Campaign-Feature-Engineering-Modeling-Interpretability-report/blob/main/Marketting_Campaign_Feature_Engineering__Modeling_Interpretability_Report.ipynb" target="_blank" rel="noopener noreferrer">
            <p>Nextjs Accounting Dashboard</p>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: "relative" }}>
              <Image
                src="https://makarandmadhavi.github.io/rutter.png"
                alt="jupyter notebook"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
        </div>
        <div className="frosted-glass project-item">
          <a href="https://github.com/makarandmadhavi/Marketting-Campaign-Feature-Engineering-Modeling-Interpretability-report/blob/main/Marketting_Campaign_Feature_Engineering__Modeling_Interpretability_Report.ipynb" target="_blank" rel="noopener noreferrer">
            <p>Marketing Campaign Response Analysis</p>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: "relative" }}>
              <Image
                src="https://makarandmadhavi.github.io/mk.png"
                alt="jupyter notebook"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
        </div>
        <div className="frosted-glass project-item">
          <a href="https://github.com/makarandmadhavi/Emotion_Classification" target="_blank" rel="noopener noreferrer">
            <p>Facial Emotion Classifier</p>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: "relative" }}>
              <Image
                src="https://makarandmadhavi.github.io/emotion.png"
                alt="jupyter notebook"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
        </div>
        <div className="project-item frosted-glass">
          <a href="https://github.com/makarandmadhavi/NU-Chronicles" target="_blank" rel="noopener noreferrer">
            <p>NU <br></br> Chronicles</p>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: "relative" }}>
              <Image
                src="https://makarandmadhavi.github.io/chronicle.png"
                alt="NU chronicle"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
        </div>

        <div className="project-item frosted-glass">
          <h5 className="card-title">Cloud Native WebApp</h5>
          <a href="https://github.com/Makjets/webapp" target="_blank" rel="noopener noreferrer">
            <p className="secondary-text">WebApp <span className="white"> - Spring Boot Rest API</span></p>
          </a>
          <a href="https://github.com/Makjets/iac-pulumi" target="_blank" rel="noopener noreferrer">
            <p className="secondary-text">IAC <span className="white"> - AWS Infrastructure deployed via Pulumi</span></p>
          </a>
          <a href="https://github.com/Makjets/serverless" target="_blank" rel="noopener noreferrer">
            <p className="secondary-text">serverless computing <span className="white"> - AWS Lambda function</span></p>
          </a>
        </div>

        <div className="project-item frosted-glass">
          <a href="https://github.com/makarandmadhavi/BootKart---E-Commerce" target="_blank" rel="noopener noreferrer">
            <p>Bootkart - E commerce site</p>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: "relative" }}>
              <Image
                src="https://makarandmadhavi.github.io/demouser.gif"
                alt="demo"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
        </div>
        <div className="project-item frosted-glass">
          <a href="https://makarandmadhavi.github.io/RollaBallGame/" target="_blank" rel="noopener noreferrer">
            <p>Roll a Ball Game</p>
            <p className="white">Created with Unity Engine</p>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: "relative" }}>
              <Image
                src="https://makarandmadhavi.github.io/rollball.png"
                alt="Makarand's picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </div>
        
      </div>

      <footer className="text-white text-center p-4">
        &copy; 2024 Makarand
      </footer>
    </main>
  );
}
