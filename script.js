function raccogliInput(clickEvent) {
  console.log(clickEvent);
}

class Utente {
  constructor(nome, cognome, anno) {
    this.nome = nome;
    this.cognome = cognome;
    this.anno = anno;
  }
  createDiv = () => {
    let div = document.createElement("div");
    div.classList.add("utente");
    div.innerHTML = this.nome + this.cognome + this.cognome;
    return div;
  };
}
