import React from "react"

class Blog2 extends React.Component {
    async componentDidMount() {
        console.log("you there")
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }
        }
        console.log(req + "hello")
        const response = await fetch("http://localhost:3000/blog2",req)
        console.log(response + "we got a response")
        const result = await response.json()
        console.log(result)
        console.log("hey we're working")
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

export default Blog2;