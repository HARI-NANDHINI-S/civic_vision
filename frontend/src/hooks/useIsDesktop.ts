import { useEffect, useState } from 'react'
const Q = '(min-width: 768px)' // Stitch: mobile < 768px uses the mobile_tab designs
export function useIsDesktop() {
  const [v, setV] = useState(() => window.matchMedia(Q).matches)
  useEffect(() => {
    const m = window.matchMedia(Q); const f = () => setV(m.matches)
    m.addEventListener('change', f); return () => m.removeEventListener('change', f)
  }, [])
  return v
}
