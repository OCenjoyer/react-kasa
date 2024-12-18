import React from 'react';
import droite from '../../../assets/image/vector-right.svg';
import './sliders.scss';

const FlecheD = ({ onClick }) => (
	<div className="flecheD" onClick={onClick}>
		<img src={droite} alt="Fleche Droite" />
	</div>
);

export default FlecheD;