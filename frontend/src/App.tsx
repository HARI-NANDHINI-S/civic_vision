import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import StitchPage from './components/StitchPage'

const g = (n: string) => lazy(() => import(`./pages/generated/${n}.tsx`))
const P = {
  DashboardDesktop: g('DashboardDesktop'), DashboardMobile: g('DashboardMobile'),
  InspectionDesktop: g('InspectionDesktop'), InspectionMobile: g('InspectionMobile'),
  PriorityQueueDesktop: g('PriorityQueueDesktop'), PriorityQueueMobile: g('PriorityQueueMobile'),
  MapDesktop: g('MapDesktop'), MapMobile: g('MapMobile'),
  MaintenanceDesktop: g('MaintenanceDesktop'), MaintenanceMobile: g('MaintenanceMobile'),
  AnalyticsDesktop: g('AnalyticsDesktop'), AnalyticsMobile: g('AnalyticsMobile'),
  RoadLocationDesktop: g('RoadLocationDesktop'), RoadLocationMobile: g('RoadLocationMobile'),
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<StitchPage name="dashboard" Desktop={P.DashboardDesktop} Mobile={P.DashboardMobile} />} />
      <Route path="/inspection" element={<StitchPage name="inspection" Desktop={P.InspectionDesktop} Mobile={P.InspectionMobile} />} />
      {/* No dedicated "Civic Issues" screen exists in the Stitch export; it shares the Priority Queue design. */}
      <Route path="/issues" element={<StitchPage name="priority" Desktop={P.PriorityQueueDesktop} Mobile={P.PriorityQueueMobile} />} />
      <Route path="/priority" element={<StitchPage name="priority" Desktop={P.PriorityQueueDesktop} Mobile={P.PriorityQueueMobile} />} />
      <Route path="/road-location" element={<StitchPage name="road-location" Desktop={P.RoadLocationDesktop} Mobile={P.RoadLocationMobile} />} />
      <Route path="/map" element={<StitchPage name="map" Desktop={P.MapDesktop} Mobile={P.MapMobile} />} />
      <Route path="/analytics" element={<StitchPage name="analytics" Desktop={P.AnalyticsDesktop} Mobile={P.AnalyticsMobile} />} />
      <Route path="/maintenance" element={<StitchPage name="maintenance" Desktop={P.MaintenanceDesktop} Mobile={P.MaintenanceMobile} />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
