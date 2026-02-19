  import React from "react";
  import { useEffect } from "react";

    function About() {
        useEffect(() => {
          document.title = "À propos - Autocompetition";
  }, []);
  
    return (
      <div>
        <h1>
          Vous êtes sur la page pour nous contacter !
        </h1>
      </div>
      );}
      
  export default About;