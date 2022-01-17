import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import "./blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    // lets start from here
    // So a component is a stateful/less right well we have made this one stateful
    // to help us track teh vlaue of the textarea in the form

    // this are methods
    // this one is doing the value change to the state
    // whenever we are typing something in th textarea
    // NB: right here we are just binding them to the 'this' scope (React Component thing)
    // this.handleChange = this.handleChange.bind(this);
    // this one is invoked when we click the submit button
    // NB: right here we are just binding them to the 'this' scope (React Component thing)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  async componentDidMount() {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("http://localhost:3000/blog1", req);
    const result = await response.json();

    document.getElementById("blog").innerHTML += `
        <h1>${result.title}</h1>
        <p id="body">${result.body}</p>
    `
    
  }
  

  render() {
    return (
      <div id="blog">
      </div>
    );
  }
}

export default Blog;
