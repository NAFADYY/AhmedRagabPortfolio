import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public/projects/placeholders');
const ogDir = path.resolve('public/og');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(ogDir, { recursive: true });

const items = [
  ['al-azhar-dashboard', 'Al-Azhar University Dashboard', '#6366F1', '#22D3EE', ['Admin Overview & RBAC', 'Multi-Module Workspace', 'Bilingual RTL / LTR Theme']],
  ['azhar-ranking', 'Azhar Ranking', '#22D3EE', '#6366F1', ['University Ranking Overview', 'Academic Metrics & Indicators']],
  ['quality-of-visions', 'Quality of Visions', '#818CF8', '#22D3EE', ['Programs & Courses Matrix', 'Accreditation & Self-Study Reports']],
  ['certiverify', 'CertiVerify', '#38BDF8', '#6366F1', ['Certificate Issuance & Analytics', 'Watermark & QR Verification']],
  ['paxi-dashboard', 'Paxi Dashboard', '#6366F1', '#22D3EE', ['Fleet & Operations Control', 'Management Tables & Controls']],
  ['paxigo-website', 'PaxiGo Website', '#22D3EE', '#6366F1', ['Mobility & Delivery Showcase', 'Services & Mobile App Conversion']],
  ['newulm-dashboard', 'Newulm Dashboard', '#6366F1', '#22D3EE', ['Healthcare Operations Panel', 'Dynamic Patient & Provider Data']],
  ['ulmconnect', 'UlmConnect', '#22D3EE', '#6366F1', ['Integrated Medical Services Hub', 'Providers & Patient Discovery']],
  ['ulm-care', 'Ulm Care', '#818CF8', '#22D3EE', ['Medical Services Directory', 'Appointment Booking Flow']],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let count = 0;
for (const [slug, title, c1, c2, slides] of items) {
  slides.forEach((label, idx) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800" width="1280" height="800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B0D12"/>
      <stop offset="100%" stop-color="#151924"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="18%" r="55%">
      <stop offset="0%" stop-color="${c1}" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="${c1}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F5F5F2" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1280" height="800" fill="url(#bg)"/>
  <rect width="1280" height="800" fill="url(#grid)"/>
  <rect width="1280" height="800" fill="url(#glow)"/>
  <rect x="72" y="64" width="1136" height="672" rx="22" fill="#11141C" stroke="#F5F5F2" stroke-opacity="0.12" stroke-width="1.5"/>
  <line x1="72" y1="116" x2="1208" y2="116" stroke="#F5F5F2" stroke-opacity="0.08"/>
  <circle cx="106" cy="90" r="6" fill="#F5F5F2" fill-opacity="0.22"/>
  <circle cx="126" cy="90" r="6" fill="#F5F5F2" fill-opacity="0.22"/>
  <circle cx="146" cy="90" r="6" fill="#F5F5F2" fill-opacity="0.22"/>
  <rect x="440" y="77" width="400" height="26" rx="13" fill="#181C26" stroke="#F5F5F2" stroke-opacity="0.08"/>
  <text x="640" y="94" fill="#9299A8" font-family="monospace" font-size="12" text-anchor="middle">${esc(slug)} · view 0${idx + 1}</text>
  <rect x="96" y="140" width="220" height="572" rx="14" fill="#151923" stroke="#F5F5F2" stroke-opacity="0.06"/>
  <rect x="118" y="168" width="110" height="14" rx="7" fill="${c1}" fill-opacity="0.85"/>
  <rect x="118" y="212" width="176" height="34" rx="9" fill="${c1}" fill-opacity="0.16" stroke="${c1}" stroke-opacity="0.4"/>
  <rect x="118" y="260" width="152" height="12" rx="6" fill="#F5F5F2" fill-opacity="0.12"/>
  <rect x="118" y="294" width="132" height="12" rx="6" fill="#F5F5F2" fill-opacity="0.1"/>
  <rect x="118" y="328" width="164" height="12" rx="6" fill="#F5F5F2" fill-opacity="0.1"/>
  <rect x="118" y="362" width="120" height="12" rx="6" fill="#F5F5F2" fill-opacity="0.08"/>
  <rect x="340" y="140" width="270" height="120" rx="14" fill="#151923" stroke="#F5F5F2" stroke-opacity="0.07"/>
  <rect x="630" y="140" width="270" height="120" rx="14" fill="#151923" stroke="#F5F5F2" stroke-opacity="0.07"/>
  <rect x="920" y="140" width="264" height="120" rx="14" fill="#151923" stroke="#F5F5F2" stroke-opacity="0.07"/>
  <rect x="364" y="168" width="80" height="10" rx="5" fill="#9299A8" fill-opacity="0.45"/>
  <rect x="364" y="194" width="130" height="24" rx="8" fill="${c1}" fill-opacity="0.7"/>
  <rect x="654" y="168" width="90" height="10" rx="5" fill="#9299A8" fill-opacity="0.45"/>
  <rect x="654" y="194" width="110" height="24" rx="8" fill="${c2}" fill-opacity="0.65"/>
  <rect x="944" y="168" width="74" height="10" rx="5" fill="#9299A8" fill-opacity="0.45"/>
  <rect x="944" y="194" width="140" height="24" rx="8" fill="#F5F5F2" fill-opacity="0.18"/>
  <rect x="340" y="284" width="844" height="428" rx="16" fill="#151923" stroke="#F5F5F2" stroke-opacity="0.09"/>
  <rect x="340" y="284" width="844" height="4" rx="2" fill="${c1}"/>
  <text x="762" y="452" fill="#F5F5F2" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="700" text-anchor="middle">${esc(title)}</text>
  <text x="762" y="496" fill="${c2}" font-family="monospace" font-size="18" text-anchor="middle">${esc(label)}</text>
  <rect x="522" y="534" width="480" height="36" rx="18" fill="#0B0D12" stroke="#F5F5F2" stroke-opacity="0.14"/>
  <text x="762" y="557" fill="#9299A8" font-family="monospace" font-size="12" text-anchor="middle">TEMPORARY PREVIEW · ADD SCREENSHOT TO public/projects/${esc(slug)}/</text>
</svg>`;
    fs.writeFileSync(path.join(outDir, `${slug}-${idx + 1}.svg`), svg);
    count++;
  });
}

// Generate custom 1200x630 Open Graph social preview image (JPEG for universal social crawler support)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B0D12"/>
      <stop offset="100%" stop-color="#141824"/>
    </linearGradient>
    <radialGradient id="g1" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6366F1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="20%" cy="90%" r="45%">
      <stop offset="0%" stop-color="#22D3EE" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#22D3EE" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5F5F2" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect x="48" y="48" width="1104" height="534" rx="28" fill="none" stroke="#F5F5F2" stroke-opacity="0.1" stroke-width="1.5"/>
  <!-- Monogram -->
  <rect x="92" y="96" width="64" height="64" rx="16" fill="#F5F5F2"/>
  <text x="124" y="138" fill="#0B0D12" font-family="system-ui, sans-serif" font-size="26" font-weight="800" text-anchor="middle">AR</text>
  <circle cx="144" cy="148" r="5" fill="#22D3EE"/>
  <text x="176" y="124" fill="#9299A8" font-family="monospace" font-size="16" letter-spacing="3">PORTFOLIO · CAIRO, EGYPT</text>
  <text x="176" y="150" fill="#F5F5F2" font-family="system-ui, sans-serif" font-size="20" font-weight="600">ahmed-ragab-portfolio.vercel.app</text>
  <!-- Headline -->
  <text x="92" y="295" fill="#F5F5F2" font-family="system-ui, sans-serif" font-size="76" font-weight="800">Ahmed Ragab</text>
  <text x="92" y="365" fill="#A5B4FC" font-family="system-ui, sans-serif" font-size="36" font-weight="600">Front-End Developer · React &amp; Dashboard Engineer</text>
  <text x="92" y="425" fill="#9299A8" font-family="system-ui, sans-serif" font-size="23">Building scalable web applications, enterprise dashboards, and</text>
  <text x="92" y="458" fill="#9299A8" font-family="system-ui, sans-serif" font-size="23">high-performance bilingual digital products.</text>
  <!-- Chips -->
  <rect x="92" y="500" width="126" height="38" rx="19" fill="#151924" stroke="#6366F1" stroke-opacity="0.5"/>
  <text x="155" y="524" fill="#F5F5F2" font-family="monospace" font-size="15" text-anchor="middle">React.js</text>
  <rect x="232" y="500" width="120" height="38" rx="19" fill="#151924" stroke="#22D3EE" stroke-opacity="0.5"/>
  <text x="292" y="524" fill="#F5F5F2" font-family="monospace" font-size="15" text-anchor="middle">Next.js</text>
  <rect x="366" y="500" width="166" height="38" rx="19" fill="#151924" stroke="#F5F5F2" stroke-opacity="0.2"/>
  <text x="449" y="524" fill="#F5F5F2" font-family="monospace" font-size="15" text-anchor="middle">Tailwind CSS</text>
  <rect x="546" y="500" width="142" height="38" rx="19" fill="#151924" stroke="#F5F5F2" stroke-opacity="0.2"/>
  <text x="617" y="524" fill="#F5F5F2" font-family="monospace" font-size="15" text-anchor="middle">Dashboards</text>
  <rect x="702" y="500" width="144" height="38" rx="19" fill="#151924" stroke="#F5F5F2" stroke-opacity="0.2"/>
  <text x="774" y="524" fill="#F5F5F2" font-family="monospace" font-size="15" text-anchor="middle">Deployment</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).jpeg({ quality: 92 }).toFile(path.join(ogDir, 'og-default.jpg'));
console.log(`Generated ${count} placeholder SVGs and public/og/og-default.jpg`);
