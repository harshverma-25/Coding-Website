import { Link } from "react-router-dom";
import "./Roadmap.css";

const roadmapData = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, and backend development.",
    path: "/roadmap/web-dev",
    image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901783.jpg",
  },
  {
    id: 2,
    title: "App Development",
    description: "Master Android (Kotlin) or iOS (Swift), or go cross-platform with Flutter or React Native.",
    path: "/roadmap/app-dev",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038905.jpg",
  },
  {
    id: 3,
    title: "Java Full Stack",
    description: "Backend (Spring Boot), frontend (React/Angular), and database (MySQL, MongoDB).",
    path: "/roadmap/java-fullstack",
    image: "https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg",
  },
  {
    id: 4,
    title: "Data Science",
    description: "Python, Machine Learning, AI, Deep Learning, and Big Data tools.",
    path: "/roadmap/data-science",
    image: "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908079.jpg",
  },
 
  {
    id: 7,
    title: "AI",
    description: "Artificial intelligence is a field of science concerned with building machines that can reason, learn, and act.",
    path: "/roadmap/ai",
    image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
  },
];

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-heading">Explore Career Roadmaps</h1>
      <div className="roadmap-grid">
        {roadmapData.map((item) => (
          <div className="roadmap-card" key={item.id}>
            <img src={item.image} alt={item.title} className="roadmap-image" />
            <h2 className="roadmap-title">{item.title}</h2>
            <p className="roadmap-description">{item.description}</p>
            <Link to={item.path} className="roadmap-button">Explore</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
