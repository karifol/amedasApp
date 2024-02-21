const fetchDate = async (url: string): Promise<any> => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const fetchAmedas = async (time: string): Promise<any> => {
  console.log('fetchAmedas')
  const url = `https://www.jma.go.jp/bosai/amedas/data/map/${time}00.json`
  const response = await fetchDate(url)
  const arr = []
  for (const key in response) {
    const data = response[key]
    data.id = key
    arr.push(data)
  }
  return arr
}

export default fetchAmedas
