import React from 'react';

class Specials extends React.Component {

	render() {
		return(
			<section  id="special" className="special pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center mb-100">
							<h1 className="title">Today's special</h1>
							<p className="beige">Special plate by the chef</p>
						</div>
					</div>
				</div>
				<div className=" container">
					<div className="row">
						<div className="col-md-4  pd-0 block-special">
							<div className="block-img special">
								<div className="background-img" style={{background: 'url('+ require('../images/7.jpg') + ')'}} />
							</div>
							<div className="block-content special sp-1">
								<h2 className="mb-5  h2-s-1">Pepperoni Pasta  </h2>
								<p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
								<span className="block-price special">$14</span>
								<span className="block-border "></span>
							</div>
						</div>
						<div className="col-md-4  pd-0 block-special active ">
							<div className="block-img special">
								<div className="background-img" style={{background: 'url('+ require('../images/8.jpg') + ')'}} />
							</div>
							<div className="block-content special sp-2">
								<h2 className="mb-5  h2-s-1">Mushroom steak  </h2>
								<p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
								<span className="block-price special">$55</span>
							</div>
						</div>
						<div className="col-md-4  pd-0 block-special">
							<div className="block-img special">
								<div className="background-img" style={{background: 'url('+ require('../images/9.jpg') + ')'}} />
							</div>
							<div className="block-content special sp-3">
								<h2 className="mb-5  h2-s-1">Ham Benedict  </h2>
								<p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
								<span className="block-price special">$34</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default Specials;
