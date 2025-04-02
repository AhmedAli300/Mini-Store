// const cartCount = document.getElementById('cart-count');


// function updateCartCount(count) {
//   cartCount.textContent = count;
// }

//////////////////////////////////////// add to cart function

var allProduct = document.querySelectorAll(".card-body a");

var content = document.querySelector("#content");

var addPrice = document.querySelector("#addprice");

var btn = document.querySelector("#showPrice");

var nameOfProduct =  document.querySelectorAll(".card-title")

var totalPrice = 0 ;

var span1 = document.getElementById("cart-count");

var count = 0;

var images = document.querySelectorAll(".card img");

var catshName =[];



allProduct.forEach(function (item) {
    
    item.onclick = function (){
      
      span1.innerHTML = ++count ;
      totalPrice += parseInt(item.getAttribute("price"));
      // content.innerHTML += item.getAttribute("name") + "//" + " ";

      // addPrice.innerHTML =  "Tha Total Price is = " + totalPrice ;

      catshName.push(item.getAttribute("name" )) ;

      localStorage.setItem("totalPrice" , totalPrice) ;

      localStorage.setItem("catshName" , JSON.stringify( catshName)) ; 
      
    }   
})


// ///////////////////////////






