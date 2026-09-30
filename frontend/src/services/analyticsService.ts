import { USE_MOCK, http } from './apiClient'
// Analytics/map visuals are currently Stitch's own markup. Wire these when the API contract exists.
export const analyticsService = {
  async getModelMetrics(): Promise<unknown> { if (!USE_MOCK) return http('/analytics/model'); return null },
}
export const mapService = {
  async getMarkers(): Promise<unknown> { if (!USE_MOCK) return http('/map/markers'); return [] },
}
