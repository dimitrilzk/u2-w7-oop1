function prendiDatiUtente() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let data = document.getElementById("data").value;
  let nuovoUtente = new Utente(nome, cognome, data);
  nuovoUtente.createDiv();
}

class Utente {
  constructor(nome, cognome, data) {
    this.nome = nome;
    this.cognome = cognome;
    this.anno = data;
  }
  createDiv = () => {
    let div = document.createElement("div");
    div.classList.add("utente");
    div.innerHTML = this.nome + this.cognome + this.anno;
    document.getElementById("container").appendChild(div);
  };
}
