import React from "react";
import AboutBanner from "../../components/abt_banner/Abt_Banner";
import Collapse from "../../components/collapse/Collapse";
import deroulant from "../../logements/deroulant.json"; 

export default function About() {
	return (
		<div>
			<AboutBanner />
			{deroulant.map((rule, index) => (
				<Collapse key={index} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} />
			))}
		</div>
	);
}