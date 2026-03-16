fetch("data.json")
  .then(r => r.json())
  .then(json => {

    // injecter les données dans la variable attendue par le site
    window.DATA = json;

    if (typeof init === "function") {
      init();
    }

  })
  .catch(err => console.error("Erreur chargement JSON :", err));
