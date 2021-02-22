let main = () => {
  //Variables declaration

  const mejn = document.querySelector("main");
  const dataPack = {
    content: [
      {
        pyt: "Jakie są typy danych w języku Javascript?",
        typ: "list",
        odp: [
          "Proste:",
          "Boolean",
          "Number",
          "String",
          "null",
          "undefined",
          "Symbol",
          "Złozone:",
          "Obiekt: Obiekt, Funkcja, Array",
        ],
        pkt: 5,
      },
      {
        pyt: "Jakie są nowosci prowadzone w ES6",
        typ: "list",
        odp: ["jeden", ""],
        pkt: 5,
      },
      { pyt: "Co to sa Lintery?", odp: "jeden", pkt: "punkty" },
      {
        pyt: "Co oznacza, ze JS jest dynamicznie typowalny",
        odp: "jeden",
        pkt: "punkty",
      },
      { pyt: "HEAD1", odp: "Roznice miedzy var,const,let", pkt: "punkty" },
      { pyt: "HEAD1", odp: "Sposoby deklarowania funkcji", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
      { pyt: "HEAD1", odp: "jeden", pkt: "punkty" },
    ],
  };

  function createCards(dane) {
    dane.content.forEach((element) => {
      //elements creation

      const elem = document.createElement("section");
      const head = document.createElement("h3");
      const tresc = document.createElement("h4");

      //appending

      mejn.appendChild(elem);
      elem.appendChild(head);
      elem.appendChild(tresc);

      //Text Assignment

      head.innerText = element.pyt;

      if (element.typ === "list") {
        const unlist = document.createElement("ul");

        element.odp.forEach((el) => {
          let listItem = document.createElement("li");
          listItem.textContent = el;
          unlist.appendChild(listItem);
        });
        tresc.appendChild(unlist);
      } else {
        tresc.innerText = element.odp;
      }

      //class operations

      elem.classList.add("klocek");
      tresc.classList.add("hidden");

      elem.addEventListener("click", () => {
        console.log("mark");
        head.classList.toggle("hidden");
        tresc.classList.toggle("hidden");
      });
    });
  }

  createCards(dataPack);
  // nie wiadomo czemu sie tak robi ze nie dodaje eventu do karty
};

main();
