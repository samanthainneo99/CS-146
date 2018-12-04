var items = {
  "produce": {
    "grapes" : 2.99,
    "apple": 0.49,
    "potatoes": 3.99,
    "pears": 1.59,
    "banana": 2.99,
    "carrots":1.99,
    "Vplatter":10.99,
    "broccoli":1.99,
    "Fplatter":19.99
  },
  "bakery": {
    "donuts": 1.00,
    "muffin": .59,
    "wonderbread":1.99,
    "cookies":2.99,
    "englishmuffins":3.99,
    "tortillas":2.99,
    "ciabatta":1.99,
    "croissant":1.49,
    "chocolatecake":6.99
  },

  "beverages": {
    "applejuice": 2.49,
    "orangejuice": 2.99,
    "skimmilk":3.69,
    "lemonade":2.39,
    "almondmilk":3.99,
    "2milk":3.69,
    "sprite":1.89,
    "Coke":1.89,
    "water":4.99
  },
  "meatseafood": {
    "clam": 4.99,
    "lobster": 9.99,
    "salmon":7.99,
    "shrimp":12.99,
    "turkey": 6.99,
    "chicken":7.99,
    "steak":5.99,
    "ham":5.99,
    "veal":5.49
  },
  "Dairy": {
    "Dalmondmilk": 2.99,
    "organicwhole": 4.99,
    "mozzarella":3.99,
    "cheddar":2.99,
    "stringcheese":1.89,
    "plaingreek":0.99,
    "plainyogurt":2.89,
    "eggs":2.69,
    "strawberrygreek":0.99
  },
  "frozen": {
    "leancuisine": 3.45,
    "jimmydean": 8.42,
    "hotpockets":1.98,
    "peperonipizza":5.49,
    "mixedveggies":1.99,
    "vanilla":3.99,
    "pizzarolls":9.39,
    "almondbar":3.69,
    "popsicle":3.99
  },
  "personalcare": {
    "toothpaste": 5.00,
    "toothbrush": 10.00,
    "pommade":30.00,
    "hairdryer":100.00,
    "moisturizer":13.00,
    "shampoo":16.00,
    "perfume":35.00,
    "conditioner":35.00,
    "deodorant":17.99
  },
  "pets": {
    "hamsterwheel": 12.00,
    "brush": 19.99,
    "cattoy":24.99,
    "fishfood":7.99,
    "catfood":23.00,
    "dogfood":29.99,
    "dogtreats":17.99,
    "flea":39.99,
    "animalshampoo":29.00
  }
}
document.getElementById("produce").addEventListener("click",()=>create_page("produce"));
document.getElementById("bakery").addEventListener("click",()=>create_page("bakery"));
document.getElementById("meatseafood").addEventListener("click",()=>create_page("meatseafood"));
document.getElementById("beverages").addEventListener("click",()=>create_page("beverages"));
document.getElementById("Dairy").addEventListener("click",()=>create_page("Dairy"));
document.getElementById("frozen").addEventListener("click",()=>create_page("frozen"));
document.getElementById("personalcare").addEventListener("click",()=>create_page("personalcare"));
document.getElementById("pets").addEventListener("click",()=>create_page("pets"));


