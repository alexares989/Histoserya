fetch("data.json")
  .then(response => response.json())
  .then(json => {
    // injecte les données dans la variable globale
    window.DATA = json;

    // appelle init() si elle existe
    if (typeof init === "function") {
      init();
    }
  })
  .catch(err => console.error("Erreur chargement JSON :", err));
