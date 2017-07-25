import React from 'react';

class ReservationForm extends React.Component {

	render() {
		return(
			<section id="reservation" className="reservation pt-140 pb-140 bg-grey">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 col-sm-offset-2 text-center mb-100">
							<h1 className="title">reservation</h1>
							<p className="beige">Book a table</p>
							<p className="title-lead  mt-20">
								Please choose your reservation date with specific time and number<br />
								of people to book a table
							</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-8 col-sm-offset-2">
							<div className="block-form">
								<form className="reservation-form " method="post" action="send.php">
									<div className="block-input ico-input">
										<i className="icon-user-1"></i>
										<label>Your name:</label>
										<input  id="name" name="name" type="text" required />
									</div>
									<div className="block-input ico-input">
										<i className="icon-phone"></i>
										<label>Your Phone:</label>
										<input  id="phone" name="phone" type="text" />
									</div>
									<div className="block-input ico-input">
										<i className="icon-mail-1"></i>
										<label>Your Email:</label>
										<input  id="email" name="email" type="text" />
									</div>
									<div className="input-columns block-input clearfix">
										<div className="column-1">
											<div className="column-inner">
												<label>Number of person :  </label>
												<input id="person" min="1" name="person"  type="number" required />
											</div>
										</div>
										<div className="column-2">
											<div className="column-inner">
												<label>Type of table:</label>
												<input id="table" min="1" name="table" type="number" required />
											</div>
										</div>
									</div>
									<div className="input-columns block-input clearfix">
										<div className="column-1">
											<div className="column-inner ico-input">
												<i className="icon-calendar"></i>
												<label>Date :  </label>
												<input className="date" id="date" name="date" type="date" required />
											</div>
										</div>
										<div className="column-2">
											<div className="column-inner ico-input">
												<i className="icon-clock"></i>
												<label>Time:</label>
												<input placeholder="(ex: 7:00 p.m)"  id="time" name="time" type="text" required />
											</div>
										</div>
									</div>
									<button  className=" but submit" type="submit">Book a table</button>

									<div className="success-msg">
										<h2>Your message has been sent. Thank you!</h2>
									</div>
									<div className="error-msg">
										<h2>Sorry your message can not be sent.</h2>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default ReservationForm;
