import React from 'react';
import gauche from '../../../assets/image/vector-left.svg';
import './sliders.scss'

const FlecheG = () => (
    <div className="flecheG">
        <img src={gauche} alt="Fleche Gauche" /> {/* après droite ici */}
    </div>
);

export default FlecheG;