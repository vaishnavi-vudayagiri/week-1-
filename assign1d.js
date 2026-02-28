//Function that takes 3 numbers as arguments and gives the largest nfunc
function threenum(a,b,c){
    if(a>b&&a>c){
        return a
    }else if (b>a&&b>c){
        return b
    }else {
        return c
    }
}
console.log(threenum(18,15,2))