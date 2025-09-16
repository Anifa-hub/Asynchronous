async function loadJock(){
    try{
        const chuck = await fetch('https://api.chucknorris.io/jokes/random',{
            headers:{
                'Content-type':'application/json'
            }
        })
        const data = await chuck.json()
        console.log(data)
        document.getElementById('jokeloading').innerHTML= data.value;
    }
    catch(error){
        console.log(error)
    }
}
document.getElementById('btn').addEventListener("click",loadJock)
 
