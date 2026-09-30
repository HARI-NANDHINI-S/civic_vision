import { mockIssues } from '../data/mock'
import type { CivicIssue } from '../types'
import { USE_MOCK, delay, http } from './apiClient'

export const priorityService = {
  async list(): Promise<CivicIssue[]> {
    if (!USE_MOCK) return http<CivicIssue[]>('/priority')
    await delay(150); return mockIssues
  },
}
