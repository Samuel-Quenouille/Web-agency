import React from 'react';
import {Link} from 'react-router-dom';
import studyData from '../data/data.json'

export default function Works() {
    return (
        <main className="works-container">
            <div className="works-title">
                <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
                <p className="works-text">Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
            </div>
            <div className="works-links-container">
                {studyData.map((data, index) => (
                    <div key={index}>
                        <h1>{data.title}</h1>
                        <Link to={`/works/${data.slug}`}>Lire l'étude</Link>
                    </div>
                ))}
            </div>
        </main>
    );
}