import { useEffect, useState } from "react";
import "./Home.css";

const technologies = [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "C++",
  "Artificial Intelligence",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current tech index
  const [subIndex, setSubIndex] = useState(0); // current character index
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), 1000); // pause before deleting
      return () => clearTimeout(pauseTimeout);
    }

    const currentWord = technologies[index];
    const typingSpeed = deleting ? 30 : 30;

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, subIndex));

      if (!deleting && subIndex === currentWord.length) {
        setPause(true);
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % technologies.length);
      } else {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pause]);

  return (
    <section className="home">
      <div className="content">
        <div className="text-section">
          <h2>
            Welcome to <span className="h1">Code X</span>
          </h2>
          <h3 className="text-change">
            Learn <span className="h2">{text}</span>
            <span className="cursor"></span>
          </h3>
          <p>
            Welcome to Code X! Not sure which course to choose? Don't worry!
            Explore our free courses and find the best one for you. I've made
            learning simple so you can master coding with ease.
          </p>
        </div>
        <div className="image-section">
          <img
            className="image-home"
            src="https://media0.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=6c09b952uxzpfmvrou6onqi2ntl98fpbf30b0c7yc889ioe6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
