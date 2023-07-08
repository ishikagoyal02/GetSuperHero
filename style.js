let change=document.getElementById('change')
let button=document.getElementById('button')
const token='3278688429036418'
 const baseURL=`https://superheroapi.com/api.php/${token}`

//const baseURL='https://superheroapi.com/api.php/3278688429036418'

const getSuperHero =(id)=>
  {
      fetch(`${baseURL}/${id}`)
          .then(response=>response.json())
          .then(json=> {
            
            console.log(json)
    change.innerHTML =`<img src="${json.image.url}" height=300 width=300/> <br>${json.name}`
     
  })
      }


const getNumber=()=>
  {
    return Math.floor(Math.random() *731)+1
  }
button.onclick=()=>{
  let hi = getNumber() //no between 1 to 731 (including these)
  getSuperHero(hi)
}


//FOR SEARCH 
  
const getStatsHTML=(character)=>
  {
    console.log(object.keys(character.powerstats))
  }

const getSuperHeroName =(name)=>
  {
   //console.log(inputDiv.value)
      fetch(`${baseURL}/search/${name}`)
          .then(response=>response.json())
          .then(json=> {
      if (json.results.length > 0) {
    const hero = json.results[0];
    console.log(hero);

        getStatsHTML(hero)
        change.innerHTML = `<br> 
    <h2>${hero.name}</h2>
    <br><img src="${hero.image.url}" height="300"       
        width="300"/>`;
  } else {
    console.log('No superhero data found.');
   }
     
  })

      }

let search=document.getElementById('search')
let inputDiv=document.getElementById('getinput')

search.onclick=()=>
  {
    let name=inputDiv.value
   //console.log(name.value)
    getSuperHeroName(name)
  }


// const intell=`${hero.powerstats.intelligence}`
    // const strength=`${hero.powerstats.strength}`
    // change.innerHTML = ` <br> 
    // <h2>${hero.name}</h2>
    // <br><img src="${hero.image.url}" height="300"       
    //     width="300"/> <br>INtelligence: ${intell}<br>Strength: ${strength}`;