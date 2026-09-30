import { mockMaintenance } from '../data/mock'
import type { MaintenanceRecord } from '../types'
import { USE_MOCK, delay, http } from './apiClient'

export const maintenanceService = {
  async list(): Promise<MaintenanceRecord[]> {
    if (!USE_MOCK) return http<MaintenanceRecord[]>('/maintenance')
    await delay(150); return mockMaintenance
  },
  async dispatch(issueId: string): Promise<{ workOrderId: string }> {
    if (!USE_MOCK) return http('/maintenance/dispatch', { method: 'POST', body: JSON.stringify({ issueId }), headers: { 'Content-Type': 'application/json' } })
    await delay(800); return { workOrderId: 'WO-8802' }
  },
}
