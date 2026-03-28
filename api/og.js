module.exports = async (req, res) => {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0a0a0b"/>
        <stop offset="100%" style="stop-color:#1a1a2e"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#a29bfe"/>
        <stop offset="50%" style="stop-color:#00d2a0"/>
        <stop offset="100%" style="stop-color:#4fc3f7"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <text x="100" y="200" font-family="Arial,sans-serif" font-size="72" font-weight="900" fill="#e8e8ed">PromptVault</text>
    <text x="100" y="280" font-family="Arial,sans-serif" font-size="36" font-weight="500" fill="#8b8b96">Premium AI Prompt Packs &amp; Tools</text>
    <text x="100" y="380" font-family="Arial,sans-serif" font-size="28" fill="url(#accent)">500+ Prompts · ChatGPT · Claude · Midjourney</text>
    <text x="100" y="430" font-family="Arial,sans-serif" font-size="28" fill="url(#accent)">Automation Workflows · Developer Tools</text>
    <text x="100" y="530" font-family="Arial,sans-serif" font-size="22" fill="#6c5ce7">Pay with Card or Crypto · Instant Delivery</text>
    <rect x="820" y="140" width="280" height="280" rx="20" fill="#111113" stroke="#2a2a30" stroke-width="2"/>
    <text x="960" y="260" font-family="Arial,sans-serif" font-size="48" text-anchor="middle" fill="#e8e8ed">🚀</text>
    <text x="960" y="320" font-family="Arial,sans-serif" font-size="28" text-anchor="middle" fill="#a29bfe">1,500+</text>
    <text x="960" y="355" font-family="Arial,sans-serif" font-size="16" text-anchor="middle" fill="#8b8b96">Templates</text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  return res.status(200).send(svg);
};
