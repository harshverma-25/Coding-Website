import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Notes from "./pages/notes/Notes";
import Roadmap from "./pages/roadmaps/Roadmap";
import WebDev from "./pages/roadmaps/details/WebDev";
import AppDev from "./pages/roadmaps/details/AppDev";
import JavaFullStack from "./pages/roadmaps/details/JavaFullStack";
import DataScience from "./pages/roadmaps/details/DataScience";
import AI from "./pages/roadmaps/details/AI";
import Courses from "./pages/courses/Courses";
import DsaPractice from "./pages/dsaPractice/DsaPractice";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes/>} />
         <Route path="/roadmap" element={<Roadmap />} />
         <Route path="/roadmap/web-dev" element={<WebDev />} />
         <Route path="/roadmap/app-dev" element={<AppDev />} />
         <Route path="/roadmap/java-fullstack" element={<JavaFullStack />} />
         <Route path="/roadmap/data-science" element={<DataScience />} />
          <Route path="/roadmap/ai" element={<AI />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dsapractice" element={<DsaPractice />} /> 
       
      </Routes>
    </Router>
  );
}

export default App;
