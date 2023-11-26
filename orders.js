let orderSummary = [];

function placeOrder() {
    // For simplicity, let's assume the user orders everything on the menu
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('span:first-child').innerText;
        const itemPrice = item.querySelector('span:last-child').innerText;
        orderSummary.push(`${itemName}: ${itemPrice}`);
    });

    displayOrderSummary();
}

function displayOrderSummary() {
    const summaryText = document.getElementById('summary-text');
    summaryText.textContent = orderSummary.join('\n');
}