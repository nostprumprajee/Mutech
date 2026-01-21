// ===============================
// FILE: app/ip/page.tsx (IP Fortune)
// ===============================
'use client';

import React, { useState } from 'react';

function analyzeIP(ip: string) {
const numbers = ip.split('.').map(n => parseInt(n, 10)).filter(n => !isNaN(n));
if (numbers.length !== 4) return null;

const sum = numbers.reduce((a, b) => a + b, 0);
const digitSum = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);

const score = Math.min(100, 40 + digitSum * 5);

return {
score,
work: digitSum >= 20 ? 'งานพุ่ง ระบบรับโหลดเก่ง' : 'งานเรื่อย ๆ ไม่หวือหวา',
money: digitSum % 2 === 0 ? 'เงินเข้าเป็นรอบ ๆ' : 'เงินมาไวไปไว',
stability: digitSum >= 15 ? 'เสถียร เหมาะกับ production' : 'เหมาะกับ dev / test',
advice: digitSum >= 15 ? 'IP นี้พลังนิ่ง ใช้งานยาวได้' : 'อย่า deploy วันศุกร์'
};
}

import Link from 'next/link';

export default function IPPage() {
const [ip, setIp] = useState('');
const [result, setResult] = useState<ReturnType<typeof analyzeIP> | null>(null);
const [error, setError] = useState<string | null>(null);

const onAnalyze = () => {
const res = analyzeIP(ip);
if (!res) {
setError('รูปแบบ IP ไม่ถูกต้อง');
setResult(null);
return;
}
setError(null);
setResult(res);
};

return (
<main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-24">
<div className="mx-auto max-w-3xl">
<Link href="/" className="mb-6 inline-block text-sm text-purple-400 hover:text-purple-300">← กลับหน้าเลือกศาสตร์</Link>
<h1 className="text-3xl font-bold">🔮 IP มงคล</h1>
<p className="mt-2 text-purple-300">ดูดวง IP ก่อนเอาขึ้น production</p>

<div className="mt-8 rounded-3xl bg-purple-950/60 p-8">
<div className="flex flex-col gap-4 sm:flex-row">
<input
value={ip}
onChange={e => setIp(e.target.value)}
placeholder="203.150.27.89"
className="flex-1 rounded-xl bg-black/40 px-6 py-4 text-white outline-none ring-1 ring-purple-700"
/>
<button
onClick={onAnalyze}
className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold"
>
วิเคราะห์ดวง
</button>
</div>
{error && <p className="mt-4 text-red-400">{error}</p>}
</div>

{result && (
<div className="mt-12 rounded-3xl border border-purple-800/50 bg-black/40 p-8">
<p className="text-purple-300">คะแนนพลังงานรวม</p>
<p className="mt-2 text-5xl font-bold text-purple-400">{result.score}</p>
<ul className="mt-6 space-y-2 text-purple-200">
<li>🛠 งาน: {result.work}</li>
<li>💰 เงิน: {result.money}</li>
<li>🧱 ความเสถียร: {result.stability}</li>
</ul>
<p className="mt-6 text-sm text-purple-400">คำแนะนำ: {result.advice}</p>
<div className="mt-8 text-center">
<button className="rounded-xl bg-purple-700 px-6 py-3 font-semibold">
เปิดดวงเต็ม (Pro)
</button>
</div>
</div>
)}
</div>
</main>
);
}