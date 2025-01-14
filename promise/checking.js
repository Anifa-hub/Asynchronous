// Create a function that receives a string and returns a Promise. The promise should resolve with the uppercase version of the string but reject if the string is null or undefined.
function checking (string){
    return new Promise((resolve,reject)=>{
        let result= string.toString()
        // console.log(typeof(result))
        if(result){
            resolve(result.toUpperCase())
        }else {
            reject(`this can't be done`)
        }
    })
}
checking('anifa')
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})