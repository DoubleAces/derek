import React from 'react';

class Reviews extends React.Component {

	render() {
		return(
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
		);
	}

}

export default Reviews;
