import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import {pizzaData} from "./data.js" 

function App() {
  return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
  );
}

function Header() {
  	return (
		<div className="header">
			<h1>Ka Seng's Pizza Co.</h1>
		</div>
	)
}

function Menu() {
	return (
		<div className="menu">
			<h2>Our Menu</h2>
			<Pizza />
		</div>
	)
}


function timeToHours(time) {
  const [hours] = time.split(':').map(Number);
  return hours;
}

let open = "10:00:00"
let close = "22:00:00"
let now = new Date();
let current = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit'});

const openTime = timeToHours(open);
const closeTime = timeToHours(close);
const currentTime = timeToHours(now.toLocaleTimeString('en-US', {hour12: false }));

function Footer() {
	let footerText;
	let button;
	if (currentTime > openTime && currentTime < closeTime) {
		footerText = "We're currently open"
		button =
			<btn>
				<div className="btn">
					Order Here
				</div>
			</btn>
	}
	else {
		footerText = "Sorry we're closed"
	}
	return (
		<div>
			<footer className="footer">{footerText}</footer>
			Current time: {current}
			{button}
		</div>
	)
}

function Pizza() {
	return (
		<ul className="no-bullets, pizzas">
			{pizzaData.map(pizza => (
				<li key={pizza.name}>
					<div className="pizza">
						<img 
							src={pizza.photoName}
							alt={pizza.name}
						/>
						<h3>{pizza.name}</h3>
						<p>{pizza.ingredients}</p>
						<p>Price: ${pizza.price}</p>
						{pizza.soldOut && <p style={{ color: "red" }}>Sold Out!</p>}
					</div>
				</li>
			))}
		</ul>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
