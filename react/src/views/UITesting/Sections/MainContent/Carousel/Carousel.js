import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default class Carousel extends Component {
	render() {
		return (
			<AwesomeSlider style={{ height: "350px", width: "250px" }}>
				<div data-src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" />
				<div data-src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" />
				<div data-src="https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" />
			</AwesomeSlider>
		);
	}
}
