import React, { Component } from "react";

import Card from "./Card";

export default class Sidebar extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "#e8e5e4", padding: "10px 15px" }}>
				<div style={{ display: "flex" }}>
					<h6>Reactions: </h6>
					<div style={{ margin: "auto 5px" }}>
						<img
							style={{ margin: "auto 5px", height: "25px", width: "25px", borderRadius: "4px" }}
							src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
						></img>
						<img
							style={{ margin: "auto 5px", height: "25px", width: "25px", borderRadius: "4px" }}
							src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
						></img>
						<img
							style={{ margin: "auto 5px", height: "25px", width: "25px", borderRadius: "4px" }}
							src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
						></img>
						<img
							style={{ margin: "auto 5px", height: "25px", width: "25px", borderRadius: "4px" }}
							src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
						></img>
					</div>
				</div>
				<Card />
				<Card />
			</div>
		);
	}
}
