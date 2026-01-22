// =============================
// 2) /payment/mock page
// app/payment/mock/page.tsx
// =============================
"use client"

import { useRouter } from "next/navigation"
import { setPaid } from "@/utils/paid"

export default function MockPaymentPage() {
const router = useRouter()

const handleConfirm = () => {
setPaid(true)
router.push("/api-key")
}

return (
<div className="min-h-screen flex items-center justify-center bg-gray-50">
<div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
<h1 className="text-xl font-bold mb-2">💳 ชำระเงิน (Mock)</h1>
<p className="text-sm text-gray-600 mb-4">
การชำระเงินนี้เป็นเพียงการจำลอง ไม่มีการตัดเงินจริง
</p>

<div className="border rounded-lg p-4 mb-4">
<div className="flex justify-between text-sm">
<span>Unlock API Key</span>
<span className="font-semibold">39 บาท</span>
</div>
</div>

<button
onClick={handleConfirm}
className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
>
ยืนยันการชำระเงิน
</button>

<button
onClick={() => router.back()}
className="w-full mt-2 text-sm text-gray-500"
>
ยกเลิก
</button>
</div>
</div>
)
}