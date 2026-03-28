const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PRICE_MAP = {
  'mega-prompt-pack': 'price_1TFzqaKEKY0N6PNdPa2zuu74',
  'ai-automation-toolkit': 'price_1TFzqaKEKY0N6PNd4B1fPDqk',
  'midjourney-master': 'price_1TFzqbKEKY0N6PNdoNiUYllL',
  'solopreneur-ai-stack': 'price_1TFzqcKEKY0N6PNdvL5no589',
  'developer-prompt-pack': 'price_1TFzqdKEKY0N6PNdusi8mDFs',
};

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { productId } = req.body;

    if (!productId || !PRICE_MAP[productId]) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: PRICE_MAP[productId], quantity: 1 }],
      success_url: `${req.headers.origin || 'https://promptvault.vercel.app'}?success=true&product=${productId}`,
      cancel_url: `${req.headers.origin || 'https://promptvault.vercel.app'}?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err.message);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
};
