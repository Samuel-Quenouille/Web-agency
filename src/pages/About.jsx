import React from 'react';
import digital from "../assets/digital.png"

export default function About() {
    return (
        <main className="about-container">
            <div className="about-title">
                <h1>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h1>
                <p className="about-text">De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.</p>
                <p className="about-second-text">Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</p>
                <img src={digital} alt="projets digitaux" />
            </div>
        </main>
    )
}