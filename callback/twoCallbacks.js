// Create a function that applies multiple transformations to a string using callbacks.
function case1(text){
    let result1 =text.charAt(0).toUpperCase()+ 
    text.slice(1).toLowerCase()
    console.log(result1)
}
// case1('anifa')
function case2(text){
    let result2 = text.split('')
    console.log(result2)
}
// case2('anifa')
function transformations(text,callback1,callback2){
    callback1(text)
    callback2(text)
}
transformations('anifa',case1,case2)