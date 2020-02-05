import React from 'react';

const Skills = () => {

  return (
    <div className="skills-out">
      <section className="skills">
        {/* <h2 className="title">Skills</h2> */}
        <h3 className="main-cat mobile">LANGUAGES & FRAMEWORKS</h3>
        <h3 className="main-cat non-mobile">LANGUAGES - FRAMEWORKS - TECHNOLOGIES</h3>
        <div className="line"></div>
        <div className="languages tablet-sizing">
          <div className="language">
            <h4 className="cat">Ruby</h4>
            <div className="circle">
              <img src="ruby.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">JavaScript</h4>
            <div className="circle">
              <img src="javascript.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">HTML</h4>
            <div className="circle">
              <img src="html.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">CSS</h4>
            <div className="circle">
              <img src="css.png" alt="" className="lang" />
            </div>
          </div>
        </div>
      <div className="line"></div>
      <div className="languages no-space">
        <div className="languages">
          <div className="language">
            <h4 className="cat">Rails</h4>
            <div className="circle">
              <img src="rails.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">React</h4>
            <div className="circle">
              <img src="logo512.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">AWS</h4>
            <div className="circle">
              <img src="aws.png" alt="" className="lang aws" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">Git</h4>
            <div className="circle">
              <img src="git.png" alt="" className="lang" />
            </div>
          </div>
          {/* <div className="language">
            <h4 className="cat">PostgreSQL</h4>
            <div className="circle">
              <img src="postgresql.png" alt="" className="lang" />
            </div>
          </div> */}
          <div className="language">
            <h4 className="cat">Express</h4>
            <div className="circle">
              <img src="express.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">Node.js</h4>
            <div className="circle">
              <img src="node.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">jQuery</h4>
            <div className="circle">
              <img src="jquery.png" alt="" className="lang" />
            </div>
          </div>
          <div className="language">
            <h4 className="cat">D3</h4>
            <div className="circle">
              <img src="d3.png" alt="" className="lang" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Skills;