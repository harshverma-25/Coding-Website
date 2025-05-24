
import "./Home.css"; // We're reusing home.css

const techList = [
 {
    name: "Artificial Intelligence",
    description: "Enables machines to learn, reason, and perform human-like tasks through ML and neural networks, transforming industries.",
    image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg"
  },
  {
    name: "Blockchain",
    description: "Decentralized ledger technology that powers secure, transparent transactions and smart contracts without intermediaries.",
    image: "https://img.freepik.com/free-photo/cryptocurrency-concept-with-coin_23-2149153412.jpg"
  },
  {
    name: "Cybersecurity",
    description: "Protects digital systems and data through encryption, firewalls, and threat detection against evolving cyber threats.",
    image: "https://img.freepik.com/free-photo/ai-cybersecurity-virus-protection-machine-learning_53876-129788.jpg"
  },
  {
    name: "Web3",
    description: "Decentralized internet powered by blockchain, enabling user-owned data and peer-to-peer interactions.",
    image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040412.jpg"
  },
  {
    name: "Cloud Computing",
    description: "On-demand delivery of computing services over the internet with scalable storage and processing power.",
    image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg"
  },
  {
    name: "Internet of Things (IoT)",
    description: "Network of interconnected smart devices that collect and exchange data for automated systems.",
    image: "https://img.freepik.com/free-photo/smartwatch-showing-colorful-icons_1134-392.jpg"
  },
  {
    name: "Quantum Computing",
    description: "Uses qubits to perform complex calculations exponentially faster than classical computers.",
    image: "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524396.jpg"
  },
  {
    name: "Augmented & Virtual Reality (AR/VR)",
    description: "Immersive technologies blending digital content with physical world (AR) or creating fully virtual environments (VR).",
    image: "https://img.freepik.com/free-photo/man-wearing-vr-glasses-with-gradient-background_23-2148864957.jpg"
  }
];

const TrendingTechnologies = () => {
  return (
    <div className="trending-tech">
      <h2>Trending Technologies</h2>
      <div className="tech-grid">
        {techList.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.image} alt={tech.name} />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTechnologies;
