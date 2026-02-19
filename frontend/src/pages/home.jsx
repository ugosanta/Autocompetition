  import React from "react";
  import { useEffect } from "react";
  
  function Home() {
      useEffect(() => {
        document.title = "Accueil - Autocompetition";
}, []);

  return (
<div class="mx-auto flex max-w-full items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-20 shrink-5" src="./src/assets/favicon.ico" alt="Insert Logo" />

  </div>
    );}
    
export default Home;