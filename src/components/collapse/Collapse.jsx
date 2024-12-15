import React from 'react';
import './Collapse.scss';
import Chevron from '../../assets/image/vectorBas.svg';

export default function Collapse() {
  return (
    <div className="collapse-about">
      <div className="accord-about__visible">
        <h2>okay</h2>
        <img src={Chevron} alt="chevron down" />
      </div>
    </div>
  );
}