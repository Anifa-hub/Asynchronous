function orderPizza(type,name){
    console.log(`Pizza with ${type} and name of ${name} is ready`)
}
function second(type,name,callback){
    callback(type,name)
}
second('strawberry','chicken',orderPizza)