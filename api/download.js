const fs = require('fs');
const path = require('path');

const VALID_PRODUCTS = [
  'mega-prompt-pack',
  'ai-automation-toolkit',
  'midjourney-master',
  'solopreneur-ai-stack',
  'developer-prompt-pack',
];

module.exports = async (req, res) => {
  const { product, token } = req.query;

  if (!product || !token || !VALID_PRODUCTS.includes(product)) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    // Verify the token is a valid paid session
    const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${token}`, {
      headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}` },
    });
    const session = await stripeRes.json();

    if (session.payment_status !== 'paid') {
      return res.status(403).json({ error: 'Payment not verified' });
    }

    // Serve the file
    const filePath = path.join(__dirname, '..', 'packs', `${product}.md`);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Product file not found. Contact promptvaultcrypto@gmail.com');
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename="${product}.md"`);
    return res.status(200).send(content);
  } catch (err) {
    console.error('Download error:', err);
    return res.status(500).json({ error: 'Download failed. Contact promptvaultcrypto@gmail.com' });
  }
};
