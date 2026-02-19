  import React from "react";
  import { useEffect } from "react";

    function About() {
        useEffect(() => {
          document.title = "À propos - Autocompetition";
  }, []);
  
  return (
<div class="mx-25 flex max-w-full items-center gap-x-4 bg-white p-4 shadow-lg outline outline-black/5 rounded-b-xl dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  
  <a href="/">
    <img class="size-20 shrink-5" src="./src/assets/favicon.ico" alt="Insert Logo" 
      
      />
    </a>
  </div>
    );}
      
  export default About;