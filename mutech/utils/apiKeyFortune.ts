// =====================================
// utils/apiKeyFortune.ts
// วิเคราะห์ดวง API Key จาก UUID / hash
// =====================================

export type FortuneResult = {
    score: number;        // 0 - 100
    level: 'ดีมาก' | 'ดี' | 'กลาง' | 'ควรระวัง';
    traits: string[];
    advice: string;
  };
  
  // helper: count hex frequency
  function analyzeEntropy(hex: string) {
    const freq: Record<string, number> = {};
    for (const c of hex) freq[c] = (freq[c] || 0) + 1;
  
    const len = hex.length;
    let entropy = 0;
  
    for (const k in freq) {
      const p = freq[k] / len;
      entropy -= p * Math.log2(p);
    }
  
    return entropy; // ยิ่งสูงยิ่งกระจายดี
  }
  
  export function analyzeApiKeyFortune(hash: string): FortuneResult {
    // 1) entropy (สูง = เสถียร ปลอดภัย)
    const entropy = analyzeEntropy(hash);
  
    // normalize entropy (hex max ~4)
    const entropyScore = Math.min(40, Math.round((entropy / 4) * 40));
  
    // 2) pattern bonus (ไม่มี repeat ยาว ๆ)
    const hasLongRepeat = /(.)\1{4,}/.test(hash);
    const patternScore = hasLongRepeat ? 5 : 20;
  
    // 3) balance (ตัวเลข vs ตัวอักษร)
    const digits = (hash.match(/[0-9]/g) || []).length;
    const letters = (hash.match(/[a-f]/g) || []).length;
    const balanceScore = Math.abs(digits - letters) < hash.length * 0.1 ? 20 : 10;
  
    const score = Math.min(100, entropyScore + patternScore + balanceScore);
  
    let level: FortuneResult['level'] = 'กลาง';
    if (score >= 80) level = 'ดีมาก';
    else if (score >= 60) level = 'ดี';
    else if (score < 40) level = 'ควรระวัง';
  
    const traits: string[] = [];
    if (entropy > 3.5) traits.push('พลังสุ่มสูง ปลอดภัย');
    if (!hasLongRepeat) traits.push('ไม่มีแพทเทิร์นเสี่ยง');
    if (balanceScore === 20) traits.push('สมดุลตัวเลขและตัวอักษร');
  
    let advice = 'ใช้งานได้ปกติ';
    if (level === 'ดีมาก') advice = 'เหมาะกับ production และ workload หนัก';
    if (level === 'ควรระวัง') advice = 'ควร regenerate API Key เพื่อพลังที่ดีกว่า';
  
    return { score, level, traits, advice };
  }
  
  // =====================================
  // Example usage (client-side)
  // =====================================
  // import { analyzeApiKeyFortune } from '@/utils/apiKeyFortune'
  // const result = analyzeApiKeyFortune(apiKeyHash)
  