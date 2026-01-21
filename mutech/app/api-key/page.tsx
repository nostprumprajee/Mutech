// ===============================
// FILE: app/api-key/page.tsx (API Key Fortune - Stub)
// ===============================
'use client';

import Link from 'next/link';

export default function ApiKeyPage() {
return (
<main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black px-6 py-24 text-white">
<div className="mx-auto max-w-3xl">
<Link href="/" className="mb-6 inline-block text-sm text-purple-400 hover:text-purple-300">← กลับหน้าเลือกศาสตร์</Link>

<h1 className="text-3xl font-bold">🔑 ดูดวง API Key</h1>
<p className="mt-2 text-purple-300">
วิเคราะห์ออร่าของ API Key ด้วย entropy และ pattern
</p>

<div className="mt-8 rounded-3xl border border-purple-800/50 bg-black/40 p-8">
<p className="text-purple-200">
ฟีเจอร์นี้ออกแบบมาสำหรับ dev ที่ใช้ API หนัก ๆ และอยากรู้ว่า
<span className="font-semibold text-purple-300"> คีย์ที่ใช้อยู่ พลังยังดีไหม</span>
</p>

<ul className="mt-6 space-y-3 text-purple-300">
<li>• วิเคราะห์ความเสี่ยงโดน revoke</li>
<li>• ดูดวง quota หมดไม่รู้ตัว</li>
<li>• แนะนำวัน rotate key</li>
<li>• เหมาะกับ production หรือแค่ test</li>
</ul>

<div className="mt-8 rounded-xl bg-purple-950/60 p-6">
<p className="text-sm text-purple-300">ตัวอย่าง API Key</p>
<div className="mt-3 rounded-lg bg-black/50 px-4 py-3 font-mono text-sm text-purple-400">
sk-********************************
</div>
<p className="mt-3 text-xs text-purple-400">
* ระบบไม่เก็บ key จริง ทุกอย่างถูก hash ฝั่ง client
</p>
</div>

<div className="mt-10 text-center">
<button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold">
เปิดดวง API Key (Pro)
</button>
<p className="mt-3 text-xs text-purple-400">เฉพาะผู้ใช้ Pro</p>
</div>
</div>
</div>
</main>
);
}
