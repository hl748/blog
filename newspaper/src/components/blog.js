import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import "./blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
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
