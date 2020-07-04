import React, { Component } from "react";

export default class Navbar extends Component {
	render() {
		return (
			<div
				className="search__container"
				style={{ display: "flex", margin: "20px 20px 50px 20px", padding: "0px" }}
			>
				<input
					style={{
						boxShadow: "2px 2px 10px #e2e2e2",
						width: "70%",
						marginRight: "15%",
					}}
					className="search__input"
					type="text"
					placeholder="Search..."
				/>
				<button style={{ border: "none", margin: "0px 10px", background: "none" }}>Log in</button>
				<button
					className="uk-margin-auto-vertical"
					style={{
						border: "2px solid black",
						width: "30px",
						height: "30px",
						borderRadius: "50%",
						background: "none",
					}}
				>
					+
				</button>
			</div>
		);
	}
}
