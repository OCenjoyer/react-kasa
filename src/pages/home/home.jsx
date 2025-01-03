import React from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import { Link } from "react-router-dom";
import data from "../../logements/logements.json";
import './home.scss';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="cards-container">
        {data.map(({ id, cover, title }) => (
          <Link className="link_card_logement" to={`/logement/${id}`} key={id}>
            <Card cover={cover} title={title} />
          </Link>
        ))}
      </div>
    </div>
  );
}