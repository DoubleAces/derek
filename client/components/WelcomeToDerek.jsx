import React from 'react';

class WelcomeToDerek extends React.Component {

	render() {
		return(
			<section id="resto" className="resto pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 text-center mb-100">
							<h1 className="title">Dereku Burger</h1>
							<p className="beige">Welcome to Dereku Burger</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row vertical-align">
						<div className="col-md-5 col-sm-5 ">
							<div className="block-img mb-10">
								<div className="background-img parallax" style={{background: 'url('+ require('../images/3.jpg') + ')'}} />
							</div>
							<div className="block-img ">
								<div className="background-img" style={{background: 'url('+ require('../images/4.jpg') + ')'}} />
							</div>
						</div>
						<div className="col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1  ">
							<div className="block-content">
								<h2 className="title-medium mb-10 pb-10">
									Welcome to Tasty a joyous eatery inspired by  <br />the spirit and culture of italian cuisine.
									<span className="dots"></span>
								</h2>
								<h4 className="title-small">Making delicious italian food since 1990</h4>
								<p className="puch-right mb-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book galley of type and scrambled .</p>
								<img className="sing" src={require('../images/signature.png')} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default WelcomeToDerek;
