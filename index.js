$(document).ready(function() {
  // Function to update subtotal and total
  function updateTotals() {
    var total = 0;
    $('.item').each(function() {
      var price = parseFloat($(this).find('.price').text());
      var quantity = parseInt($(this).find('.quantity').val());
      var subtotal = price * quantity;
      $(this).find('.subtotal').text(subtotal.toFixed(2));
      total += subtotal;
    });
    $('#total').text('Total: $' + total.toFixed(2));
  }

  // Initial update of totals
  updateTotals();

  // Event handler for deleting items
  $('.delete').click(function() {
    $(this).closest('.item').remove();
    updateTotals();
  });

  // Event handler for changing quantity
  $('.quantity').change(function() {
    updateTotals();
  });

  // Event handler for adding new item
  $('#add-item-button').click(function() {
    var itemName = $('#item-name').val();
    var itemPrice = parseFloat($('#item-price').val());
    var itemQuantity = parseInt($('#item-quantity').val());
    
    // Check if input values are valid
    if (!isNaN(itemPrice) && !isNaN(itemQuantity) && itemName.trim() !== '') {
      // Create HTML for new item
      var newItemHTML = '<div class="item">' +
                          '<span class="name">' + itemName + '</span>' +
                          '<input type="number" class="quantity" value="' + itemQuantity + '">' +
                          '<span class="price">' + itemPrice.toFixed(2) + '</span>' +
                          '<span class="subtotal">' + (itemPrice * itemQuantity).toFixed(2) + '</span>' +
                          '<button class="delete">Delete</button>' +
                        '</div>';
      
      // Append new item to cart
      $('#cart').append(newItemHTML);

      // Clear input fields
      $('#item-name').val('');
      $('#item-price').val('');
      $('#item-quantity').val('');

      // Update totals
      updateTotals();
    }
  });
});