import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function DesktopShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="w-full pt-16 bg-surface">
          {/* opacity-only transition so fixed-position descendants (modals, drawers) are unaffected */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>{children}</motion.div>
        </main>
      </div>
    </>
  )
}
