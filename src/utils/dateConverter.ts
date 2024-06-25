export function formatDate(inputDate: string): string {
  // Parse the input date string into a Date object
  const dateObj = new Date(inputDate)

  // Ensure the dateObj is valid
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date')
  }

  // Define month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // Extract day, month, and year from the date object
  const day = dateObj.getDate()
  const monthIndex = dateObj.getMonth()
  const year = dateObj.getFullYear()

  // Format the date string as 'Month day, year'
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`

  return formattedDate
}

