
//Function that takes an array as argument and return their sum
function arraysum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
   return sum
}
console.log(arraysum([23,4,5,67]))
