// Hands a file chosen on the Dashboard over to the AI Inspection page.
let pending: File | null = null
export const stashUpload = (f: File) => { pending = f }
export const takeUpload = () => { const f = pending; pending = null; return f }
