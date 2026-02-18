import React from "react";
import { useEffect } from "react";
import "./Profil.css";

function Profil() {
    useEffect(() => {
      document.title = "Profil - Autocompetition";
}, []);

  return (
    <div>
      <h1>
        Vous êtes sur la page de votre profil !
      </h1>
    </div>
    );}
    
export default Profil;