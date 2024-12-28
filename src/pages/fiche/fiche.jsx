import React from 'react';
import { useParams } from "react-router-dom";
import Carrousel from '../../../src/components/carousel/Carrousel';
import Collapse from '../../components/collapse/Collapse';
import Proprio from "../../components/proprio/Proprio";
import Rate from "../../components/notes/Notes";
import Tag from "../../components/tag/Tag";
import infos from "../../logements/logements.json";
import './fiche.scss';
import '../../components/tag/Tag.scss';

export default function FicheLogement() {
    const params = useParams();
    const pickedAppart = infos.find(({ id }) => id === params.id);

    if (!pickedAppart) {
        return <div>Logement non trouvé</div>;
    }

    const slidePics = pickedAppart.pictures;
    const tags = pickedAppart.tags;
    const equipments = pickedAppart.equipments;
    const equip = equipments.map((item, index) => (
        <li key={index} className="equipList">
            {item}
        </li>
    ));

    const description = pickedAppart.description;
    const location = pickedAppart.location; 
    const ProprioName = pickedAppart.host.name;
    const ProprioPic = pickedAppart.host.picture;
    const rating = Number(pickedAppart.rating);

    return (
        <div key={params.id} className="fiche-container">
            <Carrousel slides={slidePics} />
            <section className="hostInfo-container">
                <div className="title-tags-container">
                    <div className="title-container redFont">
                        <h1>{pickedAppart.title}</h1>
                        <h3 className="location">{location}</h3>
                    </div>
                    <div className="tags-container">
                        {tags.map((tag) => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="rate-host-container">
                    <div className="host-container redFont">
                        <Proprio ProprioName={ProprioName} ProprioPic={ProprioPic} />
                    </div>
                    <div className="rate-container">
                        <Rate rating={rating} />
                    </div>
                </div>
            </section>
            <div className="collapse-fiche-container">
                <Collapse aboutTitle="Description" aboutText={description} />
                <Collapse aboutTitle="Équipements" aboutText={equip} />
            </div>
        </div>
    );
}

