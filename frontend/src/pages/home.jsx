  import React from "react";
  import { useEffect } from "react";
  
  function Home() {
      useEffect(() => {
        document.title = "Accueil - Autocompetition";
}, []);

  return (
    <div>
      <h1>
        Bienvenue sur Autocompétition, votre plateforme de vente de véhicules de compétition automobile !
      </h1>
    </div>
    );}
    
export default Home;