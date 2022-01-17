import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard"
import Edit from "./components/edit"
import Edit2 from "./components/edit2"
import Edit3 from "./components/edit3"
import { BrowserRouter,Router,Route,Routes } from "react-router-dom"
import Blog from "./components/blog"
import Blog2 from "./components/blog2"
import Blog3 from "./components/blog3"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/link0" element={<Blog />}></Route>
                  <Route path="/link1" element={<Blog2 />}></Route>
                  <Route path="/link2" element={<Blog3 />}></Route>
                  
                  <Route path="/edit0" element={<Edit />}></Route>
                  <Route path="/edit1" element={<Edit2 />}></Route>
                  <Route path="/edit2" element={<Edit3 />}></Route>
                  </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;
