import React from 'react';

class ReserveBanner extends React.Component {

	render() {
		return(
			<section className="short-reservation pt-200 pb-250 overlay">
				<div className="background-img zoom" style={{background: 'url('+ require('../images/2.jpg') + ')'}} />
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center front-p">
							<h1 className="large">Reserveeri laud</h1>
							<p className="lead white top">Avatud 11.00 - 22:00, iga päev</p>
							<a href="#reservation" className="but scroll">Reserveeri</a>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default ReserveBanner;
