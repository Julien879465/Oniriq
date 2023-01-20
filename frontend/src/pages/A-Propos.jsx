import React from "react";
import Slider from "../components/Slider";

function Apropos() {
  return (
    <div className="flex flex-col justify-center">
      <title className="flex justify-around items-end my-4 md:justify-evenly md:my-8">
        <h1 className="font-cinzel md:text-8xl text-4xl  text-white">Oniriq</h1>
        <h2 className="font-sans md:text-2xl text-xl text-white font-thin ">
          Ici, on vend du rêve
        </h2>
      </title>
      <Slider />
      <div className="font-sans text-white md:text-1xl text-l font-thin flex flex-col justify-end md:items-center">
        <p className="m-4">
          Parce qu’on ne rêve jamais assez, on vous emmène aux pays des rêves!
          Plongez dans une expérience immersive et maîtrisez vos rêves et
          cauchemars.
        </p>
        <h2 className="m-4 font-bold">Le saviez-vous ?</h2>
        <p className="m-4">
          Les rêves s’effacent rapidement. Seulement 5 minutes après le réveil,
          50% du souvenir d’un rêve serait perdu. Après 10 minutes, 90% du rêve
          aurait disparu. Oniriq est la solution!
        </p>
      </div>
    </div>
  );
}

export default Apropos;
