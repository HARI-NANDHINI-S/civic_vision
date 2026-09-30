// Frontend contracts. Align these with the FastAPI schema once it exists.
export type Severity = 'low' | 'medium' | 'high' | 'critical'
export type DataSource = 'mock' | 'api'

export interface BoundingBox { x: number; y: number; width: number; height: number } // 0..1, relative to image
export interface GeoPoint { lat: number; lng: number }
export interface Location { id: string; label: string; ward?: string; point?: GeoPoint }

export interface Detection {
  id: string
  label: string            // e.g. SEVERE_POTHOLE
  confidence: number       // 0..1
  box: BoundingBox
}
export interface SeverityAssessment { severity: Severity; note?: string }
export interface PriorityPrediction { score: number; level: Severity; recommendedAction: string }

export interface Inspection {
  id: string
  fileName: string
  createdAt: string
  detections: Detection[]
  assessment: SeverityAssessment
  priority: PriorityPrediction
  location?: Location
  source: DataSource
}

export type IssueStatus = 'Triage Pending' | 'Assessed' | 'Prioritised' | 'Scheduled' | 'In Progress' | 'Resolved'
export interface CivicIssue {
  id: string
  title: string
  severity: Severity
  location: Location
  status: IssueStatus
  confidence?: number
  priority: PriorityPrediction
  detectedAt: string
}
export interface MaintenanceRecord {
  id: string
  issueId: string
  crew?: string
  status: IssueStatus
  scheduledFor?: string
}
export interface DashboardStats {
  detectedIssues: number
  criticalHazards: number
  triageQueue: number
  fieldCrews: number
  inferenceConfidencePct: number
  mttrHours: number
  source: DataSource
}
