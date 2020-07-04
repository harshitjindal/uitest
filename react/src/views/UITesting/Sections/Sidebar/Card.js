import React, { Component } from "react";

export default class Card extends Component {
	render() {
		return (
			<div>
				<div class="uk-card uk-card-default" style={{ marginTop: "15px" }}>
					<div class="" style={{ padding: "10px 10px 0px 10px" }}>
						<div class="uk-grid-small uk-flex-middle uk-flex" uk-grid>
							<div>
								<img
									// class="uk-border-circle"
									style={{
										borderRadius: "10px",
										width: "45px",
										height: "45px",
										//marginLeft: "-20px",
									}}
									src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
								/>
							</div>
							<div class="uk-width-expand">
								<div>
									<div style={{ display: "flex" }}>
										<h6
											className="uk-margin-auto-vertical"
											style={{ paddingRight: "10px", width: "60%" }}
										>
											Warren Buffet
										</h6>
										<p className="uk-margin-auto-vertical"> @warrenb </p>
										<button
											style={{
												border: "none",
												background: "none",
												width: "50px",
												marginLeft: "70px",
											}}
											className="uk-margin-auto-vertical uk-align-right"
										>
											...
										</button>
									</div>
								</div>
								<p class="uk-text-meta uk-margin-remove-top">
									<time datetime="2016-04-01T19:00">A few seconds ago...</time>
								</p>
							</div>
						</div>
					</div>
					<div class="uk-card-body" style={{ padding: "0px 10px" }}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
						</p>
					</div>
					<div className="uk-flex" style={{ padding: "10px" }}>
						<div className="uk-width-1-2@s uk-text-center">
							<strong>button1</strong>
						</div>
						<div className="uk-width-1-2@s uk-text-center">
							<strong>button2</strong>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
