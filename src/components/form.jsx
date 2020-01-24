import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: '', email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
    this.setInterval = null;
    this.removeClass = this.removeClass.bind(this);
    this.removeFailure = this.removeFailure.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  clearFields() {
    this.setState({feedback: "", name: "", email: ""});
  }
  
  handleChange(form) {
    return (event => {
      this.setState({ [form]: event.target.value });
    });
  }

  checkForErrors() {
    debugger
    if (this.state.feedback.length < 1) {
      return false;
    }
    if (this.state.name.length < 1) {
      return false;
    }
    if (!this.state.email.includes("@") && !this.state.email.includes(".")) {
      return false;
    }

    return true;

  }

  handleSubmit(event) {
    const templateId = 'profile_page';


    if (this.checkForErrors()) {
      this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email });
    } else {
      this.handleFailure();
    }
  }

  handleSuccess() {
    let ele = document.getElementById("success");
    ele.classList.add("display");
    ele.classList.remove("display-none");
    setTimeout(this.removeClass, 3000);
  }

  handleFailure() {
    let ele = document.getElementById("fail");
    ele.classList.add("display");
    ele.classList.remove("display-none");
    setTimeout(this.removeFailure, 3000);
  }

  removeClass() {
    debugger
    let ele = document.getElementById("success");
    ele.classList.remove("display");
    ele.classList.add("display-none");
    // window.clearInterval(this.setInterval);
  }

  removeFailure() {
    debugger
    let ele = document.getElementById("fail");
    ele.classList.remove("display");
    ele.classList.add("display-none");
    // window.clearInterval(this.setInterval);
  }

  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', 
      templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!');
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));

    this.setState({ feedback: '', name: '', email: '' });
    this.handleSuccess();
  }

  render() {
    return (
      <div className="con-left">
        <form className="test-mailing">
          <h1 className="proj-title line-form">SEND A MESSAGE!</h1>
          <div className="form-shift">
            <div className="form-info">
              <div className="form-sub">
                NAME 
                <input type="text" className="text-field" onChange={this.handleChange("name")} value={this.state.name} placeholder="Name"/>
              </div>
              <div className="form-sub">
                EMAIL 
                <input type="text" className="text-field" onChange={this.handleChange("email")} value={this.state.email} placeholder="email@example.com"/>
              </div>
            </div>
            <div className="form-sub">
              MESSAGE
            </div>
            <textarea
              // type="text-area"
              // id="test-mailing"
              className="text-field large"
              onChange={this.handleChange("feedback")}
              placeholder="Let me know if you'd like to meet!"
              required
              value={this.state.feedback}
            />
          </div>
          <div>
            <input type="button" value="SEND MESSAGE" className="btn btn--submit" onClick={this.handleSubmit} />
            <input type="button" value="CLEAR" className="btn btn-clear" onClick={this.clearFields} />
          </div>
        </form>
        <div id="success" className="form-success display-none">
          <p className="proj-title form-succ">Your Email Was Sent!</p>
          <p className="paragraphs projecto form-p">I Will Respond As Soon As I Can</p>
          <p className="paragraphs projecto form-p">Thank You For Your Patience</p>
        </div>
        <div id="fail" className="form-success failure display-none">
          <p className="proj-title form-succ fl">Your Email Was Not Sent!</p>
          <p className="paragraphs projecto form-p fl">You may not have filled in all areas fully, or correctly. Please try again.</p>
          <p className="paragraphs projecto form-p fl">Thank you for your patience!</p>
        </div>
      </div>
    )
  }

}