import React from 'react';
import droite from '../../../assets/image/vector-right.svg';
import './sliders.scss'

const FlecheD = () => (
    <div className="flecheD">
        <img src={droite} alt="Fleche Droite" /> {/* après gauche ici */}
    </div>
);

export default FlecheD;