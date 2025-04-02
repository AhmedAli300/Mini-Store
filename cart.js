var addPrice = document.getElementById("addprice");

var addnames = document.getElementById("content");

var Product = 1 ;
function showItems(){
    var getPrice = localStorage.getItem("totalPrice");

    var getName = JSON.parse(localStorage.getItem("catshName")) ;
    
    getName.forEach(function  (getName){

        // addnames.innerHTML += "your product number " + ++Product + "<h1>" + getName + "</h1>"  ;  
        
        addnames.innerHTML += ` ${"<h3>" + "your Product " + Product++ +" is : " + getName + "</h3>" }  ` ;  
        
    })
    
    
    addPrice.innerHTML =  "<h2>" +"The Total Price is = " +  getPrice + " $" + "</h2>" ;
}

showItems();


 

function checkOut(){
    localStorage.clear();
}
