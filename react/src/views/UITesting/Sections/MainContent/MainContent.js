import React, { Component } from "react";

import Carousel from "./Carousel/Carousel";
import Card from "./Card/Card";

export default class MainContent extends Component {
	render() {
		return (
			<div>
				<div style={{ display: "flex" }}>
					<div style={{ width: "30%" }}>
						<Carousel />
					</div>
					<div style={{ width: "55%" }}>
						<div>
							<h3>
								<strong>Lorem Ipsum dolor sit amet</strong>
							</h3>
						</div>
						<div>
							<p>Filmmaking {">"} Recent Works</p>
							<hr />
						</div>
						<Card />
						<hr />
						<Card />
					</div>
				</div>

				<div>
					<h2>About Project</h2>
					<hr />
					<p>
						Et proident nulla officia reprehenderit. Culpa deserunt labore aliqua aliquip amet dolor dolore
						deserunt sit. Labore aliqua sunt velit commodo reprehenderit laborum in duis deserunt esse do.
						Est ad dolore id magna adipisicing sunt est excepteur dolor deserunt.
					</p>
				</div>
				<div>
					<hr />
					<h2>Preview Trailer</h2>
					<img
						style={{ width: "80%" }}
						src="https://i0.wp.com/www.irishfilmcritic.com/wp-content/uploads/2019/09/Joker.jpg?resize=1863%2C932&ssl=1"
					></img>
				</div>
			</div>
		);
	}
}
