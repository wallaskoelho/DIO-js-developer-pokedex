
 // função que chama api e cria o HTML do Pop-up

const urlDetails = async() =>{

  const url = window.location.href;

  const id = url.substring(url.lastIndexOf('&')+1);
  
    try{
      const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      const res = await url.json()
      
      document.getElementById("pop-content").innerHTML = `
      <div class="pop-content ${res.types[0].type.name}">
        <div>
          <img src="${res.sprites.other.dream_world.front_default}"
          alt="${res.name}">
        </div>
        <div class="details">
          <p>Name: ${res.name}</p>
          <p>Id: ${res.id} </p>
          <p>Type: ${res.types[0].type.name}</p>
          <p>Order: ${res.order} </p>
          <p>Base Experience: ${res.base_experience} </p>
          <p>Height: ${res.height}</p>
          <p>Weight: ${res.weight}</p>
        </div>
      </div>`

      

    }catch(error){
      console.log(error)
    }

    
}

// Função que escuta a url para adiconar classe que torna o Pop-up presente

function  checkUrlOpen() {

  const hashPart = window.location.hash;

    const urlParams = hashPart.replace(/^#/, '');

    if (urlParams.includes('open')) {
  
      const openDetatils = document.getElementById('popup')
      
      openDetatils.classList.toggle('open')

      urlDetails();


      ;
    }
  }
  
  
  
  checkUrlOpen();

  window.addEventListener('hashchange', checkUrlOpen);

  // Função para fecahr o Pop-up

const closed = document.getElementById('close-pop')

closed.addEventListener('click', () => {

    const openDetatils = document.getElementById('popup')
    
    openDetatils.classList.toggle('open')

    
})





