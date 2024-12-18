import React from "react";
import "../proprio/Proprio.scss";

export default function Proprio({ ProprioName, ProprioPic, id }) {
	return (
		<aside className="Proprio-comp">
			<div className="Proprio-name">{ProprioName}</div>
			<div className="ProprioPicture">
				<img src={ProprioPic} alt={ProprioName} /> {/* Modification ici */}
			</div>
		</aside>
	);
}