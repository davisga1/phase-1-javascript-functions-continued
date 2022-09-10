function saturdayFun(fun){
fun = typeof fun !== "undefined" ? fun : 'roller-skate'
 return `This Saturday, I want to ${fun}!`
  
}
function mondayWork(work){
    work = typeof work !== "undefined" ? work : 'go to the office'
    return `This Monday, I will ${work}.`
}
function wrapAdjective(y){
    y !== "undefined" ? y : '*'  
    function inner(u){
        u !== "undefined" ? u : 'special'
        return `You are ${y}${u}${y}!`
    }
    return inner
}