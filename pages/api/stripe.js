const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.cartItems);
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_colection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1MJbdPF9guTtw2YG6wW81GU8' },
          { shipping_rate: 'shr_1MJbe2F9guTtw2YGSckbRovf' }
        ],
        line_items: req.body.cartItems((item) => {
          const img = item.image[0].asset._ref;
          const newImg = img
            .replace('image-', 'https://cdn.sanity.io/images/qn30822y/production/')
            .replace('-webp', '.webp');

          return {
            price_data: {
              currency: 'zl',
              product_data: {
                name: item.name,
                images: [newImg]
              },
              unit_amount: item.price * 100
            },
            adjustable_quantity: {
              enabled: true,
              minmum: 1
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}