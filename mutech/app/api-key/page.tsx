'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { isPaid } from '@/utils/paid';
import { useEffect, useState } from 'react';
import { generateRawApiKey, hashApiKey } from '@/utils/apiKey';
import { saveApiKey, getApiKey } from '@/utils/apiKeyStorage';
import { analyzeApiKeyFortune } from '@/utils/apiKeyFortune';

type FortuneResult = {
  score: number;
  level: string;
  traits: string[];
  advice: string;
  label: 'Production-ready' | 'Unstable key';
};


export default function ApiKeyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paid = isPaid();
  const locked = searchParams.get('locked') === 'true';

  const [rawKey, setRawKey] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);
  const [fortune, setFortune] = useState<FortuneResult | null>(null);
  const [regenCount, setRegenCount] = useState(0);

  useEffect(() => {
    if (paid && getApiKey()) {
      setHasKey(true);
    }
  }, [paid]);

  const handleUnlock = () => {
    router.push('/payment/mock');
  };

  const handleGenerate = async () => {
    const key = generateRawApiKey();
    const hash = await hashApiKey(key);
  
    const fortuneResult = analyzeApiKeyFortune(hash);
    const label =
      fortuneResult.score >= 70
        ? 'Production-ready'
        : 'Unstable key';
  
    saveApiKey({
      hash,
      createdAt: new Date().toISOString(),
    });
  
    setRawKey(key);
    setHasKey(true);
    setFortune({
      ...fortuneResult,
      label,
    });
    setRegenCount(0);
  };
  

  const handleRegenerate = async () => {
    const key = generateRawApiKey();
    const hash = await hashApiKey(key);
  
    const fortuneResult = analyzeApiKeyFortune(hash);
    const label: FortuneResult['label'] =
      fortuneResult.score >= 70
        ? 'Production-ready'
        : 'Unstable key';
  
    saveApiKey({
      hash,
      createdAt: new Date().toISOString(),
    });
  
    setRawKey(key);
    setFortune({
      ...fortuneResult,
      label,
    });
    setRegenCount((c) => c + 1);
  };
  

  const canRegenerate =
    fortune?.label === 'Unstable key' &&
    (regenCount === 0 || paid);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-purple-400 hover:text-purple-300"
        >
          ← กลับหน้าเลือกศาสตร์
        </Link>

        <h1 className="text-3xl font-bold">🔑 ดูดวง API Key</h1>
        <p className="mt-2 text-purple-300">
          วิเคราะห์ออร่าของ API Key ด้วย entropy และ pattern
        </p>

        {!paid && (
          <div className="mt-6 rounded-xl border border-purple-700/50 bg-purple-950/40 p-4 text-sm text-purple-300">
            🔒 ฟีเจอร์นี้สำหรับผู้ใช้ Pro (ปลดล็อก 39 บาท)
          </div>
        )}

        <div className="mt-8 rounded-3xl border border-purple-800/50 bg-black/40 p-8">
          <p className="text-purple-200">
            ฟีเจอร์นี้ออกแบบมาสำหรับ dev ที่ใช้ API หนัก ๆ และอยากรู้ว่า
            <span className="font-semibold text-purple-300">
              {' '}คีย์ที่ใช้อยู่ พลังยังดีไหม
            </span>
          </p>

          <ul className="mt-6 space-y-3 text-purple-300">
            <li>• วิเคราะห์ความเสี่ยงโดน revoke</li>
            <li>• ดูดวง quota หมดไม่รู้ตัว</li>
            <li>• แนะนำวัน rotate key</li>
            <li>• เหมาะกับ production หรือแค่ test</li>
          </ul>

          {/* ===== Paid Section ===== */}
          {paid && (
            <div className="mt-8 rounded-xl bg-purple-950/60 p-6">
              <p className="text-sm text-purple-300">Your API Key</p>

              {rawKey ? (
                <div className="mt-3 rounded-lg bg-black/60 px-4 py-3 font-mono text-sm text-purple-200 break-all">
                  {rawKey}
                </div>
              ) : hasKey ? (
                <div className="mt-3 text-sm text-purple-400">
                  API Key ถูกสร้างแล้ว (แสดงได้ครั้งเดียว)
                </div>
              ) : (
                <div className="mt-3 text-sm text-purple-400">
                  ยังไม่มี API Key
                </div>
              )}

              {/* ===== Fortune Result ===== */}
              {fortune && (
  <div className="mt-4 space-y-2">
    <div className="flex items-center gap-3">
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          fortune.label === 'Production-ready'
            ? 'bg-green-600/20 text-green-400'
            : 'bg-red-600/20 text-red-400'
        }`}
      >
        {fortune.label}
      </span>
      <span className="text-xs text-purple-400">
        Fortune score: {fortune.score}/100
      </span>
    </div>

    <ul className="list-disc pl-5 text-xs text-purple-300">
      {fortune.traits.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>

    <p className="text-xs text-purple-400">
      🔮 {fortune.advice}
    </p>
  </div>
)}


              <div className="mt-5 flex gap-3 flex-wrap">
                {!hasKey && (
                  <button
                    onClick={handleGenerate}
                    className="rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold hover:opacity-90"
                  >
                    Generate API Key
                  </button>
                )}

                {canRegenerate && (
                  <button
                    onClick={handleRegenerate}
                    className="rounded-lg bg-yellow-600 px-5 py-2 text-sm font-semibold hover:opacity-90"
                  >
                    Regenerate API Key
                    {!paid && regenCount === 0 && (
                      <span className="ml-2 text-xs opacity-80">
                        (ฟรี 1 ครั้ง)
                      </span>
                    )}
                  </button>
                )}
              </div>

              {fortune?.label === 'Unstable key' && !canRegenerate && (
                <p className="mt-3 text-xs text-red-400">
                  คีย์นี้พลังไม่เสถียร ต้องเป็น Pro เพื่อ regenerate เพิ่ม
                </p>
              )}

              <p className="mt-3 text-xs text-purple-400">
                * ระบบเก็บเฉพาะ hash ของ API Key และแสดง key เต็มเพียงครั้งเดียว
              </p>
            </div>
          )}

          {/* ===== CTA ===== */}
          <div className="mt-10 text-center">
            {!paid ? (
              <>
                <button
                  onClick={handleUnlock}
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold hover:opacity-90"
                >
                  ปลดล็อกดูดวง API Key (39 บาท)
                </button>
                <p className="mt-3 text-xs text-purple-400">เฉพาะผู้ใช้ Pro</p>
              </>
            ) : (
              <div className="text-green-400 font-semibold">
                🟢 Pro User – พร้อมใช้งาน API
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
