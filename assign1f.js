//Employee object
function search(a,b){
    for(let i=0;i<a.length;i++){
        if(a[i] === b){
            return "found";
        }
    }
            return "not found";
        }
    console.log(search([10,20,30,40], 30));
