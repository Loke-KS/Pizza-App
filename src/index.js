import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div>
            <Header />
            <Pizza />
            <br />
            <Pizza2 />
            <br />
            <Pizza3 />
            <br />
            <Pizza4 />
            <br />
            <Pizza5 />
            <br />
            <Pizza6 />
        </div>
    );
}

function Header() {
    return <h1>Andy's Pizza Co.</h1>
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/focaccia.jpg"></img>
            <h2>Focaccia Pizza</h2>
        </div>
    );
}

function Pizza2() {
    return (
        <div>
            <img src="pizzas/funghi.jpg"></img>
            <h2>Funghi Pizza</h2>
        </div>
    );
}

function Pizza3() {
    return (
        <div>
            <img src="pizzas/margherita.jpg"></img>
            <h2>Margherita Pizza</h2>
        </div>
    );
}

function Pizza4() {
    return (
        <div>
            <img src="pizzas/prosciutto.jpg"></img>
            <h2>Prosciutto Pizza</h2>
        </div>
    );
}

function Pizza5() {
    return (
        <div>
            <img src="pizzas/salamino.jpg"></img>
            <h2>Salamino Pizza</h2>
        </div>
    );
}

function Pizza6() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg"></img>
            <h2>Spinaci Pizza</h2>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);