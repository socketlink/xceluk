// Utility function to generate unique IDs
export function generateUniqueId(): string {
  return `m_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
