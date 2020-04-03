import React from 'react';
import '../assets/css/templatemo-style.css';

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success'){
                alert("Message Sent");
                this.resetForm()
            }else if(response.status === 'fail'){
                alert("Message failed to send")
            }
        })
    }

    resetForm() {
        this.setState({name: '', email: '', subject: '', message: ''})
    }

    render() {
        return(
            <div className="contact-row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            required=""
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required=""
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            required=""
                            value={this.state.subject}
                            onChange={this.onSubjectChange.bind(this)}
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            required=""
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button">
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        );
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
  }

export default Email;