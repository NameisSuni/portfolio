"use client";
import React from "react";
import ProjectModal from "./projectModal";
import { SelectedModalProps } from "../types/commonTypes.types";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const projectsProperties = [
  {
    title: "Sunil Profile",
    subTitle: "Personal Portfolio",
    tags: "Design — Frontend",
    imageUrl: "project_3.jpg",
    link: "https://nameissuni.github.io/profile/",
    description: [
      "Hi, I’m Sunilkumar Namala — a frontend developer who loves turning ideas into clean, responsive, and user-friendly websites. I mainly work with React, TypeScript, Next.js, and Tailwind CSS, and I enjoy bringing designs to life with smooth animations and thoughtful UX. My background isn’t the typical path — I studied commerce and later earned an Executive MBA in IT — but once I discovered coding, I never looked back. I’ve built real projects like a Fintech Credit Risk Dashboard that helps teams understand data better and make smarter decisions, and I'm always excited to build things that solve real problems.",
      "In the past year, I’ve worked closely with teams at Avadhuta Technologies, focusing on frontend architecture, API integration, and performance tuning. I’m always learning, always experimenting — whether it’s refining a UI detail or improving code structure. I care a lot about writing clean code, collaborating with good people, and continuously growing as a developer. Through this portfolio, I hope to share a bit of my journey and the kind of work I’m passionate about — and maybe connect with teams who share that same energy.",
    ],
  },
  {
    title: "Chai aur Backend",
    subTitle: "Backend Application",
    tags: "Design — Backend",
    imageUrl: "project_2.jpg",
    link: "https://nameissuni.github.io/chaibackend/",
    description: [
      "This project is a MongoDB-powered backend that replicates the core functionalities of a YouTube-style subscription platform. It’s built using Node.js, Express.js, and Mongoose, with features like user authentication, account management, and subscription logic — all designed to mirror how users interact with channels and content on platforms like YouTube. The system includes secure login and registration using JWT tokens and bcrypt for password hashing, along with account modeling using Mongoose schemas to manage user roles, subscriptions, and session handling. It also supports file uploads with Multer and integrates Cloudinary for media storage.",
      "This backend setup focuses on modular and scalable design, keeping developer experience in mind. It uses dotenv for environment management, CORS for cross-origin access, and cookie-parser for secure session handling. Development is streamlined with nodemon and formatted consistently using Prettier. The use of mongoose-aggregate-paginate-v2 enables efficient data handling for paginated results — ideal for simulating feed-like structures. Whether it’s building a content dashboard or scaling user subscriptions, this project lays a solid foundation for any full-stack application that needs robust user and subscription management.",
    ],
  },
  {
    title: "Credit Risk",
    subTitle: "Full Stack Application",
    tags: "Frontend — Backend",
    imageUrl: "project_1.jpg",
    link: "#",
    description: [
      "The AI-Assisted Fintech Credit Risk Dashboard helps fintech teams through responses to data as well as designing a data-driven frontend application to evaluate customer creditworthiness with speed and clarity. The dashboard is built using React and TypeScript along with Ant Design to offer interactive cards plus charts and tables for visualizing credit metrics like income vs. Repayment history, risk ratios, credit score, with expenses. Dynamic risk scoring is calculated via a custom formula, and Ant Design’s responsive grid system enables the UI to adapt smoothly across devices. Each of these features does reduce manual effort so they enable data-backed lending decisions. Users can interact with a real-time customer table, a multi-layered risk analysis section, along with a streamlined loan decision workflow.",
      "The backend that was built with Node.js, Express, and also a JSON-based mock database supports core operations such as alert generation, risk score evaluation, and status updates. The alert system automatically notifies teams once a customer's risk score exceeds 70, which allows teams to act faster on high-risk cases. An API layer that is well structured handles operations upon all of customer data. Axios is used for the frontend's consumption of this API layer. This full application mirrors actual fintech function, and it seems a perfect model. SaaS teams look into the automated credit systems. The project offers a full-stack strategy building financial tools improved by AI showing UI/UX focus plus neat design.",
    ],
  },
];
const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] =
    React.useState<SelectedModalProps | null>(null);

  React.useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <>
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.title}
          subTitle={selectedProject.subTitle}
          tags={selectedProject.tags}
          imageUrl={selectedProject.imageUrl}
          link={selectedProject.link}
          description={selectedProject.description}
        />
      )}

      <AnimatedSection id="projects" className="section animation">
        <div className="py-20">
          <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
            PROJECTS
          </h2>
          <div className="animation-translate animation-item-2 flex flex-wrap mx-[-30px]">
            {projectsProperties.map((project, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-[30px]">
                <a
                  href={project.link}
                  aria-label={`Open ${project.title} project details`}
                  className="card"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                    setSelectedProject(project);
                  }}
                >
                  <img
                    src={`./images/${project.imageUrl}`}
                    alt={project.title}
                    className="w-full transition-opacity duration-[150ms] ease-linear opacity-75 hover:opacity-100"
                  />
                  <div className="py-6 min-h-px flex-1">
                    <h3 className="text-2xl font-extrabold mb-6">
                      {project.title}
                    </h3>
                    <h4 className="mt-[-1.125rem] mb-6 text-base opacity-60 font-normal">
                      {project.subTitle}
                    </h4>
                    <p className="uppercase text-xs font-bold">
                      {project.tags}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <SectionNavigator current={6} total={10} nextSection="references" />
      </AnimatedSection>
    </>
  );
};

export default ProjectsSection;
