// =============================
// 1) paid state (client-side mock)
// utils/paid.ts
// =============================
export const isPaid = (): boolean => {
    if (typeof window === "undefined") return false
    return localStorage.getItem("PAID_USER") === "true"
    }
    
    export const setPaid = (value: boolean) => {
    if (typeof window === "undefined") return
    localStorage.setItem("PAID_USER", value ? "true" : "false")
    }