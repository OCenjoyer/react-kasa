import React, { useState } from 'react';
import FlecheG from '../../components/carousel/slider/flecheG'; 
import FlecheD from '../../components/carousel/slider/flecheD';
import './Carrousel.scss';

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (
				<>
					<FlecheG onClick={prevSlide} /> {/* Utilisez la bonne syntaxe JSX */}
					<FlecheD onClick={nextSlide} /> {/* Utilisez la bonne syntaxe JSX */}
				</>
			)}
			{length > 0 && (
				<>
					<img src={slides[current]} alt="appartement à louer" className="slideImage" />
					<span className="slide-number">{current + 1}/{length}</span>
				</>
			)}
		</section>
	);
}