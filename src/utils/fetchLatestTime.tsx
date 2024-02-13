const fetchData = async (url: string): Promise<any> => {
  const response = await fetch(url)
  const data = await response.text()
  return data
}

const fetchLatestTime = async (): Promise<any> => {
  const url = 'https://www.jma.go.jp/bosai/amedas/data/latest_time.txt'
  const response = await fetchData(url)
  const date = new Date(response as string)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const monthStr = month.toString().padStart(2, '0')
  const day = date.getDate()
  const dayStr = day.toString().padStart(2, '0')
  const hour = date.getHours()
  const hourStr = hour.toString().padStart(2, '0')
  const minute = date.getMinutes()
  const minuteStr = minute.toString().padStart(2, '0')
  const responseStr = `${year}${monthStr}${dayStr}${hourStr}${minuteStr}`
  return responseStr
}

export default fetchLatestTime
