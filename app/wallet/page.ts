// app/wallet/page.tsx
'use client';
import { useEffect, useState } from 'react';
import config from '@/world.config.json';

export default function WalletPage() {
  const daily = 1; // Placeholder; could come from server later
  const [balance, setBalance] = useState<number>(0);

  // Simulate daily accrual (client-only mock)
  useEffect(() => {
    const saved = Number(localStorage.getItem('solarBalance') || '0');
    setBalance(saved);
  }, []);

  const accrue = () => {
    const next = balance + daily;
    setBalance(next);
    localStorage.setItem('solarBalance', String(next));
  };

  const send = () => {
    if (balance <= 0) return;
    const next = balance - 1;
    setBalance(next);
    localStorage.setItem('solarBalance', String(next));
    alert('Sent 1 Solar');
  };

  const receive = () => {
    const next = balance + 1;
    setBalance(next);
    localStorage.setItem('solarBalance', String(next));
    alert('Received 1 Solar');
  };

  return (
    <main style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>Wallet — {config.currencyName}</h1>
      <p>Solar daily addition: {daily}</p>

      <div style={{ fontSize: 42, margin: '16px 0' }}>{balance} Solar</div>

      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={accrue}>Add Daily Grant</button>
        <button onClick={send}>Send Solar</button>
        <button onClick={receive}>Receive Solar</button>
      </div>
    </main>
  );
}
