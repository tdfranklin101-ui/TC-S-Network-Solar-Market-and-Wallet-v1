// app/page.tsx
import worldConfig from '@/world.config.json';

export default function Home() {
  const {
    commissionerName,
    currencyName,
    format,
    formatNote,
    distribution,
    conversion,
    pricing
  } = worldConfig as any;

  return (
    <main style={{ fontFamily: 'system-ui', padding: 24, lineHeight: 1.5 }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>World.org — Submission Preview</h1>
      <p style={{ color: '#555' }}>
        Minimal render guaranteed to compile for Vercel deploy.
      </p>

      <section style={{ marginTop: 24 }}>
        <h2>Commission</h2>
        <p><strong>Commissioner:</strong> {commissionerName}</p>
        <p><strong>Currency:</strong> {currencyName}</p>
        <p><strong>Format:</strong> {format} <em>({formatNote})</em></p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Distribution</h2>
        <p><strong>Rate:</strong> {distribution.perHumanPerDay} per human per day</p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Energy Standard</h2>
        <p>
          <strong>Conversion:</strong> S1.0000 = {conversion.S1_0000_to_kWh || conversion.S1.0000_to_kWh || 4913} kWh
        </p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Market Pricing Rule</h2>
        <p><strong>Basis:</strong> {pricing.basis}</p>
        <p><strong>Footprint:</strong> {pricing.footprintDefinition}</p>
        <p><strong>Determined by:</strong> {pricing.determinedBy}</p>
      </section>

      <section style={{ marginTop: 24 }}>
        <a href="/wallet" style={{ marginRight: 16 }}>Wallet</a>
        <a href="/market">Market</a>
      </section>
    </main>
  );
}
