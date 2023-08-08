import React from 'react';
import coworking from "../assets/coworking.png"

export default function Home() {
    return (
        <main className="home-container">
            <div className="home-title">
                <h1>Confiez vos rêves à des experts du Web</h1>
                <p className="home-text">Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.</p>
                <p className="home-second-text">Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
                <img src={coworking} alt="experts du web" />
            </div>
        </main>
    )
}