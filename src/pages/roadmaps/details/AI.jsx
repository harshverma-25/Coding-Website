import "./AIRoadmap.css";

const AIRoadmap = () => {
  return (
    <div className="ai-container">
      <div className="ai-header">
        <h1 className="ai-heading">Artificial Intelligence Roadmap </h1>
        <p className="ai-description">
          Master AI from fundamentals to cutting-edge technologies. Estimated timeline: 8-12 months to become proficient.
        </p>
        <div className="progress-tracker">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }}></div>
          </div>
          <span>Initiate AI learning sequence</span>
        </div>
      </div>

      <div className="roadmap-grid">
        {/* Math Foundations */}
        <div className="roadmap-card math">
          <div className="card-header">
            <div className="card-icon">🧮</div>
            <h2>1. Mathematical Foundations (6-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Core Mathematics</h3>
            <ul>
              <li>Linear Algebra (Tensors, Matrix Operations)</li>
              <li>Calculus (Gradients, Optimization)</li>
              <li>Probability & Statistics (Distributions, Bayes)</li>
            </ul>
            
            <h3>Advanced Topics</h3>
            <ul>
              <li>Information Theory</li>
              <li>Game Theory</li>
              <li>Numerical Methods</li>
            </ul>
            
            <div className="projects">
              <h4>Practice:</h4>
              <p>Implement gradient descent from scratch, Statistical simulations</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 6-8 weeks</span>
          </div>
        </div>

        {/* Programming */}
        <div className="roadmap-card programming">
          <div className="card-header">
            <div className="card-icon">⌨️</div>
            <h2>2. AI Programming (5-7 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Python Ecosystem</h3>
            <ul>
              <li>NumPy, Pandas, Matplotlib</li>
              <li>Object-Oriented Programming</li>
              <li>Algorithm Complexity</li>
            </ul>
            
            <h3>AI Libraries</h3>
            <ul>
              <li>PyTorch/TensorFlow</li>
              <li>Scikit-learn</li>
              <li>Jupyter Notebooks</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Neural network from scratch, Data pipeline</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 5-7 weeks</span>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="roadmap-card ml">
          <div className="card-header">
            <div className="card-icon">🤖</div>
            <h2>3. Machine Learning (8-10 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Fundamentals</h3>
            <ul>
              <li>Supervised/Unsupervised Learning</li>
              <li>Bias-Variance Tradeoff</li>
              <li>Evaluation Metrics</li>
            </ul>
            
            <h3>Advanced Models</h3>
            <ul>
              <li>Ensemble Methods</li>
              <li>SVMs</li>
              <li>Probabilistic Graphical Models</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Kaggle competitions, End-to-end ML pipeline</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 8-10 weeks</span>
          </div>
        </div>

        {/* Deep Learning */}
        <div className="roadmap-card dl">
          <div className="card-header">
            <div className="card-icon">🧠</div>
            <h2>4. Deep Learning (10-12 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Neural Architectures</h3>
            <ul>
              <li>CNNs (ResNet, EfficientNet)</li>
              <li>RNNs/LSTMs/Transformers</li>
              <li>Attention Mechanisms</li>
            </ul>
            
            <h3>Training Techniques</h3>
            <ul>
              <li>Transfer Learning</li>
              <li>Regularization</li>
              <li>Distributed Training</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Image segmentation, Language model</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 10-12 weeks</span>
          </div>
        </div>

        {/* Specialized AI */}
        <div className="roadmap-card specialized">
          <div className="card-header">
            <div className="card-icon">🔍</div>
            <h2>5. Specialized AI Domains (8-10 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Key Areas</h3>
            <ul>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
              <li>Reinforcement Learning</li>
            </ul>
            
            <h3>Emerging Fields</h3>
            <ul>
              <li>Generative AI (GANs, Diffusion)</li>
              <li>Multimodal Learning</li>
              <li>Neuro-Symbolic AI</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Chatbot, Object detection system</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 8-10 weeks</span>
          </div>
        </div>

        {/* Production AI */}
        <div className="roadmap-card production">
          <div className="card-header">
            <div className="card-icon">🚀</div>
            <h2>6. Production AI (6-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>ML Engineering</h3>
            <ul>
              <li>Model Optimization</li>
              <li>ONNX/TensorRT</li>
              <li>Edge AI</li>
            </ul>
            
            <h3>MLOps</h3>
            <ul>
              <li>Containerization</li>
              <li>CI/CD for AI</li>
              <li>Monitoring</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 6-8 weeks</span>
          </div>
        </div>
      </div>

      <div className="roadmap-footer">
        <h3>Advanced Research Areas</h3>
        <div className="additional-paths">
          <div className="path-card">
            <h4>LLMs</h4>
            <p>Large Language Models</p>
          </div>
          <div className="path-card">
            <h4>AI Safety</h4>
            <p>Ethics & Alignment</p>
          </div>
          <div className="path-card">
            <h4>Neuroscience</h4>
            <p>Biological Inspiration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadmap;