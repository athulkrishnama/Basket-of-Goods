function addToCart(proId){
    $.ajax({
        url: '/add-to-cart/'+ proId,
        method:'get',
        success:(response)=>{
            if(response.status){
                let count = $('#cartCount').html()
                count = parseInt(count) + 1
                $('#cartCount').html(count)
            }
        }
    })
}
function changeQuantity(cartId, proId, count) {
    let quantity = parseInt(document.getElementById(proId).innerHTML)
    count = parseInt(count)
    $.ajax({
        url: '/change-product-quantity',
        data: {
            cart: cartId,
            product: proId,
            count: count,
            quantity: quantity
        },
        method: 'post',
        success: (response) => {
            if (response.removeProduct) {
                alert('Product Removed From Cart')
                location.reload()
            }
            else {
                document.getElementById(proId).innerHTML = quantity + count
            }
        }
    })
}

function deleteCartProduct(cartId, proId) {
    $.ajax({
        url: '/deleteCartProduct',
        data: {
            cart: cartId,
            product: proId
        },
        method: 'post',
        success: (response)=>{
            if (response.deleteProduct) {
                location.reload()
            }
        }
    })
}