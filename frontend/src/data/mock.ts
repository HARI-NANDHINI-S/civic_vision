import type { CivicIssue, DashboardStats, Inspection, MaintenanceRecord } from '../types'

// Placeholder UI data only. Not produced by any model and not live/real-world information.
export const mockStats: DashboardStats = {
  detectedIssues: 1284, criticalHazards: 38, triageQueue: 142, fieldCrews: 86,
  inferenceConfidencePct: 94.8, mttrHours: 28.4, source: 'mock',
}

export const mockIssues: CivicIssue[] = [
  { id: 'CIV-9021', title: 'Deep Structural Pothole - Lane 2', severity: 'critical', status: 'Triage Pending',
    location: { id: 'L1', label: 'North Ring Rd, Near City Hospital' }, detectedAt: '2026-09-30T06:00:00Z',
    priority: { score: 94, level: 'critical', recommendedAction: 'Emergency Hot-mix patch' } },
  { id: 'CIV-8984', title: 'Collapsed Storm Drain Grate', severity: 'critical', status: 'Triage Pending',
    location: { id: 'L2', label: '5th Avenue & Pine Cross' }, detectedAt: '2026-09-30T05:40:00Z',
    priority: { score: 91, level: 'critical', recommendedAction: 'Grate replacement & cone perimeter' } },
  { id: 'CIV-8840', title: 'Extensive Alligator Cracking', severity: 'high', status: 'Assessed',
    location: { id: 'L3', label: 'Industrial Sector Road B' }, detectedAt: '2026-09-30T04:10:00Z',
    priority: { score: 78, level: 'high', recommendedAction: 'Surface Milling & Resurfacing' } },
  { id: 'CIV-8712', title: 'Loose Gravel & Road Surface Erosion', severity: 'medium', status: 'Prioritised',
    location: { id: 'L4', label: 'Westside Outer Link' }, detectedAt: '2026-09-29T21:00:00Z',
    priority: { score: 58, level: 'medium', recommendedAction: 'Surface sweeping & seal coat' } },
]

export const mockMaintenance: MaintenanceRecord[] = [
  { id: 'WO-8802', issueId: 'CIV-9021', crew: 'Team Alpha', status: 'In Progress' },
]

export const mockInspection = (fileName: string): Inspection => ({
  id: 'INF-8841-CV9', fileName, createdAt: new Date().toISOString(), source: 'mock',
  detections: [
    { id: 'd1', label: 'SEVERE_POTHOLE', confidence: 0.942, box: { x: 0.3, y: 0.45, width: 0.25, height: 0.2 } },
    { id: 'd2', label: 'LONGITUDINAL_CRACK', confidence: 0.875, box: { x: 0.6, y: 0.3, width: 0.2, height: 0.3 } },
  ],
  assessment: { severity: 'critical' },
  priority: { score: 92, level: 'critical', recommendedAction: 'Emergency Hot-mix patch' },
  location: { id: 'demo', label: 'Demo location', point: { lat: 37.7749, lng: -122.4194 } },
})
