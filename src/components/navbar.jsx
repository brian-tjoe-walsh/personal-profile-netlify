import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = false;
    this.menu = document.getElementById("menu");
    this.removeClass = this.removeClass.bind(this);
  }

  handleClick() {
    if (!this.menu) {
      this.menu = document.getElementById("menu");
    }
    if (!this.clicked) {
      this.clicked = true;
      // this.menu.classList.remove("slideUp");
      this.menu.classList.add("onClick");
      // ele.classList.add("display");
    } else {
      this.clicked = false;
      this.menu.classList.add("slideUp");
      setTimeout(this.removeClass, 500);
    }
  }

  removeClass() {
    debugger
    this.menu.classList.remove("onClick");
    this.menu.classList.remove("slideUp");
  }
  render() {
    return (
      <div>
        <div className="nav-bar">
          <header className="nav-left">
            <div className="header name">
              BRIAN TJOE WALSH
            </div>
            <div className="header portfolio">
              PERSONAL PORTFOLIO
            </div>
          </header>
          <i className="fas fa-bars" onClick={this.handleClick.bind(this)}></i>
        </div>
        <div className="menu-dropdown" id="menu">
          <a className="menu-item" href="#jump-about">ABOUT</a>
          <a className="menu-item" href="#jump-language">LANGUAGES</a>
          <a className="menu-item" href="#jump-projects">PROJECTS</a>
          <a className="menu-item no-bottom" href="#jump-contact  ">CONTACT</a>
        </div>
      </div>
    );
  }
}

export default NavBar;