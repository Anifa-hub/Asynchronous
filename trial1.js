function nice(){
    return new Promise ((resolve,reject)=> {
        let year = 20
        if(year>18){
            resolve('yes you can enter')
        } else{
            reject('Not')
        }
    })
}
let consumer = nice()
consumer
.then((answer)=>{
    console.log (answer)
    
})
.catch((value)=>{
    console.log(value)
})