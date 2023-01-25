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

class Pagina {
  constructor(items = [], pageSize = 3) {
    this.items = items;
    this.pageSize = pageSize;
  }

  renderizzaElementi(page, pageSize) {
    const ul = document.querySelector("ul");
    //pageSize = 3
    //pagina 1 0 -> 2 array.slice(0, 3)(pagina-1)*pageSize, pageSize
    //pagina 2 3 -> 5 array.slice(3, 6) (pagina-1)*pageSize, pageSize * pagina
    //pagina 3 6 -> 8 array.slice(6, 9 ) (pagina-1)*pageSize. pagesize *  pagina
    let start = (page - 1) * this.pageSize;
    let end = page * this.pageSize;

    // document.querySelector("p span").innerHTML = page;
    if (start >= this.items.length) {
      start = 0;
      end = this.pageSize;
      document.querySelector("p span").innerHTML = "1";
    }
    ul.innerHTML = "";
    for (const utente of this.items.slice(start, end)) {
      ul.innerHTML += `<li>${utente.nome}</li>`;
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