//produce
function my_function_grape() {
  total += items["produce"]["grapes"];
  console.log(total);
  append_item(items["produce"]["grapes"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_apple() {
  total += items["produce"]["apple"];
  console.log(total);
  append_item(items["produce"]["apple"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_potatoes() {
  total += items["produce"]["potatoes"];
  console.log(total);
  append_item(items["produce"]["potatoes"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_pears() {
  total += items["produce"]["pears"];
  console.log(total);
  append_item(items["produce"]["pears"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_banana() {
  total += items["produce"]["banana"];
  console.log(total);
  append_item(items["produce"]["banana"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_carrots() {
  total += items["produce"]["carrots"];
  console.log(total);
  append_item(items["produce"]["carrots"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_Vplatter() {
  total += items["produce"]["Vplatter"];
  console.log(total);
  append_item(items["produce"]["Vplatter"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_broccoli() {
  total += items["produce"]["broccoli"];
  console.log(total);
  append_item(items["produce"]["broccoli"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_Fplatter() {
  total += items["produce"]["Fplatter"];
  console.log(total);
  append_item(items["produce"]["Fplatter"]);
  document.getElementById("total").innerHTML = "$" + total;
}
//beverages
function my_function_applejuice() {
  total += items["beverages"]["applejuice"];
  console.log(total);
  append_item(items["beverages"]["applejuice"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_orangejuice() {
  total += items["beverages"]["orangejuice"];
  console.log(total);
  append_item(items["beverages"]["orangejuice"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_skimmilk() {
  total += items["beverages"]["skimmilk"];
  console.log(total);
  append_item(items["beverages"]["skimmilk"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_lemonade() {
  total += items["beverages"]["lemonade"];
  console.log(total);
  append_item(items["beverages"]["lemonade"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_almondmilk() {
  total += items["beverages"]["almondmilk"];
  console.log(total);
  append_item(items["beverages"]["almondmilk"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_2milk() {
  total += items["beverages"]["2milk"];
  console.log(total);
  append_item(items["beverages"]["2milk"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_sprite() {
  total += items["beverages"]["sprite"];
  console.log(total);
  append_item(items["beverages"]["sprite"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_Coke() {
  total += items["beverages"]["Coke"];
  console.log(total);
  append_item(items["beverages"]["Coke"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_water() {
  total += items["beverages"]["water"];
  console.log(total);
  append_item(items["beverages"]["water"]);
  document.getElementById("total").innerHTML = "$" + total;
}

//meat and seafood
function my_function_clam() {
  total += items["meatseafood"]["clam"];
  console.log(total);
  append_item(items["meatseafood"]["clam"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_lobster() {
  total += items["meatseafood"]["lobster"];
  console.log(total);
  append_item(items["meatseafood"]["lobster"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_salmon() {
  total += items["meatseafood"]["salmon"];
  console.log(total);
  append_item(items["meatseafood"]["salmon"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_shrimp() {
  total += items["meatseafood"]["shrimp"];
  console.log(total);
  append_item(items["meatseafood"]["shrimp"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_turkey() {
  total += items["meatseafood"]["turkey"];
  console.log(total);
  append_item(items["meatseafood"]["turkey"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_chicken() {
  total += items["meatseafood"]["chicken"];
  console.log(total);
  append_item(items["meatseafood"]["chicken"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_steak() {
  total += items["meatseafood"]["steak"];
  console.log(total);
  append_item(items["meatseafood"]["steak"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_ham() {
  total += items["meatseafood"]["ham"];
  console.log(total);
  append_item(items["meatseafood"]["ham"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_veal() {
  total += items["meatseafood"]["veal"];
  console.log(total);
  append_item(items["meatseafood"]["veal"]);
  document.getElementById("total").innerHTML = "$" + total;
}

//dairy
function my_function_almondmilk() {
  total += items["Dairy"]["Dalmondmilk"];
  console.log(total);
  append_item(items["Dairy"]["Dalmondmilk"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_organicwhole() {
  total += items["Dairy"]["organicwhole"];
  console.log(total);
  append_item(items["Dairy"]["organicwhole"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_mozzarella() {
  total += items["Dairy"]["mozzarella"];
  console.log(total);
  append_item(items["Dairy"]["mozzarella"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_cheddar() {
  total += items["Dairy"]["cheddar"];
  console.log(total);
  append_item(items["Dairy"]["cheddar"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_stringcheese() {
  total += items["Dairy"]["stringcheese"];
  console.log(total);
  append_item(items["Dairy"]["stringcheese"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_plaingreek() {
  total += items["Dairy"]["plaingreek"];
  console.log(total);
  append_item(items["Dairy"]["plaingreek"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_plainyogurt() {
  total += items["Dairy"]["plainyogurt"];
  console.log(total);
  append_item(items["Dairy"]["plainyogurt"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_eggs() {
  total += items["Dairy"]["eggs"];
  console.log(total);
  append_item(items["Dairy"]["eggs"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_strawberrygreek() {
  total += items["Dairy"]["strawberrygreek"];
  console.log(total);
  append_item(items["Dairy"]["strawberrygreek"]);
  document.getElementById("total").innerHTML = "$" + total;
}

//personal care
function my_function_toothpaste() {
  total += items["personalcare"]["toothpaste"];
  console.log(total);
  append_item(items["personalcare"]["toothpaste"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_toothbrush() {
  total += items["personalcare"]["toothbrush"];
  console.log(total);
  append_item(items["personalcare"]["toothbrush"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_pommade() {
  total += items["personalcare"]["pommade"];
  console.log(total);
  append_item(items["personalcare"]["pommade"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_hairdryer() {
  total += items["personalcare"]["hairdryer"];
  console.log(total);
  append_item(items["personalcare"]["hairdryer"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_moisturizer() {
  total += items["personalcare"]["moisturizer"];
  console.log(total);
  append_item(items["personalcare"]["moisturizer"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_shampoo() {
  total += items["personalcare"]["shampoo"];
  console.log(total);
  append_item(items["personalcare"]["shampoo"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_perfume() {
  total += items["personalcare"]["perfume"];
  console.log(total);
  append_item(items["personalcare"]["perfume"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_conditioner() {
  total += items["personalcare"]["conditioner"];
  console.log(total);
  append_item(items["personalcare"]["conditioner"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_deodorant() {
  total += items["personalcare"]["deodorant"];
  console.log(total);
  append_item(items["personalcare"]["deodorant"]);
  document.getElementById("total").innerHTML = "$" + total;
}

//pets
function my_function_hamsterwheel() {
  total += items["pets"]["hamsterwheel"];
  console.log(total);
  append_item(items["pets"]["hamsterwheel"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_brush() {
  total += items["pets"]["brush"];
  console.log(total);
  append_item(items["pets"]["brush"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_cattoy() {
  total += items["pets"]["cattoy"];
  console.log(total);
  append_item(items["pets"]["cattoy"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_fishfood() {
  total += items["pets"]["fishfood"];
  console.log(total);
  append_item(items["pets"]["fishfood"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_catfood() {
  total += items["pets"]["catfood"];
  console.log(total);
  append_item(items["pets"]["catfood"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_dogfood() {
  total += items["pets"]["dogfood"];
  console.log(total);
  append_item(items["pets"]["dogfood"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_dogtreats() {
  total += items["pets"]["dogtreats"];
  console.log(total);
  append_item(items["pets"]["dogtreats"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_flea() {
  total += items["pets"]["flea"];
  console.log(total);
  append_item(items["pets"]["flea"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_animalshampoo() {
  total += items["pets"]["animalshampoo"];
  console.log(total);
  append_item(items["pets"]["animalshampoo"]);
  document.getElementById("total").innerHTML = "$" + total;
}

function append_item(item_price) {
  item_list = document.getElementById("items");
  elem = document.createElement("p");
  elem.innerHTML = "$" + item_price;
  item_list.appendChild(elem);
}
function my_function_donuts() {
  total += items["bakery"]["donuts"];
  console.log(total);
  append_item(items["bakery"]["donuts"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_muffin() {
  total += items["bakery"]["muffin"];
  console.log(total);
  append_item(items["bakery"]["muffin"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_wonderbread() {
  total += items["bakery"]["wonderbread"];
  console.log(total);
  append_item(items["bakery"]["wonderbread"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_cookies() {
  total += items["bakery"]["cookies"];
  console.log(total);
  append_item(items["bakery"]["cookies"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_englishmuffins() {
  total += items["bakery"]["englishmuffins"];
  console.log(total);
  append_item(items["bakery"]["englishmuffins"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_tortillas() {
  total += items["bakery"]["tortillas"];
  console.log(total);
  append_item(items["bakery"]["tortillas"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_ciabatta() {
  total += items["bakery"]["ciabatta"];
  console.log(total);
  append_item(items["bakery"]["ciabatta"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_croissant() {
  total += items["bakery"]["croissant"];
  console.log(total);
  append_item(items["bakery"]["croissant"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_chocolatecake() {
  total += items["bakery"]["chocolatecake"];
  console.log(total);
  append_item(items["bakery"]["chocolatecake"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_leancuisine() {
  total += items["frozen"]["leancuisine"];
  console.log(total);
  append_item(items["frozen"]["leancuisine"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_jimmydean() {
  total += items["frozen"]["jimmydean"];
  console.log(total);
  append_item(items["frozen"]["jimmydean"]);
  document.getElementById("total").innerHTML = "$" + total;
}
function my_function_hotpockets() {
  total += items["frozen"]["hotpockets"];
  console.log(total);
  append_item(items["frozen"]["hotpockets"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_peperonipizza() {
  total += items["frozen"]["peperonipizza"];
  console.log(total);
  append_item(items["frozen"]["peperonipizza"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_mixedveggies() {
  total += items["frozen"]["mixedveggies"];
  console.log(total);
  append_item(items["frozen"]["mixedveggies"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_vanilla() {
  total += items["frozen"]["vanilla"];
  console.log(total);
  append_item(items["frozen"]["vanilla"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_pizzarolls() {
  total += items["frozen"]["pizzarolls"];
  console.log(total);
  append_item(items["frozen"]["pizzarolls"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_almondbar() {
  total += items["frozen"]["almondbar"];
  console.log(total);
  append_item(items["frozen"]["almondbar"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_popsicle() {
  total += items["frozen"]["popsicle"];
  console.log(total);
  append_item(items["frozen"]["popsicle"]);
  document.getElementById("total").innerHTML = "$" + total;
}

function append_item(item_price) {
  item_list = document.getElementById("items");
  elem = document.createElement("p");
  elem.innerHTML = "$" + item_price;
  item_list.appendChild(elem);
}

function clear_cart() {
  p1 = document.createElement("p");
  p1.innerHTML = "TOTAL:";
  p2 = document.getElementById("total");
  p2.innerHTML = "$0.00";
  item_list = document.getElementById("items");
  item_list.innerHTML = "";
  item_list.appendChild(p1);
  item_list.appendChild(p2);
  total = 0;
}

function create_page(type_of_page) {
  let itemlist = document.getElementById('itemlist')
  itemlist.innerHTML = "";
  console.log('attempting to create page...')
  page_dictionary = items[type_of_page];
  console.log('PD:', page_dictionary)
  list_of_items = Object.keys(page_dictionary);
  console.log('Item List:', list_of_items);
  for(let i = 0; i < list_of_items.length; i++) {
    var parent = document.createElement("div");
    pic = document.createElement("img");
    pic.src = "images/"+type_of_page+"/"+list_of_items[i]+".jpg";
    parent.appendChild(pic)
    par = document.createElement("p");
    par.innerText = list_of_items[i];
    parent.appendChild(par);
    btn = document.createElement("button");
    btn.innerHTML = page_dictionary[list_of_items[i]];
    btn.addEventListener('click', () => setPrice(parseFloat(localStorage.getItem('price')) + page_dictionary[list_of_items[i]]))
    parent.appendChild(btn);
    
    pic.className="picStyle";
    parent.id="divStyle";
    itemlist.appendChild(parent);

    itemlist.appendChild(parent);
  }
}

function setPrice(newPrice){
  localStorage.setItem('price', newPrice)
}

function getPrice() {
  return '$' + localStorage.getItem('price')
}
