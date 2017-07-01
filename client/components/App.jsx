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
								<li style={{position: 'auto'}}>
									<div className="background-img zoom parallax" style={{background: 'url('+ require('../images/2.jpg') + ')'}} />
								</li>
								<li style={{position: 'auto'}}>
									<div className="background-img zoom parallax" style={{background: 'url('+ require('../images/1.jpg') + ')'}} />
								</li>
							</ul>
						</div>
						<header className="header default">
							<div className="left-part">
								<a className="logo scroll" ref="scroll" href="#hero">
									<img src={require('../images/logo.png')} />
									<h2 style={{marginLeft: '13px'}}>Dereku Burger</h2>
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
										<li><a className="scroll" ref="scroll" href="#wrapper">Avaleht</a></li>
										<li><a className="scroll" ref="scroll" href="#resto">Restoran</a></li>
										<li><a className="scroll" ref="scroll" href="#menu">Menüü</a></li>
										<li><a className="scroll" ref="scroll" href="#special">Eripakkumised</a></li>
										<li><a className="scroll" ref="scroll" href="#reservation">Reserveeri</a></li>
										<li><a className="scroll" ref="scroll" href="#contact">Kontakt</a></li>
									</ul>
								</nav>
							</div>
						</header>
						<div className="inner-hero">
							<div className="container hero-content">
								<div className="row">
									<div className="col-sm-12 text-center">
										<h1 className="large">Delicious home made burgers</h1>
										<p className="lead">Making delicious burgers since 2005</p>
									
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="menu" className="menu pt-120 pb-120 ">
						<div className="container">
							<div className="row">
								<div className="col-sm-12  mb-100 text-center">
									<h1 className="title">Menüü</h1>
									<p className="beige">Dereku Burgeri Faehlmanni tänava menüü</p>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-sm-12 ">
									<ul className="block-tabs text-center">
										<li className="active">Burgerid</li>
										<li className="">Ekstra</li>
										{/*<li className="">Dessert</li>*/}
										{/*<li className="">Beverages</li>*/}
									</ul>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<ul className="block-tab mt-40">
									<li className="active block-list">
										<div className="col-sm-5  col-sm-offset-1 text-center">
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Dereku Originaal</h2>
												<p>Sea-veisekotlett, mitmeviljakukkel seesamiseemnetega, punane grillkaste, Cheddar juust, sinep, marineeritud kurk, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price">6&euro;</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Lamba burger</h2>
												<p>Lambakotlet, mitmeviljakukkel seesamiseemnetega, punane grillkaste, Cheddar juust, sinep, marineeritud kurk, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price ">8&euro;</span>
												<span className="dots"></span>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Kana burger</h2>
												<p>Kanafilee, &nbsp; mitmeviljakukkel seesamiseemnetega, &nbsp; punane grillkaste, Cheddar juust, &nbsp; ananass, paprika, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price ">7&euro;</span>
												<span className="dots"></span>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Veise burger</h2>
												<p>100% veisekotlet, mitmeviljakukkel seesamiseemnetega, punane grillkaste, Cheddar juust, sinep, marineeritud kurk, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price ">7.50&euro;</span>
											</div>
										</div>
										<div className="col-sm-5 text-center ">
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Heavy Duty veise burger</h2>
												<p>100% veisekotlet, mitmeviljakukkel seesamiseemnetega, punane grillkaste, Cheddar juust, peekon, seened, sinep, marineeritud kurk, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price ">8&euro;</span>
												<span className="dots"></span>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Põdraliha burger</h2>
												<p>100% põdraliha kotlet, mitmeviljakukkel seesamiseemnetega, punane grillkaste, pepperoni, peekon, Cheddar juust, marineeritud kurk, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price ">10.50&euro;</span>
												<span className="dots"></span>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Veggie burger</h2>
												<p>Peedi-kikerherne kotlet, roheline mahe mitmeviljakukkel seesamiseemnetega, punane grillkaste, Cheddar juust, sinep, marineeritud kurk, punane sibul, tomat, salat-mix, valge kaste</p>
												<span className="block-price ">6&euro;</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Vegan burger</h2>
												<p>Maisi-kikerherne kotlet, roheline mahe mitmeviljakukkel seesamiseemnetega, Cheddar juust, mahe majonees, ketšup, sinep, tomat ja spinatilehed või salatimix</p>
												<span className="block-price ">7&euro;</span>
											</div>
										</div>
									</li>
									<li className=" block-list">
										<div className="col-sm-5  col-sm-offset-1 text-center">
											<div className="block-cat">
												<h2 className="mb-30">appetizers </h2>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Crabcakes </h2>
												<p>Served with Mustard and Tartar Sauce.</p>
												<span className="block-price">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Buffalo Wings </h2>
												<p>Fried Wings Covered in Hot Sauce and Served with Blue Cheese Dressing.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Quesadilla </h2>
												<p>Grilled Flour Tortilla Filled with Melted Cheese, Green Onions.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Lettuce Wraps </h2>
												<p>Create Your Own Thai Lettuce Rolls! Satay Chicken Strips, Carrots.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content mb-25">
												<h2 className="mb-5 ">Tex Mex Eggrolls </h2>
												<p>Spicy Chicken, Corn, Black Beans, Peppers, Onions and Melted.</p>
												<span className="block-price ">$14</span>
											</div>
											<div className="block-cat">
												<h2 className="mb-30">kids </h2>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Kids' Pasta </h2>
												<p>Served with Bowtie Pasta. Choose from Butter and Parmesan.</p>
												<span className="block-price">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Kids' Desserts </h2>
												<p>Choose from Kids' Scoop of Ice Cream, Kids' Mini Hot Fudge.</p>
												<span className="block-price ">$14</span>
											</div>
										</div>
										<div className="col-sm-5 text-center ">
											<div className="block-cat">
												<h2 className="mb-30">main  </h2>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Pizza and Salad </h2>
												<p>A Smaller Version of Our Pizzas with a Small Green Salad.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Lunch Pasta </h2>
												<p>Choose from Our Selection of Lunch Sized Pastas: Fettuccini Alfredo.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content mb-25">
												<h2 className="mb-5 ">Lunch Salmon  </h2>
												<p>Your Choice of: Herb Crusted Filet of Salmon, Miso Salmon.</p>
												<span className="block-price">$14</span>
											</div>
											<div className="block-cat">
												<h2 className="mb-30">pizza  </h2>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Cheese Pizza</h2>
												<p>Topped with Fresh Mozzarella, White Cheddar and Fontina Cheeses.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Pepperoni Pizza </h2>
												<p>Fresh Mozzarella and Fontina Cheeses and is Topped.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">B.B.Q. Chicken Pizza </h2>
												<p>Smoked Gouda, Red Onion and Cilantro.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Margherita Pizza  </h2>
												<p>Fresh Mozzarella, Basil and Tomato Sauce.</p>
												<span className="block-price">$14</span>
											</div>
										</div>
									</li>
									<li className=" block-list">
										<div className="col-sm-5  col-sm-offset-1 text-center">
											<div className="block-cat">
												<h2 className="mb-30">cheesecake </h2>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Original </h2>
												<p>Our Famous Creamy Cheesecake with a Graham Cracker Crust.</p>
												<span className="block-price">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Strawberry Cheesecake </h2>
												<p>The Original Topped with Glazed Fresh Strawberries.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Lemon Meringue Cheesecake </h2>
												<p>Lemon Cream Cheesecake Topped with Layers of Lemon Mousse.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Mango Key Lime Cheesecake </h2>
												<p>Topped with Mango Mousse on a Vanilla Coconut Macaroon Crust.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content pb-25  mb-25">
												<h2 className="mb-5 ">Tiramisu Cheesecake </h2>
												<p>Our Wonderful Cheesecake and Tiramisu Combined into one Dessert.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Low Carb Cheesecake </h2>
												<p>Smooth and Creamy with a walnut Crust Sweetened with Stevia.</p>
												<span className="block-price ">$14</span>
											</div>
										</div>
										<div className="col-sm-5 text-center ">
											<div className="block-cat">
												<h2 className="mb-30">ice cream  </h2>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Hot Fudge Sundae </h2>
												<p>Topped with Whipped Cream and Almonds.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Chocolate Brownie Sundae </h2>
												<p>Our own Fabulous Godiva Chocolate Brownie, Vanilla Ice Cream, Hot Fudge.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content mb-25">
												<h2 className="mb-5 ">Bowl of Ice Cream  </h2>
												<p>Two and a half scoops of your choice of Vanilla or Coffee Ice.</p>
												<span className="block-price">$14</span>
											</div>
											<div className="block-cat">
												<h2 className="mb-30">specialty</h2>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Carrot Cake </h2>
												<p>Deliciously Moist Layers of Carrot Cake and Our Famous Cream.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Black-Out Cake  </h2>
												<p>Our Deepest, Richest Chocolate Cake with Chocolate Chips.</p>
												<span className="block-price">$14</span>
											</div>
										</div>
									</li>
									<li className="block-list">
										<div className="col-sm-5  col-sm-offset-1 text-center">
											<div className="block-cat">
												<h2 className="mb-30">iced drinks </h2>
											</div>
											<div className="block-content pb-25 mb-25">
												<h2 className="mb-5 ">Strawberry Fruit Smoothie </h2>
												<p>Strawberries, Orange and Pineapple Juices, Coconut and Banana.</p>
												<span className="block-price">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Tropical Smoothie </h2>
												<p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Frozen Iced Mango </h2>
												<p>Mango, Tropical Juices and a Hint of Coconut Blended with Ice and.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Peach Smoothie </h2>
												<p>Crushed Peaches and Juice All Blended with Ice and Swirled with.</p>
												<span className="block-price ">$14</span>
											</div>
										</div>
										<div className="col-sm-5 text-center ">
											<div className="block-cat">
												<h2 className="mb-30">hot drinks  </h2>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Café Latte </h2>
												<p>Double Espresso, Extra Steamed Milk.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Café Mocha </h2>
												<p>Espresso, Chocolate, Steamed Milk, Whipped Cream.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content  pb-25 mb-25">
												<h2 className="mb-5 ">Hot Chocolate </h2>
												<p>A huge, steamy serving of real hot chocolate with whipped cream.</p>
												<span className="block-price ">$14</span>
												<span className="dots"></span>
											</div>
											<div className="block-content">
												<h2 className="mb-5 ">Double Espresso  </h2>
												<p>Enjoy a double shot of espresso.</p>
												<span className="block-price">$14</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</section>
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
					<section className="review pt-120 pb-120 overlay">
						<div className="background-img zoom" style={{background: 'url('+ require('../images/6.jpg') + ')'}} />
						<div className="container">
							<div className="row">
								<div className="col-sm-12 text-center front-p">
									<div className="review-slider flexslider">
										<ul className="slides">
											<li>
												<div className="block-review">
													<h2 className="white h2-s-1 mb-5">Chicago magazine</h2>
													<p>It’s an unlikely setting for an exquisite dining experience—served up by a couple straight out of a rom-com plot. </p>
													<ul className="block-star mt-10">
														<li className="icon-star" />
														<li className="icon-star" />
														<li className="icon-star" />
														<li className="icon-star" />
														<li className="icon-star-empty" />
													</ul>
												</div>
											</li>
											<li>
												<div className="block-review">
													<h2 className="white h2-s-1 mb-5">The telegraph</h2>
													<p>The food is plentiful and delicious, it is all part of the "old world" sort of dining experience. </p>
													<ul className="block-star mt-10">
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star-empty"></i></li>
														<li><i className="icon-star-empty"></i></li>
													</ul>
												</div>
											</li>
											<li>
												<div className="block-review">
													<h2 className="white h2-s-1 mb-5">Magazin restaurant</h2>
													<p>Huge portions, great food, fast service. This location obviously is always packed due to being in Times Sq. </p>
													<ul className="block-star mt-10">
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star"></i></li>
														<li><i className="icon-star-half"></i></li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
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
					<section id="gallery" className="gallery overlay">
						<h2 className="indent">Gallery</h2>
						<div className="review-slider flexslider">
							<ul className="slides">
								<li>
									<div className="background-img zoom" style={{background: 'url('+ require('../images/11.jpg') + ')'}} />
								</li>
								<li>
									<div className="background-img zoom" style={{background: 'url('+ require('../images/12.jpg') + ')'}} />
								</li>
								<li>
									<div className="background-img zoom" style={{background: 'url('+ require('../images/13.jpg') + ')'}} />
								</li>
							</ul>
						</div>
					</section>
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
				</div>
			</div>
		);
	}
}

export default App;