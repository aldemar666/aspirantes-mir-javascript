function sum(num){
    let cont=0;
    for (let i = 1; i <= num; i++) {
         cont=cont+i;
         console.log("i "+i)
         console.log("contador "+cont)
        
    }
    return cont;
    
}

console.log(sum(4));