import React from 'react';
import relaxGirl from '../images/relaxGirl.png'

const NoTaskMain = () => {
	return (
		<main id="content">
			<img src={relaxGirl} alt="relaxGirl" className="relaxGirl-img"/>
			<p className="noTask-p">No tasks to do</p>
		</main>
	);
};

export default NoTaskMain;
