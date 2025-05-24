import "./AppDev.css";

const AppDevRoadmap = () => {
  return (
    <div className="appdev-container">
      <div className="appdev-header">
        <h1 className="appdev-heading">App Development Roadmap</h1>
        <p className="appdev-description">
          A complete guide to becoming a mobile app developer. Master cross-platform and native development with this structured learning path. Estimated timeline: 6-9 months.
        </p>
        <div className="progress-tracker">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }}></div>
          </div>
          <span>Start your app development journey</span>
        </div>
      </div>

      <div className="roadmap-grid">
        {/* Foundation */}
        <div className="roadmap-card foundation">
          <div className="card-header">
            <div className="card-icon">📱</div>
            <h2>1. App Development Basics (4-6 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Core Concepts</h3>
            <ul>
              <li>Mobile vs. desktop paradigms</li>
              <li>Platform differences (iOS/Android)</li>
              <li>App architecture patterns</li>
            </ul>
            
            <h3>UI/UX Principles</h3>
            <ul>
              <li>Mobile design patterns</li>
              <li>Touch gestures and interactions</li>
              <li>Accessibility in mobile apps</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Simple calculator app, Weather app UI mockup</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-6 weeks</span>
          </div>
        </div>

        {/* JavaScript/TypeScript */}
        <div className="roadmap-card javascript">
          <div className="card-header">
            <div className="card-icon">⚡</div>
            <h2>2. JavaScript/TypeScript (4-5 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Essential Concepts</h3>
            <ul>
              <li>ES6+ features (Modules, Promises)</li>
              <li>TypeScript fundamentals</li>
              <li>Asynchronous programming</li>
            </ul>
            
            <h3>React Basics</h3>
            <ul>
              <li>Components and props</li>
              <li>State management</li>
              <li>Hooks (useState, useEffect)</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Todo app with React, TypeScript exercises</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-5 weeks</span>
          </div>
        </div>

        {/* React Native */}
        <div className="roadmap-card react-native">
          <div className="card-header">
            <div className="card-icon">🔗</div>
            <h2>3. React Native (5-7 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Core Components</h3>
            <ul>
              <li>Views, Text, ScrollView</li>
              <li>Styling with StyleSheet</li>
              <li>Navigation (React Navigation)</li>
            </ul>
            
            <h3>Advanced Topics</h3>
            <ul>
              <li>Native modules integration</li>
              <li>Performance optimization</li>
              <li>Debugging techniques</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Social media app, E-commerce mobile UI</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 5-7 weeks</span>
          </div>
        </div>

        {/* State Management */}
        <div className="roadmap-card state">
          <div className="card-header">
            <div className="card-icon">🧠</div>
            <h2>4. State Management (3-4 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Options</h3>
            <ul>
              <li>Context API</li>
              <li>Redux Toolkit</li>
              <li>MobX or Zustand</li>
            </ul>
            
            <h3>Data Flow</h3>
            <ul>
              <li>Global vs local state</li>
              <li>Persisting state</li>
              <li>Offline-first approach</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Add state to previous apps, Auth flow implementation</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 3-4 weeks</span>
          </div>
        </div>

        {/* Native Features */}
        <div className="roadmap-card native">
          <div className="card-header">
            <div className="card-icon">📲</div>
            <h2>5. Native Features (4-6 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Device APIs</h3>
            <ul>
              <li>Camera and image processing</li>
              <li>Geolocation and maps</li>
              <li>Push notifications</li>
            </ul>
            
            <h3>Platform Specific</h3>
            <ul>
              <li>Android: Java/Kotlin basics</li>
              <li>iOS: Swift basics</li>
              <li>Bridging native code</li>
            </ul>
            
            <div className="projects">
              <h4>Projects:</h4>
              <p>Photo sharing app, Location-based service</p>
            </div>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 4-6 weeks</span>
          </div>
        </div>

        {/* Testing & Deployment */}
        <div className="roadmap-card deployment">
          <div className="card-header">
            <div className="card-icon">🚀</div>
            <h2>6. Testing & Deployment (3-5 weeks)</h2>
          </div>
          <div className="card-content">
            <h3>Testing</h3>
            <ul>
              <li>Unit testing (Jest)</li>
              <li>Component testing</li>
              <li>E2E testing (Detox)</li>
            </ul>
            
            <h3>Deployment</h3>
            <ul>
              <li>App Store Connect (iOS)</li>
              <li>Google Play Console</li>
              <li>CI/CD pipelines</li>
            </ul>
          </div>
          <div className="card-footer">
            <span className="time-estimate">⏱️ 3-5 weeks</span>
          </div>
        </div>
      </div>

      <div className="roadmap-footer">
        <h3>Advanced Paths</h3>
        <div className="additional-paths">
          <div className="path-card">
            <h4>Flutter</h4>
            <p>Cross-platform with Dart</p>
          </div>
          <div className="path-card">
            <h4>SwiftUI</h4>
            <p>Modern iOS development</p>
          </div>
          <div className="path-card">
            <h4>Kotlin Multiplatform</h4>
            <p>Shared business logic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevRoadmap;