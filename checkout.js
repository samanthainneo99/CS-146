var parent1 = document.createElement("div");
para = document.createElement("p");
para.innerText = "Your Total: "  +(localStorage.getItem('price'));
if ( localStorage.getItem('price') == NaN) {
  setPrice(0);
}
console.log(localStorage.getItem('price'));
para.addEventListener('click', () => setPrice(parseFloat(localStorage.getItem('price')) + page_dictionary[list_of_items[i]]));
console.log(para);

var try1 = document.createElement("p");
try1.innerText="TRY";
console.log(try1);
parent1.appendChild(para);


var newprice = getPrice();
var hello = document.createElement("p");
hello.innerHTML=newprice;
console.log(hello);



var tax = .07;
var shippping = 10.00;
var quantity = 0;
var price = localStorage.getItem('price'  );
var subtotal = 0;
var total = 0;
window.onload= () => {
  var e = document.getElementById("promo_code");
  console.log ( e );
  e.addEventListener('change', getpromoprice);

  var strUser = e.options[e.selectedIndex].value;
};

var f = document.getElementById("promo_code");
var strUser = f.options[f.selectedIndex].text;

function getpromoprice(f){
  console.log ( newprice );
  f = document.getElementById("promo_code").value;
  if (f.innerText === 'WELCOME'){
    price = newprice - f;
  }
  else if (f === '5off25dec18'){
    price = newprice * f;
  }
  console.log ( price );
  setPrice(price);
}
function set_tax_price(newPrice){
  return newPrice = (newPrice * tax) + (newPrice);
}

function setPrice(newPrice){
  localStorage.setItem('price', newPrice);
}

function getPrice() {
  return '$' + localStorage.getItem('price');
}

function displayTotal() {
  document.getElementById("mytotal").innerHTML = "" + getPrice();
}
