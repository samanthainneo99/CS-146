var parent1 = document.createElement("div");
para = document.createElement("p");
para.innerText = "Your Total: "  +(localStorage.getItem('price'));
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
var price = 1.99;
var subtotal = 0;
var total = 0;

var e = document.getElementById("promo_code");
e.addEventListener('select', getpromoprice(e));

var strUser = e.options[e.selectedIndex].value;
var f = document.getElementById("promo_code").innerTexT;
var strUser = f.options[f.selectedIndex].text;

function getpromoprice(f){
  if (f.innerText === 'WELCOME'){
    price = 'newprice' - 'value';
    return price;
  }
  else if (f === '5off25dec18'){
    price = 'newprice' * 'value';
    return price;
  }
  else {
    return price;
  }
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
