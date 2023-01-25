const utenti = [
  {
    nome: "giovanni",
    eta: "42",
  },
  {
    nome: "renatta",
    eta: "7",
  },
  {
    nome: "alfredo",
    eta: "84",
  },
  {
    nome: "alfonso",
    eta: "12",
  },
  {
    nome: "paolo",
    eta: "28",
  },
  {
    nome: "giuseppe",
    eta: "64",
  },
  {
    nome: "maria",
    eta: "35",
  },
  {
    nome: "sandra",
    eta: "99",
  },
  {
    nome: "benedetta",
    eta: "2",
  },
];
// faccio classe pagina con riferimenti items (array di persone) e pageSize (grandezza della pagina)
class Pagina {
  constructor(items = [], pageSize = 3) {
    this.items = items;
    this.pageSize = pageSize;
  }
  //imposto funzione
  renderizzaElementi(page, pageSize) {
    const ul = document.querySelector("ul"); //seleziono "padre" dove inserire tutto
    //pageSize = 3
    //pagina 1 0 -> 2 array.slice(0, 3)(pagina-1)*pageSize, pageSize
    //pagina 2 3 -> 5 array.slice(3, 6) (pagina-1)*pageSize, pageSize * pagina
    //pagina 3 6 -> 8 array.slice(6, 9 ) (pagina-1)*pageSize. pagesize *  pagina

    //logica ????????
    let start = (page - 1) * this.pageSize; //pagina 0
    let end = page * this.pageSize; //pagina 1, 2, 3 ecc ecc

    document.querySelector("p span").innerHTML = page; //seleziono "padre" numero pagina

    if (start >= this.items.length) {
      start = 0;
      end = this.pageSize;
      document.querySelector("p span").innerHTML = "1";
      //questo if serve per far si che se inseriamo un valore piu alto del dovuto torna in automatico a pagina 1
    }

    ul.innerHTML = ""; //reset della lista

    for (const utente of this.items.slice(start, end)) {
      ul.innerHTML += `<li>${utente.nome}</li>`; //figlio di ul che cambia a seconda dell'indice dell'array
    }
  }
}

window.onload = () => {
  const nuovaPagina = new Pagina(utenti);
  nuovaPagina.renderizzaElementi(1);
  document.querySelector("p input").onkeyup = (event) => {
    nuovaPagina.renderizzaElementi(event.target.value);
  };
};
