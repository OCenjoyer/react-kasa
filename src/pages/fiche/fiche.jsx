import React from 'react';
import { useParams } from "react-router-dom";
import Carrousel from '../../../src/components/carousel/Carrousel';
import Collapse from '../../components/collapse/Collapse'
import Proprio from "../../components/proprio/Proprio";
import Notes from "../../components/notes/Notes";
import Tag from "../../components/tag/Tag";
import infos from "../../logements/logements.json";


export default function Fiche() {
	const params = useParams();
	const pickedAppart = infos.find(({ id }) => id === params.id);
	const { pictures: slidePics, title, location, tags, description, equipments } = pickedAppart;

	const ImageData = [...slidePics];
	const equip = equipments.map((item, index) => (
		<li key={index} className="equipList">
			{item}
		</li>
	));

	return (
		<div className="fiche-container" key={params.id}>
			<Carrousel slides={slidePics} />
			<div className="title-tags-container">
				<div className="title-container">
					<h1>{title}</h1>
					<h3>{location}</h3>
				</div>
				<div className="tags-container">
					{tags.map(tag => (
						<Tag key={tag} tag={tag} />
					))}
				</div>
			</div>
			<div className="rate-host-container">
				<div className="host-container">
					<Proprio />
				</div>
				<div className="rate-container">
					<Notes />
				</div>
			</div>
			<div className="collapse-fiche-container">
				<Collapse aboutTitle="Description" aboutText={description} />
				<Collapse aboutTitle="Équipements" aboutText={equip} />
			</div>
		</div>
	);
}