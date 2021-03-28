card = '<div style="height: 300px"><div class="card" style="text-align: center" onclick="chosenItem(' + id + ')">';  
                   
card += '<div class="card-body">';
card += '<div>' + id + '</div>'
card += '<div>' + name  +'</div>';    
card += '<div>'+ '$'+ formatToCurrency(price)+ '</div>';
card += 'Quantity Left: ' + quantity;
card += '</div>' 
        </form>
      </div>
    );
}