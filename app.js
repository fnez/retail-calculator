$(document).ready(function() { 

// step 1. Enter a number into input
  // When submit button is clicked
  // Add the final price into the body div
// step 2. Display an alert button 
  // if input value is NaN display alert
  // else continue with calculation
// step 3. Calculate price 
  // add 15% to the original number 
  // triples the original number 
  // then multiplies by 7.25% for tax 
// step 4. Add reset button 
  // when clicked, it clears the div 

// global variables
var price;
var wholeSalePrice;
var submitButton = $("#submit");
var resetButton = $("#reset");


// function when submit button is clicked
submitButton.click(function() {
    //adds input value to wholeSalePrice variable and appends to div 

    wholeSalePrice = parseFloat($("#price-holder").val());
    if ( isNaN(wholeSalePrice) ) {
        alert("Please enter a number");
    } 
    else {
        priceCalculate();
        $(".final-price-container").append("<div class='price'>" + price + "</div>");
        console.log("whole sale price is " + wholeSalePrice);
        console.log("final price is " + price);
        var totalPrice = 0;
        $('.final-price-container .price').each(function(){
            totalPrice += parseFloat($(this).text());
        });
        
        $('#total-price').html(totalPrice);
    };
});

//function for calculating the final price 
function priceCalculate() {
    // adds 15% to wholesale price. 
    price = wholeSalePrice + (wholeSalePrice * 0.15);
    // triples the new price.
    price = price * 3; 
    // multiply price by 7.25% to add tax.
    price = (price * 0.0725) + price;
    // set price to two decimal places.
    price = price.toFixed(2);
    return price;       
}; 

// function for reseting 
resetButton.click(function() {
    $(".final-price-container .price").remove();
    $('#total-price').html('');
  });
});