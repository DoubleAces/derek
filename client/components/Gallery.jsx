import React from 'react';

class Gallery extends React.Component {

	render() {
		return(
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
		);
	}

}

export default Gallery;
