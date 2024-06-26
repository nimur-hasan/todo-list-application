export function isDateExpired(dateString:string) {
  // Convert the dateString to a Date object
  const dueDate = new Date(dateString)

  // Get the current date
  const currentDate = new Date()

  // Compare dueDate with currentDate
  return dueDate < currentDate
}
