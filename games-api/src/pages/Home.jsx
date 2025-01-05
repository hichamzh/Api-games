import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen w-full">
        <div className="hero-content text-center">
          <div className="max-w-4xl px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              🎮 Explorez les Meilleurs Jeux Vidéo et Offres Exclusives ! 🎲
            </h1>
            <p className="py-6 text-lg sm:text-xl md:text-2xl">
              Une plateforme conçue pour vous offrir les dernières actualités,
              informations et opportunités autour des jeux vidéo, grâce à&nbsp;
              <Link
                to={"https://www.mmobomb.com/"}
                target="_blank"
                className="link link-secondary"
              >
                l'API MMOBomb.
              </Link>
            </p>
            <Link to={'/allgames'}>
              <button className="btn btn-primary py-2 px-6 text-lg sm:text-xl">
                Rechercher
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
