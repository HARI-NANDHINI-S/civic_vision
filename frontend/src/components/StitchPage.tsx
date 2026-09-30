import { Suspense, useEffect, type ComponentType } from 'react'
import { useNavigate } from 'react-router-dom'
import DesktopShell from '../layouts/DesktopShell'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { setupPage } from '../behaviors/pages'
import { enhancePage } from '../behaviors/enhance'

interface Props { name: string; Desktop: ComponentType; Mobile: ComponentType }

/** Renders the Stitch desktop design (>=768px) or the Stitch mobile_tab design (<768px). */
export default function StitchPage({ name, Desktop, Mobile }: Props) {
  const isDesktop = useIsDesktop()
  const navigate = useNavigate()
  useEffect(() => {
    const stopPage = setupPage(name, isDesktop, navigate)
    const stopEnhance = enhancePage()
    return () => { stopEnhance(); stopPage() }
  }, [name, isDesktop, navigate])
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      {isDesktop ? <DesktopShell><Desktop /></DesktopShell> : <Mobile />}
    </Suspense>
  )
}
