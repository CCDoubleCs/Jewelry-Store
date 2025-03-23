const stripe = require("stripe")("sk_test_51R5uicIrVOkQIH7ZhlTPkC7dKUsXOAmdlEg0LaGjQ1F56386LCjc94W7Dpw7rnI5FUYhunywlvuyh6apY6QSVFA6001ni34Jzp"); // Replace with your Stripe secret key

exports.handler = async function(event, context) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "Jewelry Set",
                    },
                    unit_amount: 2000, // Price in cents (e.g., $20.00 = 2000 cents)
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `https://your-site.com/success`,
        cancel_url: `https://your-site.com/cancel`,
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ sessionId: session.id }),
    };
};