// app/page.tsx
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="mb-4 text-sm tracking-widest text-purple-300">🔮 MUTELU x TECH</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          มูให้เป็นระบบ<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            วิเคราะห์ดวง IP & Tech
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-purple-200">
          สำหรับคนทำงานสาย Tech ที่ไม่อยากให้ระบบพังเพราะดวง
          <br className="hidden md:block" />
          ตัวเลขไม่โกหก แค่รอคนตีความ
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#check-ip"
            className="rounded-2xl bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-500"
          >
            🔍 เช็ก IP มงคล
          </a>
          <a
            href="#api-key"
            className="rounded-2xl border border-purple-400/40 px-8 py-4 font-semibold text-purple-200 transition hover:bg-purple-900/40"
          >
            🔑 ดูดวง API Key (Pro)
          </a>
        </div>
      </section>

      {/* IP Fortune */}
      <section id="check-ip" className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-3xl bg-purple-950/60 p-10 shadow-xl shadow-black/40 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold">🔮 IP Address มงคล</h2>
          <p className="mt-3 text-purple-200">
            วิเคราะห์พลังงานของ IP จากศาสตร์ตัวเลข + Logic ทางเทคโนโลยี
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="เช่น 203.150.27.89"
              className="flex-1 rounded-xl bg-black/40 px-6 py-4 text-white placeholder-purple-400 outline-none ring-1 ring-purple-700 focus:ring-2"
            />
            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold shadow-lg transition hover:opacity-90">
              วิเคราะห์ดวง IP
            </button>
          </div>

          <p className="mt-4 text-sm text-purple-400">
            * ไม่มีการเก็บ IP หรือข้อมูลใด ๆ ใช้เพื่อการวิเคราะห์เชิงสัญลักษณ์เท่านั้น
          </p>
        </div>
      </section>

      {/* API Key Fortune */}
      <section id="api-key" className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-3xl border border-purple-800/50 bg-black/40 p-10">
          <h2 className="text-2xl md:text-3xl font-bold">🔑 ดูดวง API Key (Pro)</h2>
          <p className="mt-3 text-purple-200">
            วิเคราะห์ออร่าของ API Key จาก entropy และ pattern โดยไม่เก็บ key จริง
          </p>

          <ul className="mt-6 space-y-3 text-purple-300">
            <li>• ดวงรั่ว / ดวงโดน revoke</li>
            <li>• เหมาะกับ production หรือแค่ทดลอง</li>
            <li>• คำแนะนำวัน rotate key</li>
          </ul>

          <div className="mt-8">
            <button className="rounded-xl bg-purple-700/60 px-8 py-4 font-semibold text-purple-100 transition hover:bg-purple-700">
              เปิดใช้งาน Pro
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/50 px-6 py-10 text-center text-sm text-purple-400">
        <p>
          © {new Date().getFullYear()} Mutelu.dev — มูอย่างมีสติ ใช้เหตุผลก่อน deploy
        </p>
        <p className="mt-2">
          คำทำนายทั้งหมดเป็นการตีความเชิงสัญลักษณ์ ไม่ใช่คำแนะนำทางเทคนิค
        </p>
      </footer>
    </main>
  );
}
