/*
 * AMeDASテーブルをfetchする関数
*/

const fetchData = async (url: string): Promise<any> => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const fetchTable = async (): Promise<any> => {
  const url = 'https://www.jma.go.jp/bosai/amedas/const/amedastable.json'
  console.log('fetchTable')
  const response = await fetchData(url)
  const arr = []
  for (const key in response) {
    const data = response[key]
    data.id = key
    data.latitude = data.lat[0] + data.lat[1] / 60
    data.longitude = data.lon[0] + data.lon[1] / 60
    arr.push(data)
  }
  return arr
}

export default fetchTable
