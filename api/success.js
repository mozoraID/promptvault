module.exports = async (req, res) => {
  const sessionId = req.query.session_id;
  if (!sessionId) return res.status(400).send('Missing session_id');

  try {
    // Verify payment with Stripe
    const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}` },
    });
    const session = await stripeRes.json();

    if (session.payment_status !== 'paid') {
      return res.status(402).send('<h1>Payment not confirmed yet</h1><p>Please wait a moment and refresh.</p>');
    }

    // Map price to product
    const PRODUCT_MAP = {
      'price_1TFzqaKEKY0N6PNdPa2zuu74': { id: 'mega-prompt-pack', name: 'Mega Prompt Pack — 500+ Expert Prompts' },
      'price_1TFzqaKEKY0N6PNd4B1fPDqk': { id: 'ai-automation-toolkit', name: 'AI Automation Toolkit — 50 Workflows' },
      'price_1TFzqbKEKY0N6PNdoNiUYllL': { id: 'midjourney-master', name: 'Midjourney & Image AI Master Bundle' },
      'price_1TFzqcKEKY0N6PNdvL5no589': { id: 'solopreneur-ai-stack', name: 'Solopreneur AI Stack — Complete Business Kit' },
      'price_1TFzqdKEKY0N6PNdusi8mDFs': { id: 'developer-prompt-pack', name: 'Developer Prompt Pack — Code Like a 10x Engineer' },
    };

    // Get line items
    const itemsRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}/line_items`, {
      headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}` },
    });
    const items = await itemsRes.json();
    const priceId = items.data?.[0]?.price?.id;
    const product = PRODUCT_MAP[priceId] || { id: 'unknown', name: 'Your Purchase' };
    const email = session.customer_details?.email || 'your email';

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Download — PromptVault</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Inter',sans-serif; background:#0a0a0b; color:#e8e8ed; min-height:100vh; display:flex; align-items:center; justify-content:center; }
    .card { background:#111113; border:1px solid #2a2a30; border-radius:20px; padding:48px; max-width:560px; width:90%; text-align:center; }
    .icon { font-size:3.5rem; margin-bottom:16px; }
    h1 { font-size:1.8rem; font-weight:800; margin-bottom:8px; }
    .sub { color:#8b8b96; margin-bottom:32px; font-size:0.95rem; }
    .product-name { color:#a29bfe; font-weight:700; }
    .dl-btn { display:inline-flex; align-items:center; gap:8px; background:#6c5ce7; color:white; text-decoration:none; padding:14px 32px; border-radius:12px; font-size:1rem; font-weight:600; transition:all 0.2s; margin-bottom:16px; }
    .dl-btn:hover { background:#a29bfe; box-shadow:0 0 30px rgba(108,92,231,0.3); }
    .note { color:#8b8b96; font-size:0.8rem; margin-top:24px; padding-top:20px; border-top:1px solid #2a2a30; }
    .back { color:#6c5ce7; text-decoration:none; font-size:0.9rem; margin-top:16px; display:inline-block; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">🎉</div>
    <h1>Payment Successful!</h1>
    <p class="sub">Thank you! Your download is ready.</p>
    <p style="margin-bottom:24px;"><span class="product-name">${product.name}</span></p>
    <a href="/api/download?product=${product.id}&token=${sessionId}" class="dl-btn">📥 Download Now</a>
    <p class="note">A copy has also been sent to <strong>${email}</strong>.<br>If you need help, email us at promptvaultcrypto@gmail.com</p>
    <a href="/" class="back">← Back to Store</a>
  </div>
</body>
</html>`);
  } catch (err) {
    console.error('Success page error:', err);
    return res.status(500).send('<h1>Something went wrong</h1><p>Contact promptvaultcrypto@gmail.com with your order details.</p>');
  }
};
