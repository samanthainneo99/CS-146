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
console.log(document.getElementById("produce")[0].addEvenetListener("click",()=>create_page("produce")));
document.getElementById("bakery").addEvenetListener("click",()=>create_page("bakery"));
document.getElementById("meat").addEvenetListener("click",()=>create_page("meat"));
document.getElementById("beverages").addEvenetListener("click",()=>create_page("beverages"));
document.getElementById("dairy").addEvenetListener("click",()=>create_page("dairy"));
document.getElementById("frozen").addEvenetListener("click",()=>create_page("frozen"));
document.getElementById("care").addEvenetListener("click",()=>create_page("care"));
document.getElementById("pet").addEvenetListener("click",()=>create_page("pet"));


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
}function my_function_pears() {
  total += items["produce"]["pears"];
  console.log(total);
  append_item(items["produce"]["pears"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_banana() {
  total += items["produce"]["banana"];
  console.log(total);
  append_item(items["produce"]["banana"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_carrots() {
  total += items["produce"]["carrots"];
  console.log(total);
  append_item(items["produce"]["carrots"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_Vplatter() {
  total += items["produce"]["Vplatter"];
  console.log(total);
  append_item(items["produce"]["Vplatter"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_broccoli() {
  total += items["produce"]["broccoli"];
  console.log(total);
  append_item(items["produce"]["broccoli"]);
  document.getElementById("total").innerHTML = "$" + total;
}function my_function_Fplatter() {
  total += items["produce"]["Fplatter"];
  console.log(total);
  append_item(items["produce"]["Fplatter"]);
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
  page_dictionary = items[type_of_page];
  list_of_items = page_dictionary.keys();
  for(let i = 0; i < list_of_items.length; i++) {
    var parent = document.createElement("div");
    pic = document.createElement("img");
    pic.innerHTML = src="images/"+type_of_page+"/"+list_of_items[i]+".jpg";
    par =  document.createElement("p");
    par.innerText = list_of_items[i];

    // butn =  document.createElement("button");
    // butn.innerHTML = "Price";
    // for each page_dictionary[list_of_items[i]], create an item for your div, and insert
  }
}
