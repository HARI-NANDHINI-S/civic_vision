import { mockInspection } from '../data/mock'
import type { Inspection } from '../types'
import { USE_MOCK, delay, http } from './apiClient'

export const inspectionService = {
  /** Future: POST /inspections (multipart) -> YOLO + priority model. */
  async analyzeImage(file: File): Promise<Inspection> {
    if (!USE_MOCK) {
      const body = new FormData(); body.append('file', file)
      return http<Inspection>('/inspections', { method: 'POST', body })
    }
    await delay(600)
    return mockInspection(file.name)
  },
}
