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

'use client';

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