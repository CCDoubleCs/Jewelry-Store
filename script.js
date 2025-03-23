document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Added to cart!");
    });
    const stripe = Stripe('your-publishable-key-here'); // Replace with your Stripe publishable key

document.getElementById("checkout-button").addEventListener("click", () => {
    fetch("/create-checkout-session", {
        method: "POST",
    })
    .then((response) => response.json())
    .then((sessionId) => {
        return stripe.redirectToCheckout({ sessionId: sessionId });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});
});