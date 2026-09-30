import { mockStats } from '../data/mock'
import type { DashboardStats } from '../types'
import { USE_MOCK, delay, http } from './apiClient'

export const dashboardService = {
  async getStats(): Promise<DashboardStats> {
    if (!USE_MOCK) return http<DashboardStats>('/dashboard/stats')
    await delay(100); return mockStats
  },
}
