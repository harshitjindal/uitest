import React, { Component } from "react";
import Navbar from "./Sections/Navbar/Navbar.js";
import MainContent from "./Sections/MainContent/MainContent.js";
import Sidebar from "./Sections/Sidebar/Sidebar.js";

export default class UITesting extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="uk-flex uk-grid uk-grid-match">
					<div style={{ width: "70%" }}>
						<MainContent />
					</div>
					<div style={{ width: "30%" }}>
						<Sidebar />
					</div>
				</div>
			</div>
		);
	}
}
