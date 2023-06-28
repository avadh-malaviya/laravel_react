import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Test() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Child() {
    return (
        <div className="container">
            Child
        </div>
    );
}

function Example() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Test/>}/>
                <Route path="/child" element = {<Child/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
