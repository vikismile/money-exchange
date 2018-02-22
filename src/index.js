// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {}
    if (currency>10000){
        obj["error"]="You are rich, my friend! We don't have so much coins for exchange"
    }
    else{
    let h=Math.floor(currency/50)
    if(h>0){
    obj["H"]= h 
    }
    currency=currency%50
    let q=Math.floor(currency/25)
    if(q>0){
        obj["Q"]= q 
        }
    currency=currency%25
    let d=Math.floor(currency/10)
    if(d>0){
        obj["D"]= d 
        }
    currency=currency%10
    let n=Math.floor(currency/5)
    if(n>0){
        obj["N"]= n 
        }
    currency=currency%5
    let p=Math.floor(currency/1)
    if(p>0){
        obj["P"]= p 
        }
    }
    return obj
}
