var inputMoney = 0;

$(document).ready(function () {
    loadItems();    
    $('#addDollarButton').on('click', function () {
        inputMoney += 1;
        message("You added a Dollar");
        updateMoneyBox(inputMoney);
        $('#change').val("");
    });
    $('#addQuarterButton').on('click', function () {
        inputMoney += .25;
        message("You added a Quarter")
        updateMoneyBox(inputMoney);
        $('#change').val("");
    });
    $('#addDimeButton').on('click', function () {
        inputMoney += .10;
        message("You added a Dime");
        updateMoneyBox(inputMoney);
        $('#change').val("");
    });
    $('#addNickelButton').on('click', function () {
        inputMoney += .05;
        message("You added a Nickel")
        updateMoneyBox(inputMoney);
        $('#change').val("");
    });
    $('#makePurchaseBtn').click(function () {
        makePurchase();
    });
    $('#changeBtn').on('click', function () {
        returnChange();
    });
}) 

function loadItems() {
    var col1 = $('#firstColumn');
    var col2 = $('#secondColumn');
    var col3 = $('#thirdColumn');
    const formatToCurrency = amount => {
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      };
    $.ajax({
        type: 'GET',
        url: 'http://tsg-vending.herokuapp.com/items',
        success: function(itemArray) {
            $.each(itemArray, function(index, item){
                var id = item.id;
                var name = item.name;
                var price = item.price;
                var quantity = item.quantity;
                var card = '<div style="height: 300px"><div class="card" style="text-align: center" onclick="chosenItem(' + id + ')">';  
                   
                    card += '<div class="card-body">';
                    card += '<div>' + id + '</div>'
                    card += '<div>' + name  +'</div>';    
                    card += '<div>'+ '$'+ formatToCurrency(price)+ '</div>';
                    card += 'Quantity Left: ' + quantity;
                    card += '</div>'
                    if(index % 3 == 0){
                    col1.append(card);
                }
                else if(index % 3 == 1){
                    col2.append(card);
                }
                else if(index % 3 == 2){
                    col3.append(card);
                }
            })
        },
        error: function() {
            $('#errorMessages')
                .append($('<li>')
                .attr({class: 'list-group-item list-group-item-danger'})
                .text('Error calling web service. Please try again later.'));
        }
    });
}
function chosenItem(id) {
    $('#item').val(id);
}

function makePurchase() {
        var amount = $('#moneyInput').val();
        var id = $('#item').val();
        $.ajax({
            type: 'POST',
            url: 'http://tsg-vending.herokuapp.com/money/' + amount + '/item/' + id,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            'dataType': 'json',
            success: function(data) {
                var quarters = data.quarters;
                var dimes = data.dimes;
                var nickels = data.nickels;
                var pennies = data.pennies;
                // You have to set up the messages to send the user here
                formatChange(quarters, dimes, nickels, pennies);
                $('#message').val('THANK YOU!!!');
                $('#moneyInput').val('0.00');
                $('#item').val('');
                // You have to make a method to clear the cards
                clearItems();
                loadItems();
            },
                error: function(xhr, status, error) {
                    $('#message').val(xhr.responseJSON.message);
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                    clearItems();
                    loadItems();
                  }
        });
}

function updateMoneyBox(money) {
    $('#moneyInput').empty();
    $('#moneyInput').val(money.toFixed(2));
}

function message(message) {
    $('#message').val(message);
}

function clearItems() {
    $('#firstColumn').empty();
    $('#secondColumn').empty();
    $('#thirdColumn').empty();

}

function formatChange(quarters, dimes, nickels, pennies){
    var changeMessage = "";

    if(quarters){
        changeMessage +=  quarters + " quarters."
    }
    if(dimes){
        changeMessage +=  dimes + " dimes."
    }
    if(nickels){
        changeMessage +=  nickels + " nickels."
    }
    if(pennies){
        changeMessage +=  pennies + " pennies."
    }
    $('#change').val(changeMessage);
    
    
    inputMoney = 0;
    }

    function returnChange(){
        
        let total = parseFloat($('#moneyInput').val()) * 100;
       
        var quarter = 0;
        var dime = 0;
        var nickel = 0;
        var penny = 0;

        if ((parseFloat(total) / 25) > 0){
            quarter = Math.floor(total/25);  
            total -= (parseFloat(quarter) * 25); 
        }
        if ((parseFloat(total) / 10) > 0) {
            dime = Math.floor(total / 10); 
            total = (parseFloat(dime) * 10);
        }
        if ((parseFloat(total) / 5) > 0) {
            nickel = Math.floor(total / 5);
            total -=  (parseFloat(nickel) * 5);
        }
            
        if ((parseFloat(total) / 1) > 0) {
            penny = Math.floor(total);   
            total -= parseFloat(penny); 
        }
       

        $('#moneyInput').val('0.00');
        formatChange(quarter, dime, nickel, penny);

       
    };




