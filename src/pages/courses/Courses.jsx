// src/pages/Courses.jsx
import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";

const coursesData = [
  {
    title: "C Language",
    image: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
    link: "https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt",
  },
  {
    title: "C++",
    image: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
    link: "https://www.youtube.com/playlist?list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd",
  },
  {
    title: "Java",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
    link: "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5",
  },
  {
    title: "Python",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
  },
  {
    title: "HTML",
    image: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
    link: "https://www.youtube.com/watch?v=rklidcZ-aLU",
  },
  {
    title: "CSS",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
    link: "https://www.youtube.com/watch?v=OpWjt_wbV4E",
  },
  {
    title: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37",
  },
  {
    title: "React",
    image: "https://cdn-icons-png.flaticon.com/128/875/875209.png",
    link: "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
  },
  {
    title: "MySQL",
    image: "https://cdn-icons-png.flaticon.com/128/919/919836.png",
    link: "https://www.youtube.com/watch?v=hlGoQC332VM",
  },
];

const CourseCard = ({ title, image, link }) => {
  const isExternal = link.startsWith("http");
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h2>{title}</h2>
      <p>Open the course</p>
      {isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="course-button">
          Open Course
        </a>
      ) : (
        <Link to={link} className="course-button">
          Open Notes
        </Link>
      )}
    </div>
  );
};

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Free YouTube Courses</h1>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
