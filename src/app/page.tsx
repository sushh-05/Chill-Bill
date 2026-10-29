"use client";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  return <main className="min-h-screen px-5 py-6 sm:px-10">
    <nav className="mx-auto flex max-w-6xl items-center justify-between"><div className="text-xl font-black tracking-tight">goa<span className="text-[#f47a45]">fair</span></div><button className="rounded-full border border-[#173b32]/20 px-4 py-2 text-sm font-semibold">Add a price</button></nav>
    <section className="mx-auto grid max-w-6xl gap-12 pb-20 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <div><p className="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#f47a45]">The Goa price check</p><h1 className="max-w-xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-7xl">Know the fair price before you pay.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-[#173b32]/70">Ask in English, Hindi or Hinglish. Get a quick, local answer built from what travellers and locals actually paid.</p>
        <div className="mt-9 rounded-3xl bg-white p-3 shadow-xl shadow-[#173b32]/10"><div className="flex gap-3"><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Is ₹800 fair from Calangute to the airport?" className="min-w-0 flex-1 rounded-2xl bg-[#fff8eb] px-4 py-4 text-sm outline-none placeholder:text-[#173b32]/40" /><button className="rounded-2xl bg-[#f47a45] px-5 font-bold text-white">Check</button></div><p className="px-2 pt-3 text-xs text-[#173b32]/50">🎙️ Voice input is coming next · Try a taxi, auto or scooter price</p></div>
      </div>
      <div className="relative rounded-[2.5rem] bg-[#d8f3df] p-7 sm:p-10"><div className="absolute right-8 top-8 rounded-full bg-white px-4 py-2 text-xs font-bold">LIVE BETA</div><div className="flex min-h-[330px] flex-col justify-end"><div className="mb-8 text-8xl">🌴</div><p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#173b32]/50">Example verdict</p><h2 className="text-4xl font-black">₹800 is a little high</h2><p className="mt-3 text-[#173b32]/70">Typical airport taxi range: <strong>₹600–₹750</strong></p><button className="mt-6 w-fit rounded-full bg-[#173b32] px-5 py-3 text-sm font-bold text-white">Counter with ₹700</button></div></div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-4 border-t border-[#173b32]/10 py-10 text-sm sm:grid-cols-3"><div><div className="mb-2 text-2xl">🗣️</div><strong>Ask naturally</strong><p className="mt-1 text-[#173b32]/60">Voice or type in the language you use.</p></div><div><div className="mb-2 text-2xl">📍</div><strong>Local context</strong><p className="mt-1 text-[#173b32]/60">Routes, timing and season matter.</p></div><div><div className="mb-2 text-2xl">🤝</div><strong>Keep Goa fair</strong><p className="mt-1 text-[#173b32]/60">Share what you paid and help the next traveller.</p></div></section>
  </main>;
}
