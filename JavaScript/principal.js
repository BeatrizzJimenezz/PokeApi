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

          CrearBotones(pokemon)
  
        
    } 
    catch (error) 
    {
      console.log(error);
    }
  };
  
const CrearBotones = (pokemon) => 
{
  //Seleccionamos el body del elemento modal
  const BotonSection = document.getElementById("myBotones");

  //Funcion para actualizar el body del modal
  function updateBotonSectionContent(content) 
  {
      BotonSection.innerHTML = content;
  }
     
  //Contenido de la card
  const newContent = `
        <a href="../HTML/Pages/water.html" class="but btn" style="background-color: ${typeColor.water};"><h1>Pure Type</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/grass.html" class="but btn" style="background-color: ${typeColor.grass};"><h1>Water Grass</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/poison.html" class="but btn" style="background-color: ${typeColor.poison};"><h1>Water Poison</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/fighting.html" class="but btn" style="background-color: ${typeColor.fighting};"><h1>Water Fighting</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/flying.html" class="but btn" style="background-color: ${typeColor.flying};"><h1>Water Flying</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/bug.html" class="but btn" style="background-color: ${typeColor.bug};"><h1>Water Bug</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/dragon.html" class="but btn" style="background-color: ${typeColor.dragon};"><h1>Water Dragon</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/electric.html" class="but btn" style="background-color: ${typeColor.electric};"><h1>Water Electric</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/fairy.html" class="but btn" style="background-color: ${typeColor.fairy};"><h1>Water Fairy</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/fire.html" class="but btn" style="background-color: ${typeColor.fire};"><h1>Water Fire</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/ground.html" class="but btn" style="background-color: ${typeColor.ground};"><h1>Water Ground</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/ice.html" class="but btn" style="background-color: ${typeColor.ice};"><h1>Water Ice</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/normal.html" class="but btn" style="background-color: ${typeColor.normal};"><h1>Water Normal</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/dark.html" class="but btn" style="background-color: ${typeColor.dark};"><h1>Water Dark</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/rock.html" class="but btn" style="background-color: ${typeColor.rock};"><h1>Water Rock</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
        <a href="../HTML/Pages/psychic.html" class="but btn" style="background-color: ${typeColor.psychic};"><h1>Water Psychic</h1><img class="img-boton" src="https://pokemoncalc.web.app/en/assets/pokeball.svg"></a>
  `;

  //Actualizar el contenido del modal
  updateBotonSectionContent(newContent);


}







