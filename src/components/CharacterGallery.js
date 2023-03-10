import React from "react";
import peopleinfo from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {
  return (
    <div data-test="component-char-gallery">
      {peopleinfo.map((person) => (
        <Character {...person} key={person.id} />
      ))}
    </div>
  );
};

export default CharacterGallery;
