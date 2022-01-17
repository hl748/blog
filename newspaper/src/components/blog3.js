import React from "react"

class Blog3 extends React.Component {
    async componentDidMount() {
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }
        }
        const response = await fetch("http://localhost:3000/blog3",req)
        const result = await response.json()
        document.getElementById("blog").innerHTML += `
            <h1>${JSON.stringify(result.title)}</h1>
            <p>${JSON.stringify(result.body)}</p>
        `
    }
    render(){
        return(
            <div id="blog"> 

            </div>
        )
    }
}

export default Blog3;