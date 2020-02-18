import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <section className="skills">
        {/* <h2 className="title">Skills</h2> */}
        <h3 className="main-cat">PROJECTS</h3>
        <div className="line prj"></div>
        <section className="proj slwcld-proj">
          <img src="slowcloud.png" alt="" className="proj-pic slwclwd"/>
          <div className="proj-text">
            <h3 className="proj-title">SLOWCLOUD</h3>
            <article className="paragraphs projecto">
              SlowCloud is a Shoegaze themed clone of SoundCloud, a music sharing 
              application. Shoegaze is a genre of music defined in the 80's & 
              early 90's, which juxtaposes extreme distortion and noise with 
              beautiful pop melodies. Users can upload, listen to, and share 
              music for free. Users can also view each others' profiles to see 
              their uploads. 
            </article>
            <article className="paragraphs projecto">
              This application was built in a two week timeframe, using React/Redux 
              for frontend rendering, Ruby on Rails for backend MVC framework, 
              & PostgresQL and AWS S3 for database.
            </article>
            <div className="project-buttons">
              <a href="https://slowcloud.herokuapp.com/#/" target="_blank" rel="noopener noreferrer" className="btn btn--submit btn-prj">LIVE SITE</a>
              <a href="https://github.com/brian-tjoe-walsh/SlowCloud" target="_blank" rel="noopener noreferrer" className="btn btn-clear btn-prj-two">GITHUB REPO</a>
            </div>
          </div>
        </section>
        <section className="proj sqr">
          <img src="squaregroove.png" alt="" className="proj-pic sqr-pic" />
          <div className="proj-text sqrgrv">
            <h3 className="proj-title">SQUAREGROOVE</h3>
            <article className="paragraphs projecto">
              SquareGroove is a programmable audio synthesizer, created by 3 
              engineers over the span of 5 days. Our goal was to provide an 
              intuitive way for those who have little to no music background 
              to begin creating their own songs. We wanted to give everyone the 
              opportunity to love the process of making music, and hopefully 
              provide a foundation for a future in music learning and creation.
            </article>
            <article className="paragraphs projecto">
              This application uses React/Redux for frontend rendering, Express.js 
              for backend MVC framework, & MongoDB and AWS S3 for database
            </article>
            <div className="project-buttons">
              <a href="https://squaregroove.herokuapp.com/#/" target="_blank" rel="noopener noreferrer" className="btn btn--submit btn-prj">LIVE SITE</a>
              <a href="https://github.com/brian-tjoe-walsh/SquareGroove" target="_blank" rel="noopener noreferrer" className="btn btn-clear btn-prj-two">GITHUB REPO</a>
            </div>
          </div>
        </section>
        <section className="proj">
          <img src="desolation.png" alt="" className="proj-pic"/>
          <div className="proj-text">
            <h3 className="proj-title">THE DESOLATION OF SMOG</h3>
            <article className="paragraphs projecto">
              Using yearly CO2 emissions data, differentiated by year and country, 
              I made a single-page web application intended to convey the gravity 
              of climate change through a data visualization. It can be very difficult
              to understand what our impact is on climate change, so my goal was to not
              only show the amount of CO2 emitted per country over time, but also to
              provide more context on what a single metric ton of CO2 really means to 
              your average person.

            </article>
            <article className="paragraphs projecto">
              This application was built with D3, Vanilla Javascript & HTML5,
              using emissions data from OWID based on the Global Carbon Project; 
              Carbon Dioxide Information Analysis Centre (CDIAC);
              Gapminder and UN population estimates 
            </article>
            <div className="project-buttons">
              <a href="https://brian-tjoe-walsh.github.io/TheDesolationOfSmog/" target="_blank" rel="noopener noreferrer" className="btn btn--submit btn-prj">LIVE SITE</a>
              <a href="https://github.com/brian-tjoe-walsh/TheDesolationOfSmog" target="_blank" rel="noopener noreferrer" className="btn btn-clear btn-prj-two">GITHUB REPO</a>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}

export default Projects;