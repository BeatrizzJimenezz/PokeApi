
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  //const ramdom = getRandomInt(1, 152);
  //fetchData(ramdom);
  for (let index = 0; index < 151; index++) {
    fetchData(index)
  }
});

const fetchData = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();


    console.log(data);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      num: data.id,
      tipo: data.types
    };

    //pintarCard(pokemon);
    crearPokemons(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const crearPokemons = (pokemon) => {
    var cantidadTipos = pokemon.tipo.length;


    var colDiv = document.createElement("div");
    colDiv.classList.add("col");

    if (pokemon.tipo[0].type.name == "water") {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-primary");
    }
    else if (pokemon.tipo[0].type.name == "fire")
    {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-danger");
    }
    else if (pokemon.tipo[0].type.name == "bug" || pokemon.tipo[0].type.name == "grass")
    {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-success");
    }
    else if (pokemon.tipo[0].type.name == "electric")
    {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-warning");
    }
    else if (pokemon.tipo[0].type.name == "normal")
    {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-info");
    }
    else if (pokemon.tipo[0].type.name == "normal")
    {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-light");
    }
    else
    {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "text-bg-secondary");
    }


    var cardHeaderDiv = document.createElement("div");
    cardHeaderDiv.classList.add("card-header");

    var cardHeaderSocialDiv = document.createElement("div");
    cardHeaderSocialDiv.classList.add("card-header-social");

    var cardTextP = document.createElement("p");
    cardTextP.classList.add("card-text");
    cardTextP.innerHTML = `<small class="text-body-secondary">#${pokemon.num}</small>`;


    cardHeaderSocialDiv.appendChild(cardTextP);
    cardHeaderDiv.appendChild(cardHeaderSocialDiv);

    var rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "g-0");

    var colMd8Div = document.createElement("div");
    colMd8Div.classList.add("col-md-8");


    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    cardTitleH5 = document.createElement("h5");
    cardTitleH5.classList.add("card-title", "text-capitalize", "fs-4");
    cardTitleH5.textContent = pokemon.nombre;
    cardBodyDiv.appendChild(cardTitleH5);

    var badgeSpan1 = document.createElement("span");
    badgeSpan1.classList.add("badge", "text-bg-dark", "text-capitalize", "m-1");
    badgeSpan1.textContent = pokemon.tipo[0].type.name;

    if (cantidadTipos >= 2) {
        var badgeSpan2 = document.createElement("span");
        badgeSpan2.classList.add("badge", "text-bg-dark", "text-capitalize");
        badgeSpan2.textContent = pokemon.tipo[1].type.name;
        cardBodyDiv.appendChild(badgeSpan2);
    }


    cardBodyDiv.appendChild(badgeSpan1);
    colMd8Div.appendChild(cardBodyDiv);

    var colMd4Div = document.createElement("div");
    colMd4Div.classList.add("col-md-4");

    var imgElement = document.createElement("img");
    imgElement.src = pokemon.imgJuego;
    imgElement.alt = "...";
    imgElement.classList.add("card-body-img", "img-fluid", "rounded-start");
    colMd4Div.appendChild(imgElement);


    rowDiv.appendChild(colMd8Div);
    rowDiv.appendChild(colMd4Div); 
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(rowDiv);
    colDiv.appendChild(cardDiv);

    var contenedor = document.getElementById("prueba2");
    contenedor.appendChild(colDiv);


  }

  const pintarCard = (pokemon) => {
    const main = document.querySelector("main");
    const template = document.getElementById("prueba").content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    var cantidadTipos = pokemon.tipo.length;

    //clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg);
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego)
    clone.querySelector(".card-title").innerHTML = pokemon.nombre;
    clone.querySelectorAll(".card-header-social p small")[0].textContent = "#" + pokemon.num;
    clone.querySelectorAll(".badge")[0].textContent = pokemon.tipo[0].type.name;
    if (cantidadTipos >= 2) {
        clone.querySelectorAll(".badge")[1].textContent = pokemon.tipo[1].type.name;   
    }

  
    fragment.appendChild(clone);
    main.appendChild(fragment);
  };



