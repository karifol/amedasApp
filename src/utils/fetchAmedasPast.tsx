// 過去のAMeDASデータをfetchする関数
// データは３時間毎のファイルで地点ごとにまとめられている

const fetchData = async (url: string): Promise<any> => {
  const response = await fetch(url)
  // statusが200番台以外の場合はからのオブジェクトを返す
  if (!response.ok) {
    return 999
  }
  const data = await response.json()
  return data
}

const calcLatestTime = (): string[] => {
  // 現在時刻に最も近い過去の３時間毎の時刻を計算する
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate()
  const hour = now.getHours()
  const latestHour = Math.floor(hour / 3) * 3
  // 日本時間の最新時刻
  const latestTime = new Date(year, month, date, latestHour)
  latestTime.setHours(latestTime.getHours() + 9)
  // 最新の３時間毎の時刻とその３時間前の時刻を計算
  const latest3h = latestTime.toISOString().slice(0, 13).replace(/-/g, '').replace(/:/g, '').replace('T', '_')
  latestTime.setHours(latestTime.getHours() - 3)
  const latest3hBefore = latestTime.toISOString().slice(0, 13).replace(/-/g, '').replace(/:/g, '').replace('T', '_')
  return [latest3h, latest3hBefore]
}

const fetchAmedasPast = async (place: number): Promise<any> => {
  console.log('fetchAmedasPast')
  // 2ステップ分のデータをfetchする
  const [latest3h, latest3hBefore] = calcLatestTime()
  const url3h = `https://www.jma.go.jp/bosai/amedas/data/point/${place}/${latest3h}.json`
  const response3h = await fetchData(url3h)
  const url3hBefore = `https://www.jma.go.jp/bosai/amedas/data/point/${place}/${latest3hBefore}.json`
  const response3hBefore = await fetchData(url3hBefore)
  // 2ステップ分のデータをマージする
  let response = {} as any
  if (response3h === 999) {
    response = response3hBefore
  } else {
    // 結合する
    response = Object.assign(response3hBefore, response3h)
  }

  const timeArray = Object.keys(response as object)
  // 18個のデータを取得する
  const timeArraySorted = timeArray.sort().slice(-18)
  const tempArr = [] as number[]
  const windArr = [] as number[]
  const humidityArr = [] as number[]
  const prec1hArr = [] as number[]
  for (const time of timeArraySorted) {
    const data = response[time]
    if (data.temp !== undefined) {
      tempArr.push(data.temp[0] as number)
    }
    if (data.wind !== undefined) {
      windArr.push(data.wind[0] as number)
    }
    if (data.humidity !== undefined) {
      humidityArr.push(data.humidity[0] as number)
    }
    if (data.precipitation1h !== undefined) {
      prec1hArr.push(data.precipitation1h[0] as number)
    }
  }
  const obj = {
    time: timeArraySorted,
    temp: tempArr,
    wind: windArr,
    humidity: humidityArr,
    prec1h: prec1hArr
  }
  return obj
}

export default fetchAmedasPast
