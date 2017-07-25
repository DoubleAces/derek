import React from 'react';

class Contact extends React.Component {

	render() {
		return(
			<section id="contact" className="contact pt-250 pb-250">
				<h2 className="indent">Contact</h2>
				<div className="block-map ">
					<div id="map" className="map"></div>
				</div>
				<div className="container block-contact">
					<div className="row">
						<div className="col-md-5 col-md-offset-7 col-sm-5 col-sm-offset-7">
							<ul className="block-social mb-30">
								<li><a href="#"><i className="icon-facebook"></i></a></li>
								<li><a href="#"><i className="icon-twitter"></i></a></li>
								<li><a href="#"><i className="icon-vimeo"></i></a></li>
							</ul>
							<div className="block-info mb-30">
								<p><strong>Avatud E-P 11:00 - 22:00</strong><br />
									Dear guests, you are welcomed to dine with us at Tasty  restaurant.
									Have a pleasant dining experience.
									<br /><br />
									Fr. R. Faehlmanni 3 <br />
									Tallinn, Eesti<br /><br />
									Telefon: 5567 2010 <br />
									Email : <span><a href="mailto:customers@tasty.net">customers@tasty.net</a></span>
								</p>
							</div>
						</div>
						<div className="col-md-5 col-md-offset-7 col-sm-5 col-sm-offset-7">
							<footer className="footer-short mt-40">
								<p>	&copy; 2017 all rights reserved - a product of mutationthemes.</p>
							</footer>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default Contact;
