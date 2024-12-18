import React from "react";
import star from "../../assets/image/star-rate.svg";
import './Notes.scss'

export default function Rate({ score }) {
    return (
        <div className="rate-comp">
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index}>
                    <img
                        className={score < index + 1 ? "star empty" : "star filled"}
                        src={star}
                        alt="rating star"
                    />
                </span>
            ))}
        </div>
    );
}