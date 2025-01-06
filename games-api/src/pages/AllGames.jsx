import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../composants/Card";

export const AllGames = () => {
  const [allGames, setAllGames] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const GetAllGamesApi = async () => {
    const dataStorage = localStorage.getItem("gamesData");

    if (dataStorage) {
      console.log("Données récupérées depuis le cache !");
      return JSON.parse(dataStorage);
    }

    try {
      const response = await axios.get("https://back-api-games.vercel.app/api/allgames");
      const data = response.data;
      localStorage.setItem("gamesData", JSON.stringify(data));
      console.log("Données récupérées depuis l'API !");
      return data;
    } catch (error) {
      console.log("Erreur lors de la recuperation de données", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllGamesApi();
      setAllGames(data);
    };

    fetchData();
  }, []);

  // Filtrer les jeux
  const filteredGames = allGames.filter((game) => {
    const search = game.title.toLowerCase().includes(filterValue.toLowerCase());
    const genre = selectedGenre === "" || game.genre.includes(selectedGenre);

    return search && genre;
  });

  const ButtonFiltre = (props) => {
    return (
      <button
        onClick={() => setSelectedGenre(props.name === 'All' ? '' : props.name )}
        className={`btn btn-primary btn-xs sm:btn-sm ${selectedGenre === props.name || (props.name === "All" && selectedGenre === "") ? "btn-accent" : ""}`}
      >
        {props.name}
      </button>
    );
  };

  return (
    <>
      <div className="filtre flex flex-wrap gap-5 px-5 pt-7 items-center justify-evenly">
        <ButtonFiltre name="Strategy" />
        <ButtonFiltre name="MMOARPG" />
        <ButtonFiltre name="Shooter" />
        <ButtonFiltre name="Sports" />
        <ButtonFiltre name="MMORPG" />

        <div className="search-bar flex justify-center py-5">
          <input
            type="text"
            placeholder="Rechercher un jeu..."
            className="input input-bordered w-80"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
        <ButtonFiltre name="All" />
      </div>

      <main className="container-cards flex flex-wrap justify-evenly items-center gap-5 w-full py-10">
        {filteredGames &&
          filteredGames.map((game, index) => (
            <div key={index}>
              <Card
                title={game.title}
                img={game.thumbnail}
                content={game.short_description}
                link={game.game_url}
                genre={game.genre}
              />
            </div>
          ))}
      </main>
    </>
  );
};
