import React from "react"
import { BrowserRouter } from "react-router-dom"
// import { Link} from "react-router-dom"

class Dashboard extends React.Component {
    async componentDidMount() {
        console.log("this loading is working")
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }
        }
        console.log(req)
        const response = await fetch("http://localhost:3000/list",req)
        console.log(response)
        console.log()
        var something = await response.json()
        console.log(something)
        for(var i = 0; i < something.length; i++){
        document.getElementById("article").innerHTML += `
            <a href="/link${i}"><h1>${JSON.stringify(something[i].title)}</h1></a>
            <a href="/edit${i}"><p>Edit ${JSON.stringify(something[i].title)}</p></a>
        `
        }
    }
    
    render(){
        return(
            <div id="article">

            </div>
        )
    }
}

export default Dashboard;