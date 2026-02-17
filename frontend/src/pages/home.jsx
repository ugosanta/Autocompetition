function Home() {
  return (
    <main>
      {/* Les balises de titre (h1 à h6) */}
      <h1 className="titre-principal">Bienvenue sur mon site</h1>
      
      {/* Les paragraphes */}
      <p className="description">
        Ceci est mon premier paragraphe de texte affiché sur ma page d'accueil.
      </p>

      {/* Les listes */}
      <ul>
        <li>Élément de liste 1</li>
        <li>Élément de liste 2</li>
      </ul>

      {/* Texte simple sans balise spécifique (possible mais moins recommandé) */}
      <span>Petit texte informatif.</span>
    </main>
  );
}

export default Home;