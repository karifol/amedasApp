const fetchDate = async (url: string): Promise<any> => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const fetchAmedas = async (time: string): Promise<any> => {
  const url = `https://www.jma.go.jp/bosai/amedas/data/map/${time}00.json`
  console.log(url)
  const response = await fetchDate(url)
  return response
}

export default fetchAmedas
