import React from 'react';
import gauche from '../../../assets/image/vector-left.svg';
import './sliders.scss';

const FlecheG = ({ onClick }) => (
	<div className="flecheG" onClick={onClick}>
		<img src={gauche} alt="Fleche Gauche" />
	</div>
);

export default FlecheG;