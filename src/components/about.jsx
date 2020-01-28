import React from 'react';

const About = () => {

  return (
    <div>
      <section className="about" id="about">
        <img src="headshot.jpg" alt="" className="head-shot"/>
        <div className="about-right">
          <h2 className="title">HEY HI HELLO</h2>
            <div className="line abt"></div>
            <article className="paragraphs">
              My name is Brian, and I am a former high school English teacher who 
              discovered a passion for software engineering! I love being able to 
              bring creativity into my career, whether that be making beautiful 
              front-end components, or writing elegantly efficient algorithms. 
              Today, I work in a variety of languages and frameworks to create 
              fully featured web applications as a full-stack web developer.
            </article>
            <div className="project-buttons">
            <a href="https://bbriannwalshh.github.io/personal-portfolio/brian-tjoe-walsh-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--submit btn-prj">RESUME</a>
            <a href="https://www.linkedin.com/in/brian-tjoe-walsh-89086991/" target="_blank" rel="noopener noreferrer" className="btn btn-clear btn-prj-two">LINKEDIN</a>
            </div>
        </div>
      </section>
    </div>
  );
}

export default About;