import React from 'react';

class PreLoader extends React.Component {
	
	render() {
		return(
			<div>
				<div className="loader" ref="loader">
					<div className="loader-inner" ref="loaderInner">
						<svg width="120" height="220" viewBox="0 0 100 100" className="loading-spinner" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<circle className="spinner" cx="50" cy="50" r="21" fill="#ffffff" strokeWidth="2"/>
						</svg>
					</div>
				</div>
			</div>
		);
	}
}

export default PreLoader;