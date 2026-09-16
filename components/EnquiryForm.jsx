'use client';

import { useState } from 'react';
import { waLink, site } from '@/lib/site';

const purposes = ['Buy', 'Sell', 'Rent', 'Invest'];
const kinds = ['Plot', 'Kothi / House', 'Flat', 'Shop / Commercial', 'Agricultural land'];

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    purpose: 'Buy',
    kind: 'Plot',
    area: '',
    budget: '',
    note: '',
  });
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function send() {
    if (!form.name.trim() || form.phone.trim().length < 10) {
      setError('Please add your name and a 10 digit mobile number, then WhatsApp will open.');
      return;
    }
    setError('');
    const msg = [
      `Hello ${site.owner},`,
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Looking to: ${form.purpose}`,
      `Property type: ${form.kind}`,
      form.area && `Area / colony: ${form.area}`,
      form.budget && `Budget: ${form.budget}`,
      form.note && `Note: ${form.note}`,
      '(sent via the Satyanarayan Property Dealer website)',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(waLink(msg), '_blank', 'noopener');
  }

  const field =
    'w-full border border-sand bg-white px-4 py-3 font-body text-[0.95rem] text-ink placeholder:text-clay/70 focus:border-gold focus:outline-none';
  const label = 'mb-1.5 block font-body text-[0.82rem] font-semibold text-inksoft';

  return (
    <div className="border border-sand bg-white p-6 sm:p-8">
      <h2 className="h3 text-ink">Send us your requirement</h2>
      <p className="mt-2 font-body text-[0.92rem] leading-relaxed text-clay">
        Fill this in and your details go straight to WhatsApp. Nothing needs to be typed
        twice.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Your name</label>
          <input id="name" className={field} value={form.name} onChange={set('name')} placeholder="Ramesh Kumar" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Mobile number</label>
          <input
            id="phone"
            className={field}
            value={form.phone}
            onChange={set('phone')}
            inputMode="tel"
            placeholder="98XXXXXXXX"
          />
        </div>
        <div>
          <label className={label} htmlFor="purpose">Looking to</label>
          <select id="purpose" className={field} value={form.purpose} onChange={set('purpose')}>
            {purposes.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="kind">Property type</label>
          <select id="kind" className={field} value={form.kind} onChange={set('kind')}>
            {kinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="area">Area / colony in Jind</label>
          <input id="area" className={field} value={form.area} onChange={set('area')} placeholder="Urban Estate" />
        </div>
        <div>
          <label className={label} htmlFor="budget">Budget</label>
          <input id="budget" className={field} value={form.budget} onChange={set('budget')} placeholder="₹40-50 lakh" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="note">Anything else</label>
          <textarea id="note" rows={3} className={field} value={form.note} onChange={set('note')} placeholder="Prefer a corner plot, and will need a loan" />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 border-l-2 border-gold bg-ivory px-4 py-3 font-body text-[0.9rem] text-inksoft">
          {error}
        </p>
      )}

      <button type="button" onClick={send} className="btn-gold mt-6 w-full py-4">
        Send on WhatsApp
      </button>
      <p className="mt-3 text-center font-body text-[0.8rem] text-clay">
        Or simply call {site.phone}
      </p>
    </div>
  );
}
