import React from 'react';
import Form from './form';

const Contact = () => {

  return (
    <div>
      <section className="contact">
        <h3 className="main-cat">CONTACT</h3>
        <div className="line"></div>
        <div className="con-sides">
          <Form />
          <div className="con-right">
            <div className="contacts">
              {/* <div className="contacts-sub"> */}
                <div className="con">
                  <i class="fas fa-envelope-open-text icon"></i>
                  Email
                  <div className="con-sub">
                    bbriannwalshh@gmail.com
                  </div>
                </div>
                <div className="con">
                  <i class="fas fa-phone icon"></i>
                  Phone
                  <div className="con-sub"> 
                    (408) 644-6300
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="contacts-sub"> */}
                <a href="https://www.linkedin.com/in/brian-tjoe-walsh-89086991/" target="_blank" rel="noopener noreferrer" className="con">
                  <i class="fab fa-linkedin icon large-top"></i>
                  LinkedIn
                </a>  
                <a href="https://github.com/bbriannwalshh" target="_blank" rel="noopener noreferrer" className="con">
                  <i className="fab fa-github icon large-top"></i>
                  Github
                </a>  
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;