module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const PRICE_MAP = {
    'mega-prompt-pack': 'price_1TFzqaKEKY0N6PNdPa2zuu74',
    'ai-automation-toolkit': 'price_1TFzqaKEKY0N6PNd4B1fPDqk',
    'midjourney-master': 'price_1TFzqbKEKY0N6PNdoNiUYllL',
    'solopreneur-ai-stack': 'price_1TFzqcKEKY0N6PNdvL5no589',
    'developer-prompt-pack': 'price_1TFzqdKEKY0N6PNdusi8mDFs',
  };

  try {
    const { productId } = req.body;

    if (!productId || !PRICE_MAP[productId]) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }

    const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, '') || 'https://promptstore-tau.vercel.app';

    // Use fetch directly to Stripe API
    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('payment_method_types[0]', 'card');
    params.append('line_items[0][price]', PRICE_MAP[productId]);
    params.append('line_items[0][quantity]', '1');
    params.append('success_url', `${origin}/api/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append('cancel_url', `${origin}?canceled=true`);

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.url) {
      return res.status(200).json({ url: data.url });
    } else {
      console.error('Stripe error:', JSON.stringify(data));
      return res.status(500).json({ error: data.error?.message || 'Checkout failed' });
    }
  } catch (err) {
    console.error('Checkout error:', err.message);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
};
