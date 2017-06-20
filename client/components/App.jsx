import React from 'react';
import io from 'socket.io-client';
require('../style/bootstrap.css');
require('../style/base.css');
require('../style/main.css');
require('../style/flexslider.css');
require('../style/fonts.css');
require('../style/site.css');

require('../scripts/jquery.flexslider-min');
require('../scripts/smooth-scroll');
require('../scripts/jquery.validate.min');
require('../scripts/script.js');
// require('../scripts/placeholders.min');

import PreLoader from './PreLoader';
const socket = io.connect('http://localhost:3000');

class App extends React.Component {

	componentDidMount() {
		$(this.refs.mainSlider).css('height', $(window).height());
		window.addEventListener('resize', () => {
			$(this.refs.mainSlider).css('height', $(window).height());
		});
	}

	static sendInfo(e) {
		e.preventDefault();
		let name = $('input[name="name"]').val();
		socket.emit('save', {
			model: 'User',
			data: {
				name: name
			}
		});
	}
	
	
	render() {
		return(
			<div>
				<PreLoader />
				<div className="wrapper">
					<section className="hero overlay">
						<div className="main-slider slider" ref="mainSlider">
							<ul className="slides">
								<li className="flex-active-slide">
									<div className="background-img zoom parallax" style={{background: 'url('+ require('../images/2.jpg') + ')'}} />
								</li>
								<li>
									<div className="background-img zoom parallax" style={{background: 'url('+ require('../images/1.jpg') + ')'}} />
								</li>
							</ul>
						</div>
						<header className="header default">
							<div className="left-part">
								<a className="logo scroll" ref="scroll" href="#hero">
									<h2>tasty</h2>
								</a>
							</div>
							<div className="right-part">
								<nav className="main-nav">
									<div className="toggle-mobile-but">
										<a href="#" className="mobile-but" >
											<div className="lines"></div>
										</a>
									</div>
									<ul>
										<li><a className="scroll" ref="scroll" href="#wrapper">Home</a></li>
										<li><a className="scroll" ref="scroll" href="#resto">Resto</a></li>
										<li><a className="scroll" ref="scroll" href="#menu">Menu</a></li>
										<li><a className="scroll" ref="scroll" href="#special">Special</a></li>
										<li><a className="scroll" ref="scroll" href="#reservation">Reservation</a></li>
										<li><a className="scroll" ref="scroll" href="#gallery">Gallery</a></li>
										<li><a className="scroll" ref="scroll" href="#contact">Contact</a></li>
									</ul>
								</nav>
							</div>
						</header>
					</section>
					<section id="resto" className="resto pt-120 pb-120">
						<div className="container">
							<div className="row">
								<div className="col-sm-12 text-center mb-100">
									<h1 className="title">The restaurant</h1>
									<p className="beige">Welcome to tasty restaurant</p>
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
					<section className="short-reservation pt-200 pb-250 overlay">
						<div className="background-img zoom" style={{background: 'url('+ require('../images/5.jpg') + ')'}} />
						<div className="container">
							<div className="row">
								<div className="col-sm-12 text-center front-p">
									<h1 className="large">make a reservation</h1>
									<p className="lead white top">Opens 8:00 AM - 10:00 PM, every day of the week </p>
									<a href="#reservation" className="but scroll">Book a table</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default App;