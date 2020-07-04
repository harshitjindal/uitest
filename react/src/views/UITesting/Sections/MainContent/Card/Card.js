import React, { Component } from "react";

export default class Card extends Component {
	render() {
		return (
			<div className="uk-flex">
				<div className="" style={{ width: "15%" }}>
					<img
						style={{ height: "55px", width: "55px", borderRadius: "10px" }}
						src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
					></img>
				</div>
				<div className="uk-width-expand">
					<div style={{ display: "flex" }}>
						<p>
							<strong>John Lenon</strong>
						</p>
					</div>
					<div>
						<p style={{ fontSize: "1.25rem" }}>
							Ad adipisicing sunt adipisicing dolore. Irure est nulla ad exercitation incididunt laboris
							qui sint anim. Exercitation dolore eiusmod laborum
						</p>
					</div>
				</div>
			</div>
		);
	}
}
