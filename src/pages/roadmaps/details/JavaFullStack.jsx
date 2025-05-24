import "./JavaFullStack.css";

const JavaFullStackRoadmap = () => {
  return (
    <div className="java-container">
      <div className="java-header">
        <h1 className="java-heading">Java Full Stack Roadmap </h1>
        <p className="java-description">
          Master end-to-end Java development with this comprehensive guide. Estimated timeline: 6-9 months to become job-ready.
        </p>
        <div className="progress-tracker">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }}></div>
          </div>
          <span>Start your Java full stack journey</span>
        </div>
      </div>

      <div className="roadmap-grid">
        {/* Core Java */}
        <div className="roadmap-card core-java">
          <div className="card-header">
            <div className="card-icon">☕</div>
            <h2>1. Core Java (6-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Fundamentals</h3>
            <ul>
              <li>OOP concepts (Classes, Inheritance, Polymorphism)</li>
              <li>Collections Framework</li>
              <li>Exception Handling</li>
            </ul>
            
            <h3>Advanced Topics</h3>
            <ul>
              <li>Multithreading & Concurrency</li>
              <li>Streams & Lambdas</li>
              <li>Design Patterns</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Library Management System, Employee Payroll System</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 6-8 weeks</span>
          </div>
        </div>

        {/* Database */}
        <div className="roadmap-card database">
          <div className="card-header">
            <div className="card-icon">🗄️</div>
            <h2>2. Databases (4-5 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>SQL Databases</h3>
            <ul>
              <li>MySQL/PostgreSQL</li>
              <li>JDBC</li>
              <li>Normalization & Indexing</li>
            </ul>
            
            <h3>NoSQL</h3>
            <ul>
              <li>MongoDB Basics</li>
              <li>Spring Data JPA</li>
              <li>ORM with Hibernate</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Database design for e-commerce, CRUD operations</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-5 weeks</span>
          </div>
        </div>

        {/* Spring Framework */}
        <div className="roadmap-card spring">
          <div className="card-header">
            <div className="card-icon">🌱</div>
            <h2>3. Spring Framework (6-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Spring Core</h3>
            <ul>
              <li>IoC & Dependency Injection</li>
              <li>Spring Boot</li>
              <li>Spring MVC</li>
            </ul>
            
            <h3>Spring Ecosystem</h3>
            <ul>
              <li>Spring Security</li>
              <li>Spring Data</li>
              <li>RESTful Web Services</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>REST API for blog, Authentication service</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 6-8 weeks</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="roadmap-card frontend">
          <div className="card-header">
            <div className="card-icon">🎨</div>
            <h2>4. Frontend (5-7 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Basics</h3>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript ES6+</li>
              <li>TypeScript</li>
            </ul>
            
            <h3>Frameworks</h3>
            <ul>
              <li>React.js/Angular</li>
              <li>Thymeleaf (for Spring)</li>
              <li>State Management</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Admin dashboard, Interactive web app</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 5-7 weeks</span>
          </div>
        </div>

        {/* DevOps */}
        <div className="roadmap-card devops">
          <div className="card-header">
            <div className="card-icon">🛠️</div>
            <h2>5. DevOps & Tools (3-4 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Development</h3>
            <ul>
              <li>Maven/Gradle</li>
              <li>Git & GitHub</li>
              <li>Docker Basics</li>
            </ul>
            
            <h3>Deployment</h3>
            <ul>
              <li>AWS/Heroku</li>
              <li>CI/CD Pipelines</li>
              <li>Monitoring</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 3-4 weeks</span>
          </div>
        </div>

        {/* Advanced Topics */}
        <div className="roadmap-card advanced">
          <div className="card-header">
            <div className="card-icon">🚀</div>
            <h2>6. Advanced Topics (4-6 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Microservices</h3>
            <ul>
              <li>Spring Cloud</li>
              <li>API Gateway</li>
              <li>Distributed Systems</li>
            </ul>
            
            <h3>Performance</h3>
            <ul>
              <li>Caching (Redis)</li>
              <li>Message Queues (Kafka/RabbitMQ)</li>
              <li>Load Testing</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-6 weeks</span>
          </div>
        </div>
      </div>

      <div className="roadmap-footer">
        <h3>Specializations</h3>
        <div className="additional-paths">
          <div className="path-card">
            <h4>Cloud Native Java</h4>
            <p>AWS/Google Cloud with Java</p>
          </div>
          <div className="path-card">
            <h4>Big Data</h4>
            <p>Hadoop, Spark with Java</p>
          </div>
          <div className="path-card">
            <h4>Enterprise Java</h4>
            <p>Jakarta EE, Spring Enterprise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaFullStackRoadmap;