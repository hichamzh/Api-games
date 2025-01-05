import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../composants/Card";

export const Giveaways = () => {
  const [giveaways, setGiveaways] = useState([]);

  const GetGiveaways = async () => {
    const dataStorage = localStorage.getItem("giveawaysData");

    if (dataStorage) {
      console.log("Données récupérées depuis le cache !");
      return JSON.parse(dataStorage);
    }

    try {
      const response = await axios.get("http://localhost:3000/giveaways");
      const data = response.data;

      localStorage.setItem("giveawaysData", JSON.stringify(data));
      console.log("Données récupérées depuis l'API !");
      return data;
    } catch (error) {
      console.log("Erreur lors de la recuperation de données", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetGiveaways();
      setGiveaways(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="container-cards flex flex-wrap justify-evenly items-center gap-5 w-full py-16">
        {giveaways &&
          giveaways.map((giveaway, index) => (
            <div key={index}>
              <Card
                title={giveaway.title}
                img={giveaway.thumbnail}
                content={giveaway.short_description}
                link={giveaway.giveaway_url}
                genre="Giveaways"
              />
            </div>
          ))}
      </main>
    </>
  );
};
