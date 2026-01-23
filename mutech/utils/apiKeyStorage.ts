// =====================================
// utils/apiKeyStorage.ts
// localStorage mock (replace with DB later)
// =====================================
export type StoredApiKey = {
    hash: string;
    createdAt: string;
    };
    
    const STORAGE_KEY = "MUTECH_API_KEY";
    
    export function saveApiKey(data: StoredApiKey) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    
    export function getApiKey(): StoredApiKey | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
    }
    
    export function clearApiKey() {
    localStorage.removeItem(STORAGE_KEY);
    }