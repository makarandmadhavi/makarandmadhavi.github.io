import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';


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
              alt="cloud native"
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
              alt="cloud native"
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
              alt="cloud native"
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
              alt="cloud native"
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
              alt="cloud native"
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
              alt="cloud native"
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
              alt="cloud native"
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
