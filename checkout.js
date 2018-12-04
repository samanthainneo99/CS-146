<!DOCTYPE html>
<html>
<head>
  <title>Checkout</title>
  <script type="text/javascript" src="checkout.js"></script>
  <link rel="stylesheet" type="text/css" href="checkoutStyle.css" >
  <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
</head>
<body>
  <div>
    <nav id="nav1">
        <img src="images/ShopLeftLogo.png" id="logo"> </img>
        <a href="newHome.html" class="headlinks">Home</a>
        <a href="newShope.html" class="headlinks">Shop</a>
        <a href="shopCoupon.html" class="headlinks">Coupons</a>
        <a href="shopRecipe.html" class="headlinks">Recipes</a>
        <a href="shopAboutUs.html" class="headlinks">About Us</a>
        <a href="shopContactUs.html" class="headlinks">Contact Us</a>
        <a href="checkout.html" ><img src="images/cart.png" id="cart"> </img></a>
      </nav>
  <div class="row">
  <div class="col-75">
    <div class="container">
      <h1>Your Total:</h1>
      <button id="totalbutton">Click for your total </button>
      <p>Select a Promo Code: </p>
      <select id="promo_code">
        <option value="5"> WELCOME</option>
        <option value=".75"> 5off25dec18</option>
      </select>
      <form action="/action_page.php">
        <div class="row">
          <div class="col-50">
            <h3>Billing and Shipping Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com">
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <textarea type="textarea" id="adr" name="address" placeholder="1234 Main Street"></textarea>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York">

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NJF">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001">
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe">
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            <label for="expmonth">Experation Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September">

            <div class="row">
              <div class="col-50">
                <label for="expyear">Experation Year</label>
                <select>
                  <option value="2018"> 2018</option>
                <option value="2019"> 2019</option>
                <option value="2020"> 2020</option>
                <option value="2021"> 2021</option>
                <option value="2022"> 2022</option>
                <option value="2023"> 2023</option>
                <option value="2024"> 2024</option>
                <option value="2025"> 2025</option>
                <option value="2026"> 2026</option>
                <option value="2027"> 2027</option>
                <option value="2028"> 2028</option>

              </select>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="123">
              </div>
            </div>
          </div>
        </div>
      </form>
      <a href="./newShop.html"><button class="button1"> Pay Now </button></a>
    </div>
  </div>
</body>
</html>
