import React from "react"
class Edit3 extends React.Component {
    
  handleSubmit = async (e) => {
    e.preventDefault()
    console.log("we're to this step")
  await fetch("http://localhost:3000/edit3", {
    method: "POST",
    body: JSON.stringify({ editblog: document.getElementById("textarea").value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
};

render(){
    return(
        <div>
        <form>
        <textarea
          name="blogContent"
          // Great good day to youu then
          id="textarea"
          rows="10"
          cols="100"
        ></textarea>
        <br></br>

        
    
      </form>
      <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
}

}

export default Edit3