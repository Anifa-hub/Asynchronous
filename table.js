function table(){
    return new Promise((resolve,reject)=>{
        let messures=45
        if(messures>44){
            resolve('starting making table')
        }else{
            reject(`we can't make this table`)
        }
    })
}
function buying(){
    return new Promise((resolve,reject)=>{
        resolve('we done to buy materials')
    })
}
function collecting(){
    return new Promise((resolve,reject)=>{
        resolve('we done to make table')
    })
}
function final(){
    return new Promise((resolve,reject)=>{
        resolve('table is ready')
    })
}

table()
.then((message)=>{
    console.log(message)
    return buying(message)
})
.then((message)=>{
    console.log(message)
    return collecting(message)
})
.then((message)=>{
    console.log(message)
    return final(message)
})
.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})
