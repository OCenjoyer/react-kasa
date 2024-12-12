import React from 'react'
import logo from '../../assets/image/logo-footer.svg'
import './Footer.scss'

export default function Footer() {
  return (
		<footer className="container">
			<img src={logo} alt="logo de kasa" />
			<p className="container__text">© 2024 Kasa. All rights reserved</p>
		</footer>
	);
}