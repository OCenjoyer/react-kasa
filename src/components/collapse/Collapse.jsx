import React, { useState, useRef, useEffect } from 'react';
import './Collapse.scss';
import Chevron from '../../assets/image/vectorBas.svg';

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState('0px');
  const refHeight = useRef();

  const toggleState = () => {
    setToggle(prevToggle => !prevToggle);
  };

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, [toggle]);

  return (
    <div className="collapse-about">
      <div className="collapseContainer">
        <div onClick={toggleState} className="collapse-about__visible">
          <h2>{props.aboutTitle}</h2>
          <img 
          src={Chevron} 
          alt="chevron down" 
          className={toggle ? 'rotated' : ''}
          />
        </div>
      </div>
      <div
        ref={refHeight}
        className={`collapse-about__toggle ${toggle ? 'animated' : ''}`}
        style={{ height: toggle ? heightEl : '0px' }}
      >
        <p aria-hidden={!toggle}>{props.aboutText}</p>
      </div>
    </div>
  );
}