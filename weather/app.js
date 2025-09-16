// 
const date = document.getElementById('date');
const city = document.getElementById('city');
const image = document.getElementById('image')
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const max = document.getElementById('max');
const min = document.getElementById('min');
const btn = document.getElementById('btn')

// how to get automaitc date info
const months = ['jan','feb','marc','apr','may','june','jul','aug','sep','oct','nov','dec']
let dateobj = new Date();
let month = months[dateobj.getUTCMonth()]
let day = dateobj.getUTCDate() 
let year = dateobj.getUTCFullYear()

date.innerHTML= `${month} ${day} ${year}`


const app = document.getElementById('app')

async function getweather (){


    
    try{
        const cityName = document.getElementById('searchinput').value;
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=154ce9c4290971119d1e19bac1a4e4ad&units=metric`,{
            headers:{
                accept:'appliction/json'
            }
        })
        const respo = await data.json()
        console.log(respo)
        city.innerHTML=`${respo.name}`
    
        description.innerHTML=`${respo.weather[0].main}`
        image.innerHTML= `<img src="http://openweathermap.org/img/wn/${respo.weather[0].icon}.png" />`
        temp.innerHTML= `<h2>${Math.round(respo.main.temp)} °C</h2>`
        max.innerHTML=`${respo.main.temp_max} °C`
        min.innerHTML=`${respo.main.temp_min} °C`
        
    }
    catch(error){
        console.log(error)
    }
}

// getweather()
btn.addEventListener('click',getweather)