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

// import WelcomeToDerek from './WelcomeToDerek';
// import Reviews from './WelcomeToDerek';
// import Specials from './Specials';
// import ReservationForm from './ReservationForm';
// import Gallery from './Gallery';
import Contact from './Contact';

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
					{/*<ReserveBanner />*/}
					{/*<WelcomeToDerek />*/}
					{/*<Reviews />*/}
					{/*<Specials />*/}
					{/*<ReservationForm />*/}
					{/*<Gallery />*/}
					<Contact />
				</div>
			</div>
		);
	}
}

export default App;