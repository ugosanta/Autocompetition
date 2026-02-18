  import { useEffect } from "react";
  
  function Home() {
      useEffect(() => {
        document.title = "Home - AutoCompetition";
}, []);

  return (
    <div>
      <h1>
        Bienvenue sur AutoCompetition, votre plateforme de vente de véhicules de compétition automobile en ligne !
      </h1>
    </div>
    );}
    
export default Home;