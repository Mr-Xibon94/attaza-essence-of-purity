const price = 690;

const quantityInput = document.getElementById("quantity");
const areaSelect = document.getElementById("area");
const subtotalEl = document.getElementById("subtotal");
const deliveryEl = document.getElementById("delivery");
const totalEl = document.getElementById("total");

function calculateTotal() {
    let quantity = parseInt(quantityInput.value) || 1;
    let delivery = parseInt(areaSelect.value);

    let subtotal = quantity * price;
    let total = subtotal + delivery;

    subtotalEl.innerText = subtotal;
    deliveryEl.innerText = delivery;
    totalEl.innerText = total;
}

quantityInput.addEventListener("input", calculateTotal);
areaSelect.addEventListener("change", calculateTotal);

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let quantity = quantityInput.value;
    let areaText = areaSelect.options[areaSelect.selectedIndex].text;
    let address = document.getElementById("address").value;
    let subtotal = subtotalEl.innerText;
    let delivery = deliveryEl.innerText;
    let total = totalEl.innerText;

    let message =
        "🌿 Order from Attarza 🌿%0A%0A" +
        "Name: " + name + "%0A" +
        "Product: Attarza-Ramadan Combo%0A" +
        "Quantity: " + quantity + "%0A" +
        "Area: " + areaText + "%0A" +
        "Address: " + address + "%0A%0A" +
        "Subtotal: ৳" + subtotal + "%0A" +
        "Delivery: ৳" + delivery + "%0A" +
        "Total: ৳" + total + "%0A" +
        "Payment: Cash on Delivery";

    let phone = "8801978162949"; // Replace with your WhatsApp number

    window.open("https://wa.me/" + phone + "?text=" + message, "_blank");
});
