import "./DataScience.css";

const DataScienceRoadmap = () => {
  return (
    <div className="ds-container">
      <div className="ds-header">
        <h1 className="ds-heading">Data Science Roadmap </h1>
        <p className="ds-description">
          A complete guide to becoming a data scientist. Master statistics, machine learning, and data visualization in 6-9 months.
        </p>
        <div className="progress-tracker">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }}></div>
          </div>
          <span>Start your data science journey</span>
        </div>
      </div>

      <div className="roadmap-grid">
        {/* Math & Statistics */}
        <div className="roadmap-card math">
          <div className="card-header">
            <div className="card-icon">🧮</div>
            <h2>1. Math & Statistics (4-6 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Core Concepts</h3>
            <ul>
              <li>Linear Algebra</li>
              <li>Probability</li>
              <li>Descriptive & Inferential Stats</li>
            </ul>
            
            <h3>Applied Statistics</h3>
            <ul>
              <li>Hypothesis Testing</li>
              <li>Regression Analysis</li>
              <li>Bayesian Thinking</li>
            </ul>
            
            <div className="projects">
              <h4>Practice:</h4>
              <p>Statistical analysis of datasets, A/B testing simulations</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-6 weeks</span>
          </div>
        </div>

        {/* Programming */}
        <div className="roadmap-card programming">
          <div className="card-header">
            <div className="card-icon">💻</div>
            <h2>2. Programming (5-7 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Python Fundamentals</h3>
            <ul>
              <li>Python Syntax</li>
              <li>NumPy & Pandas</li>
              <li>Data Structures</li>
            </ul>
            
            <h3>Data Handling</h3>
            <ul>
              <li>Data Cleaning</li>
              <li>APIs & Web Scraping</li>
              <li>SQL Basics</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Data cleaning pipeline, Web scraper</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 5-7 weeks</span>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="roadmap-card visualization">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h2>3. Data Visualization (3-4 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Tools</h3>
            <ul>
              <li>Matplotlib & Seaborn</li>
              <li>Plotly & Dash</li>
              <li>Tableau/Power BI</li>
            </ul>
            
            <h3>Principles</h3>
            <ul>
              <li>Effective Storytelling</li>
              <li>Dashboard Design</li>
              <li>Interactive Visuals</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>COVID-19 dashboard, Sales performance report</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 3-4 weeks</span>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="roadmap-card ml">
          <div className="card-header">
            <div className="card-icon">🤖</div>
            <h2>4. Machine Learning (6-8 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Supervised Learning</h3>
            <ul>
              <li>Linear/Logistic Regression</li>
              <li>Decision Trees & Random Forest</li>
              <li>SVM & k-NN</li>
            </ul>
            
            <h3>Unsupervised Learning</h3>
            <ul>
              <li>Clustering (k-Means, DBSCAN)</li>
              <li>Dimensionality Reduction (PCA)</li>
              <li>Association Rules</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>House price prediction, Customer segmentation</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 6-8 weeks</span>
          </div>
        </div>

        {/* Deep Learning */}
        <div className="roadmap-card dl">
          <div className="card-header">
            <div className="card-icon">🧠</div>
            <h2>5. Deep Learning (4-6 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Neural Networks</h3>
            <ul>
              <li>TensorFlow/PyTorch</li>
              <li>CNNs for Computer Vision</li>
              <li>RNNs for Time Series</li>
            </ul>
            
            <h3>Advanced Topics</h3>
            <ul>
              <li>Transfer Learning</li>
              <li>Transformers (BERT, GPT)</li>
              <li>AutoML</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Image classifier, Text sentiment analysis</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-6 weeks</span>
          </div>
        </div>

        {/* Deployment */}
        <div className="roadmap-card deployment">
          <div className="card-header">
            <div className="card-icon">🚀</div>
            <h2>6. Deployment & MLOps (4-5 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Model Deployment</h3>
            <ul>
              <li>Flask/FastAPI</li>
              <li>Docker Containers</li>
              <li>Cloud Platforms (AWS/GCP)</li>
            </ul>
            
            <h3>MLOps</h3>
            <ul>
              <li>Model Monitoring</li>
              <li>CI/CD for ML</li>
              <li>Feature Stores</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-5 weeks</span>
          </div>
        </div>
      </div>

      <div className="roadmap-footer">
        <h3>Specializations</h3>
        <div className="additional-paths">
          <div className="path-card">
            <h4>NLP</h4>
            <p>Text processing & language models</p>
          </div>
          <div className="path-card">
            <h4>Computer Vision</h4>
            <p>Image & video analysis</p>
          </div>
          <div className="path-card">
            <h4>Time Series</h4>
            <p>Forecasting & anomaly detection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceRoadmap;