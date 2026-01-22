"use client";

import { useEffect } from "react";

export function PaidSync() {
  useEffect(() => {
    const paid = localStorage.getItem("PAID_USER");
    if (paid) {
      document.cookie = `PAID_USER=${paid}; path=/`;
    }
  }, []);

  return null;
}
