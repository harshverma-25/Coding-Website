import React from "react";
import "./Notes.css";
import { Link } from "react-router-dom";

const NoteCard = ({ title, image, link }) => {
  const isExternal = link.startsWith("http");
  return (
    <div className="note-card">
      <img src={image} alt={title} className="note-image" />
      <h2>{title}</h2>
      <p>Download Notes Here</p>
      {isExternal ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="notes-button"
        >
          Open Notes
        </a>
      ) : (
        <Link to={link} className="notes-button">
          Open Notes
        </Link>
      )}
    </div>
  );
};

const notesData = [
  { title: "C Language", image: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png", link: "https://www.w3schools.com/c/" },
  { title: "C++", image: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png", link: "https://www.w3schools.com/cpp/" },
  { title: "Java", image: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png", link: "https://www.w3schools.com/java/" },
  { title: "Python", image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png", link: "https://www.w3schools.com/python/" },
  { title: "HTML", image: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png", link: "https://www.w3schools.com/html/" },
  { title: "CSS", image: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png", link: "https://www.w3schools.com/css/" },
  { title: "JavaScript", image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png", link: "https://www.w3schools.com/js/" },
  { title: "React", image: "https://cdn-icons-png.flaticon.com/128/875/875209.png", link: "https://www.w3schools.com/react/" },
  { title: "MySQL", image: "https://cdn-icons-png.flaticon.com/128/919/919836.png", link: "https://www.w3schools.com/mysql/" },
  { title: "PHP", image: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png", link: "https://www.w3schools.com/php/" },
  { title: "C#", image: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png", link: "https://www.w3schools.com/cs/" },
  { title: "Node.js", image: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png", link: "https://www.w3schools.com/nodejs/" },
  { title: "R", image: "https://cdn-icons-png.flaticon.com/128/2103/2103694.png", link: "https://www.w3schools.com/r/" },
  { title: "Go", image: "https://cdn-icons-png.flaticon.com/128/3203/3203588.png", link: "https://www.w3schools.com/go/" },
  { title: "MongoDB", image: "https://cdn-icons-png.flaticon.com/128/2906/2906274.png", link: "https://www.w3schools.com/mongodb/" },
];

const Notes = () => {
  return (
    <div className="notes-container">
      <h1>Programming Notes</h1>
      <div className="notes-grid">
        {notesData.map((note, index) => (
          <NoteCard key={index} title={note.title} image={note.image} link={note.link} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
