import "./WebDev.css";

const WebDevRoadmap = () => {
  return (
    <div className="webdev-container">
      <div className="webdev-header">
        <h1 className="webdev-heading">Web Development Roadmap </h1>
        <p className="webdev-description">
          A comprehensive guide to becoming a full-stack developer. Estimated timeline: 6-8 months
          with consistent learning. Follow this structured path to master both frontend and backend
          technologies.
        </p>
        <div className="progress-tracker">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }}></div>
          </div>
          <span>Start your journey</span>
        </div>
      </div>

      <div className="roadmap-grid">
        {/* Foundation */}
        <div className="roadmap-card foundation">
          <div className="card-header">
            <div className="card-icon">🌐</div>
            <h2>1. Web Foundation (3-4 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>HTML5</h3>
            <ul>
              <li>Semantic HTML elements</li>
              <li>Forms and validation</li>
              <li>Accessibility (ARIA)</li>
            </ul>
            
            <h3>CSS3</h3>
            <ul>
              <li>Flexbox and Grid layouts</li>
              <li>CSS variables and custom properties</li>
              <li>Animations and transitions</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Personal portfolio, Restaurant website, Survey form</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 3-4 weeks</span>
          </div>
        </div>

        {/* JavaScript */}
        <div className="roadmap-card javascript">
          <div className="card-header">
            <div className="card-icon">⚡</div>
            <h2>2. JavaScript (4-6 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Core Concepts</h3>
            <ul>
              <li>ES6+ features (let/const, arrow functions)</li>
              <li>Asynchronous JS (Promises, async/await)</li>
              <li>DOM manipulation</li>
            </ul>
            
            <h3>Advanced Topics</h3>
            <ul>
              <li>Closures and hoisting</li>
              <li>Prototypes and classes</li>
              <li>Error handling</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Weather app, Todo list, Memory game</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-6 weeks</span>
          </div>
        </div>

        {/* Version Control */}
        <div className="roadmap-card tools">
          <div className="card-header">
            <div className="card-icon">🔧</div>
            <h2>3. Tools & Workflow (1-2 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Git & GitHub</h3>
            <ul>
              <li>Branching and merging</li>
              <li>Pull requests and code review</li>
              <li>Git workflows</li>
            </ul>
            
            <h3>Development Tools</h3>
            <ul>
              <li>Package managers (npm/yarn)</li>
              <li>Build tools (Webpack, Vite)</li>
              <li>Debugging techniques</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 1-2 weeks</span>
          </div>
        </div>

        {/* Frontend Framework */}
        <div className="roadmap-card frontend">
          <div className="card-header">
            <div className="card-icon">🎨</div>
            <h2>4. Frontend Framework (4-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>React.js</h3>
            <ul>
              <li>Components and props</li>
              <li>Hooks (useState, useEffect)</li>
              <li>Context API</li>
            </ul>
            
            <h3>Ecosystem</h3>
            <ul>
              <li>React Router</li>
              <li>State management (Redux/Zustand)</li>
              <li>Testing (Jest, React Testing Library)</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>E-commerce site, Social media dashboard, Movie database</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-8 weeks</span>
          </div>
        </div>

        {/* Backend */}
        <div className="roadmap-card backend">
          <div className="card-header">
            <div className="card-icon">🛠️</div>
            <h2>5. Backend Development (6-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Node.js & Express</h3>
            <ul>
              <li>RESTful API design</li>
              <li>Middleware concepts</li>
              <li>Authentication (JWT)</li>
            </ul>
            
            <h3>Database</h3>
            <ul>
              <li>MongoDB (Mongoose)</li>
              <li>SQL basics (PostgreSQL)</li>
              <li>ORM/ODM concepts</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Blog API with auth, E-commerce backend, Real-time chat</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 6-8 weeks</span>
          </div>
        </div>

        {/* Deployment */}
        <div className="roadmap-card deployment">
          <div className="card-header">
            <div className="card-icon">🚀</div>
            <h2>6. Deployment & DevOps (2-3 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Hosting Platforms</h3>
            <ul>
              <li>Vercel/Netlify (Frontend)</li>
              <li>Render/Railway (Backend)</li>
              <li>AWS/Google Cloud basics</li>
            </ul>
            
            <h3>CI/CD</h3>
            <ul>
              <li>GitHub Actions</li>
              <li>Docker basics</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 2-3 weeks</span>
          </div>
        </div>
      </div>

      <div className="roadmap-footer">
        <h3>Additional Learning Paths</h3>
        <div className="additional-paths">
          <div className="path-card">
            <h4>TypeScript</h4>
            <p>Add type safety to your JavaScript code</p>
          </div>
          <div className="path-card">
            <h4>GraphQL</h4>
            <p>Modern API query language</p>
          </div>
          <div className="path-card">
            <h4>WebSockets</h4>
            <p>Real-time communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevRoadmap;