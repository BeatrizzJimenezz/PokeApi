/* COLORES POR TIPOS */
const typeColor = {
    bug: "#7AC74C",
    dragon: "#6F35FC",
    electric: "#fed330",
    fairy: "#D685AD",
    fighting: "#30336b",
    fire: "#bb0009",
    flying: "#A98FF3",
    grass: "#348c31",
    ground: "#E2BF65",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#A33EA1",
    psychic: "#F95587",
    rock: "#705746",
    water: "#30a7d7",
    dark: "#2d3436",
  };
const card = document.getElementById("card");

/* Trayendo todo el conjunto de tipo agua */
const fetchTipoAgua = async () => {
  try 
  {
      //Se solicita todo el bloque tipo AGUA de la API
      const res = await fetch(`https://pokeapi.co/api/v2/type/11`);
      const data = await res.json();
      
      //Asignamos a una variable el listado objetos pokemon que tiene el grupo AGUA
      arrayPokemons = data.pokemon;
      console.log(data);
      
      //Recorremos el array
      arrayPokemons.forEach(function(pokemon) 
      {
          //Ahora, por cada url de los pokemon AGUA hacemos un fetch
          fetchPokemonsAgua(pokemon.pokemon.url)
      });
      
  } 
  catch (error) 
  {
    console.log(error);
  }};

fetchTipoAgua()

/* Trayendo a los pokemons*/
const fetchPokemonsAgua = async (url) => {
  try 
  {
      //Fetch por los 181 pokemons que contiene el array
      const res = await fetch(`${url}`);
      const data = await res.json();

      //Fetch para las species de los pokemon
      const res2 = await fetch(data.species.url);
      const data2 = await res2.json();

      const pokemon = {
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data}.png`,
          altura: data.height,
          peso: data.weight,
          habilidades: data.abilities,
          nombre: data.name,
          num: data.id,
          tipo: data.types,
          estadisticas: data.stats,
          descripcion: data2.genera,
          generacion: data2.generation.name,
          crecimiento: data2.growth_rate.name,
          movimientos: data.moves,
          imgOfficialArtWork: data.sprites.front_default,
          imgHome: data.sprites.other.home.front_default,
          imgDreamWorld: data.sprites.other.dream_world.front_default,
          imagen: data.sprites.versions['generation-v']['black-white'].animated.front_default,

        };
    
        if (document.body.classList.contains('water')) {
            if(pokemon.tipo.length == 1)
            {
                crearPokemons(pokemon);
            }
        }
        else if(document.body.classList.contains('psychic'))
        {
            if(pokemon.tipo[0].type.name == "psychic" || pokemon.tipo[1].type.name == "psychic")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('bug'))
        {
            if(pokemon.tipo[0].type.name == "bug" || pokemon.tipo[1].type.name == "bug")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('dark'))
        {
            if(pokemon.tipo[0].type.name == "dark" || pokemon.tipo[1].type.name == "dark")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('dragon'))
        {
            if(pokemon.tipo[0].type.name == "dragon" || pokemon.tipo[1].type.name == "dragon")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('electric'))
        {
            if(pokemon.tipo[0].type.name == "electric" || pokemon.tipo[1].type.name == "electric")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('fairy'))
        {
            if(pokemon.tipo[0].type.name == "fairy" || pokemon.tipo[1].type.name == "fairy")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('fighting'))
        {
            if(pokemon.tipo[0].type.name == "fighting" || pokemon.tipo[1].type.name == "fighting")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('fire'))
        {
            if(pokemon.tipo[0].type.name == "fire" || pokemon.tipo[1].type.name == "fire")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('flying'))
        {
            if(pokemon.tipo[0].type.name == "flying" || pokemon.tipo[1].type.name == "flying")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('grass'))
        {
            if(pokemon.tipo[0].type.name == "grass" || pokemon.tipo[1].type.name == "grass")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('ground'))
        {
            if(pokemon.tipo[0].type.name == "ground" || pokemon.tipo[1].type.name == "ground")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('ice'))
        {
            if(pokemon.tipo[0].type.name == "ice" || pokemon.tipo[1].type.name == "ice")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('normal'))
        {
            if(pokemon.tipo[0].type.name == "normal" || pokemon.tipo[1].type.name == "normal")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('poison'))
        {
            if(pokemon.tipo[0].type.name == "poison" || pokemon.tipo[1].type.name == "poison")
            {
                crearPokemons(pokemon)
            }
        }
        else if(document.body.classList.contains('rock'))
        {
            if(pokemon.tipo[0].type.name == "rock" || pokemon.tipo[1].type.name == "rock")
            {
                crearPokemons(pokemon)
            }
        }
        else
        {
            crearPokemons(pokemon)
        }
    

      document.getElementById(data.id).onclick = function() {
          AbrirModal(pokemon);
      };
           

      
  } 
  catch (error) 
  {
    console.log(error);
  }
};

const crearPokemons = (pokemon) => 
{
  //Ver si el pokemon es puro o no
  var cantidadTipos = pokemon.tipo.length;

  //Creamos los elemntos de la card
  var colDiv = document.createElement("div");
  colDiv.classList.add("col");

  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "text-bg-primary");
  cardDiv.setAttribute("data-toggle", "modal");
  cardDiv.setAttribute("data-target", "#staticBackdrop")
  cardDiv.setAttribute("id", `${pokemon.num}`);

  var cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.classList.add("card-header");

  var cardHeaderSocialDiv = document.createElement("div");
  cardHeaderSocialDiv.classList.add("card-header-social");

  var cardTextP = document.createElement("p");
  cardTextP.classList.add("card-text", "text-center");
  
  //Para mantener el ID siempre de 3 digitos minimo
  var cadea = new String(pokemon.num);
  numId = cadea.length;
  if (numId == 1) {
      var nuevoId = "00" + cadea;
  }
  else if (numId == 2) {
      var nuevoId = "0" + cadea;
  }
  else
  {
      var nuevoId = cadea;
  }
  cardTextP.innerHTML = `<small class="text-body-secondary" style=" font-size: 2rem; font-weight: 800; color: var(--clr-gray);">#${nuevoId}</small>`;

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

  //Si el pokemon no es puro, agrega otro badge para el otro tipo
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


  //Comprobar si la imagen es null
  if (pokemon.imgDreamWorld == null) {
      if(pokemon.imgHome == null)
      {
          var imagen = pokemon.imgOfficialArtWork
      }
      else
      {
          var imagen = pokemon.imgHome
      }
  }
  else
  {
      var imagen = pokemon.imgDreamWorld
  }

  var imgElement = document.createElement("img");
  imgElement.src = imagen;
  imgElement.alt = "...";
  imgElement.classList.add("card-body-img", "img-fluid", "rounded-start", "imagen-card");
  colMd4Div.appendChild(imgElement);


  rowDiv.appendChild(colMd8Div);
  rowDiv.appendChild(colMd4Div); 
  cardDiv.appendChild(cardHeaderDiv);
  cardDiv.appendChild(rowDiv);
  colDiv.appendChild(cardDiv);

  var contenedor = document.getElementById("prueba2");
  contenedor.appendChild(colDiv);


}

const AbrirModal = (pokemon) => 
{
  //Seleccionamos el body del elemento modal
  const modalBody = document.getElementById("myModals");
  const hab = document.getElementById("habilidad");

  //Funcion para actualizar el body del modal
  function updateModalContent(content) 
  {
      modalBody.innerHTML = content;
  }
  
  //Para dejar el ID siempre de 3 digitos
  var cadea = new String(pokemon.num);
  numId = cadea.length;
  if (numId == 1) {
      var nuevoId = "00" + cadea;
  }
  else if (numId == 2) {
      var nuevoId = "0" + cadea;
  }
  else
  {
      var nuevoId = cadea;
  }
  
  //Comprobar si la imagen es null
  if (pokemon.imgDreamWorld == null) {
      if(pokemon.imgHome == null)
      {
          var imagen = pokemon.imgOfficialArtWork
      }
      else
      {
          var imagen = pokemon.imgHome
      }
  }
  else
  {
      var imagen = pokemon.imgDreamWorld
  }


      //Ver si el pokemon es puro o no
      var cantidadTipos = pokemon.tipo.length;

      //Si el pokemon no es puro, agrega otro badge para el otro tipo
      if (cantidadTipos >= 2) {
          //Recorremos para saber cual es el otro color
          themeColor = typeColor[pokemon.tipo[1].type.name];
          typeColor1 = typeColor[pokemon.tipo[0].type.name];
          typeColor2 = typeColor[pokemon.tipo[1].type.name];
      }
      else{
          //Recorremos para saber cual es el otro color
          themeColor = typeColor[pokemon.tipo[0].type.name];
          typeColor1 = typeColor[pokemon.tipo[0].type.name];
      }
      console.log(themeColor)

      if (cantidadTipos >= 2) {
          spanTipo2 = `<span class="badge tipo rounded-pill text-capitalize" style="background-color:${typeColor2}"><p>${pokemon.tipo[1].type.name}</p></span>`
      }
      else
      {
          spanTipo2 = ''
      }


      ar = pokemon.habilidades
      var cadenaAbilities = []
      var ulAbilidades = ''
  
      ar.forEach(element => {
          cadenaAbilities.push(element.ability.name)
      });

      cadenaAbilities.forEach(element => {
          ulAbilidades = ulAbilidades + `<li>${element}</li>`
      });


      general = pokemon.descripcion
      general.forEach(element => {
          if(element.language.name == "en")
          {
              dato = element.genus
          }
      });

      moove = pokemon.movimientos
      var cadenaMoves = []
      var ulMoves = ''
  
      for (let index = 0; index <= 5; index++) {
          const element = moove[index];
          cadenaMoves.push(element.move.name)
      }

      cadenaMoves.forEach(element => {
          ulMoves = ulMoves + `<li>${element}</li>`
      });


     
  //Contenido de la card
  const newContent = `      
  <div class="modal-content">
      <div class="modal-body">
          <div id="card" class="position-relative" style="background: radial-gradient(circle at 50% 0%, ${themeColor} 38%, #ffffff 1%); ">
              <small class="pokemon-id-back position-absolute">#${nuevoId}</small>
              <div class="options">
              <p class="close" data-dismiss="modal"><i class="fas fa-arrow-left"></i></p>
              <p class="hp"><span class="fw-bold">HP</span> ${pokemon.estadisticas[0].base_stat}</p>
              </div>
              <img src=${imagen} />
              <h2 class="poke-name">${pokemon.nombre}</h2>
              <div id="types">
              
              </div>


              <!-- Aqui empieza la navegacion -->
              <div class="card-header tab-card-header">
              <ul class="nav nav-tabs card-header-tabs" id="bologna-list" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" href="#about" role="tab" aria-controls="about" aria-selected="true">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#stats" role="tab" aria-controls="stats" aria-selected="false">Stats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#moves" role="tab" aria-controls="moves" aria-selected="false">Moves</a>
              </li>
            </ul>
            </div>

              <!-- Aqui empieza el contenido de navegacion -->
              
              <div class="card-body">
               <div class="tab-content mt-3">

               <!-- PRIMERA PAGINA -->
                <div class="tab-pane fade show active p-4 pb-2 pt-1" id="about" role="tabpanel">
                <!-- Contenido de ABOUT -->
                <div class=" tipos text-center">
                      <span class="tipo badge rounded-pill text-capitalize" style="background-color:${typeColor1}"><p>${pokemon.tipo[0].type.name}</p></span>
                      ${spanTipo2}
                      </div>

                      <div class="stats">
                          <div >
                              <p>Height</p>
                              <h4>${pokemon.altura}dm (${(pokemon.altura*10).toFixed(1)}cm)</h4>
                          </div>
                          <div>
                              <p>Weight</p>
                              <h4>${pokemon.peso}hg (${(pokemon.peso*0.1).toFixed(1)}kg)</h4>
                          </div>
                      </div>

                      <div class="stats mt-2">
                          <div>
                              <p>Abilities</p>
                              <ul class="text-capitalize">
                                  ${ulAbilidades}
                              </ul>
                          </div>
                          <div >
                              <p>Species</p>
                              <h4>${dato}</h4>
                          </div>
                      </div>
                </div>


                 <!-- SEGUNDA PAGINA -->
                <div class="tab-pane fade p-2 pt-1" id="stats" role="tabpanel" aria-labelledby="stats-tab">  
                <!-- Contenido de STATS -->
                <div class="">
                      <div class="progress def">
                      <h6 class="progress-title pe-4 pt-1 text-uppercase">${pokemon.estadisticas[0].stat.name}</h6>
                          <div class="progress-bar def" style="width:${pokemon.estadisticas[0].base_stat}%;">
                              <div class="progress-value">${pokemon.estadisticas[0].base_stat}%</div>
                          </div>
                      </div>
      
                      <div class="progress at">
                          <h6 class="progress-title pe-4 pt-1 text-capitalize">${pokemon.estadisticas[1].stat.name}</h6>
                          <div class="progress-bar at" style="width:${pokemon.estadisticas[1].base_stat}%; ">
                              <div class="progress-value">${pokemon.estadisticas[1].base_stat}%</div>
                          </div>
                      </div>

                      <div class="progress def">
                          <h6 class="progress-title pe-4 pt-1 text-capitalize">${pokemon.estadisticas[2].stat.name}</h6>
                          <div class="progress-bar def" style="width:${pokemon.estadisticas[2].base_stat}%;">
                              <div class="progress-value">${pokemon.estadisticas[2].base_stat}%</div>
                          </div>
                      </div>

                      <div class="progress sp">
                          <h6 class="progress-title pe-4 pt-1">Sp. Atk</h6>
                          <div class="progress-bar sp" style="width:${pokemon.estadisticas[3].base_stat}%;">
                              <div class="progress-value">${pokemon.estadisticas[3].base_stat}%</div>
                          </div>
                      </div>

                      <div class="progress ex">
                          <h6 class="progress-title pe-4 pt-1">Sp. Def</h6>
                          <div class="progress-bar ex" style="width:${pokemon.estadisticas[4].base_stat}%;">
                              <div class="progress-value">${pokemon.estadisticas[4].base_stat}%</div>
                          </div>
                      </div>

                      <div class="progress at">
                          <h6 class="progress-title pe-4 pt-1 text-capitalize">${pokemon.estadisticas[5].stat.name}</h6>
                          <div class="progress-bar at" style="width:${pokemon.estadisticas[5].base_stat}%;">
                              <div class="progress-value">${pokemon.estadisticas[5].base_stat}%</div>
                          </div>
                      </div>
                  </div>

                </div>
                 
                <!-- TERCERA PAGINA -->
                <div class="tab-pane fade p-3" id="moves" role="tabpanel" aria-labelledby="moves-tab">
                <!-- Contenido de MOVES -->
                <div class=" tipos text-center">
                      <span class="tipo badge rounded-pill text-capitalize" style="background-color:${typeColor1}"><p>${pokemon.tipo[0].type.name}</p></span>
                      ${spanTipo2}
                      </div>


                      <div class="statss mt-2">
                          <div>
                              <p>Moves</p>
                              <ul class="text-capitalize">
                                  ${ulMoves}
                              </ul>
                          </div>
                          <div >
                              <p>Generation</p>
                              <h4 class="text-uppercase">${pokemon.generacion.slice(11)}</h4>
                              <p>Growth Rate</p>
                              <h4 class="text-capitalize">${pokemon.crecimiento}</h4>
                          </div>
                          
                      </div>
                      
                  </div>









                </div>
              </div>
              </div>



          </div>
      </div>
  </div>`;

  //Actualizar el contenido del modal
  updateModalContent(newContent);

  // Abrir Modal
  $('#myModal').modal('show');

  //Funcion para la navegacion
  $('#bologna-list a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
  })

}
