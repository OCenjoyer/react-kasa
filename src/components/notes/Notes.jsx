import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; 
import star from "../../assets/image/star-rate.svg";
import "./Notes.scss";
import jsonData from "../../logements/logements.json";

const getRatingById = (id) => {
    const accommodation = jsonData.find((item) => item.id === id);
    return accommodation ? accommodation.rating : null;
};

export default function Logement() {
    const { id } = useParams();
    const rating = getRatingById(id); 
    useEffect(() => {
        if (rating) {
            console.log(`Le rating pour l'ID "${id}" est : ${rating}`);
        } else {
            console.log(`ID "${id}" non trouvé.`);
        }
    }, [id, rating]);

    if (!rating) {
        return <p>ID non trouvé.</p>;
    }

    return (
        <div>
            <div className="rate-comp">
                {Array.from({ length: rating }, (_, index) => (
                    <span key={index}>
                        <img
                            className="star filled"
                            src={star}
                            alt="rating star"
                        />
                    </span>
                ))}
            </div>
        </div>
    );
}