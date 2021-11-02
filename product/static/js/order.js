var shipping = '{{cart.shipping}}'
var total = '{{cart.get_cart_total}}'
if (shipping == 'False') {
    document.getElementById('shipping-info').innerHTML = ''
}

if (user != 'AnonymousUser') {
    document.getElementById('user-info').innerHTML = ''
}

if (shipping == 'False' && user != 'AnonymousUser') {
    document.getElementById('form-wrapper').classList.add('hidden')
    document.getElementById('payment-info').classList.remove("hidden")
}

var form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('form Submitted')
    document.getElementById('form-button').classList.add('hidden')
    document.getElementById('payment-info').classList.remove('hidden')
})
document.getElementById('make-payment').addEventListener('click', function(e) {
    submitFormData()
})

function submitFormData() {
    console.log('payment button click')
    var userFormData = {
        'name': null,
        'total': total,
    }
    var shippingInfo = {
        'address': null,
        'phone': null,
        'order_description': null,
    }
    if (shipping != 'False') {
        shippingInfo.address = form.address.value
        shippingInfo.phone = form.phone.value
        shippingInfo.order_description = form.order_description.value
    }
    if (user == 'AnonymousUser') {
        userFormData.name = form.name.value
    }
    var url = 'http://localhost:8000/process-order'
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({ 'form': userFormData, 'shipping': shippingInfo })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            alert('Transaction completed');
            window.location.href = "http://localhost:8000"
        })

}