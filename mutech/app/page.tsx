// ===============================
// FILE: app/page.tsx  (Homepage / Menu)
// ===============================
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm tracking-widest text-purple-300">🔮 MUTELU x TECH</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          มูให้เป็นระบบ<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            สำหรับคนสาย Tech
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-purple-200">
          เลือกศาสตร์ที่อยากมู แล้วค่อยตัดสินใจก่อน deploy
        </p>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          <Link
            href="/ip"
            className="rounded-3xl border border-purple-700/40 bg-purple-950/60 p-8 text-left shadow-xl transition hover:scale-[1.02] hover:border-purple-500"
          >
            <h2 className="text-2xl font-bold">🔮 IP มงคล</h2>
            <p className="mt-3 text-purple-300">
              วิเคราะห์พลังงานของ IP ว่าเหมาะกับ production หรือไม่
            </p>
            <p className="mt-6 text-sm text-purple-400">→ เช็กดวง IP</p>
          </Link>

          <Link
            href="/api-key"
            className="rounded-3xl border border-purple-700/30 bg-black/40 p-8 text-left opacity-80 transition hover:opacity-100"
          >
            <h2 className="text-2xl font-bold">🔑 ดูดวง API Key</h2>
            <p className="mt-3 text-purple-300">
              วิเคราะห์ออร่าคีย์ จาก entropy และ pattern
            </p>
            <p className="mt-6 text-sm text-purple-400">→ เร็ว ๆ นี้ (Pro)</p>
          </Link>
        </div>

        <footer className="mt-16 text-center text-sm text-purple-400">
          มูอย่างมีสติ ใช้เหตุผลก่อน deploy
        </footer>
      </section>
    </main>
  );
}

