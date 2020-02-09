import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./ContactForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="alert alert-info">Form validation demo</h1>
        <ContactForm />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
