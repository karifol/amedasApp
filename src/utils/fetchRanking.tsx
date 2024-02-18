import { DOMParser } from 'react-native-html-parser'

const fetchData = async (date: string): Promise<string> => {
  const url = `https://www.data.jma.go.jp/stats/data/mdrr/rank_daily/data${date}.html`
  const res = await fetch(url)
  const data = await res.text()
  return data
}

const parseHtml = (htmlString: string): any => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html')
  // 発表日時
  let updateDay = ''
  let updateHour = ''
  const h1 = doc.getElementById('main').getElementsByTagName('h1')[0].getElementsByTagName('span')
  for (let i = 0; i < h1.length; i++) {
    const spanClass = h1[i].getAttribute('class')
    const spanId = h1[i].getAttribute('id')
    if (spanId === 'data_n') {
      updateDay = h1[i].textContent
    }
    if (spanClass === 'ex2') {
      updateHour = h1[i].textContent
    }
  }

  // 各テーブルのデータ取得
  const tableArray = doc.getElementById('main').getElementsByTagName('table')
  const tableObj = {} as any
  for (let i = 0; i < tableArray.length; i++) {
    const table = tableArray[i]
    const title = table.getElementsByTagName('caption')[0].textContent
    const key = title.split('　')[0] // 「日最深積雪（5cm以上のみ） 20時00分現在」のような文字列から「日最深積雪（5cm以上のみ）」の部分を取得
    tableObj[key] = {}
    const trArray = table.getElementsByTagName('tr')
    for (let i = 0; i < trArray.length; i++) {
      const tdArray = trArray[i].getElementsByTagName('td')
      if (tdArray.length === 0) continue
      if (tdArray.length === 1) {
        // 該当する観測値がない場合
        tableObj[key][i] = {
          rank: tdArray[0].textContent,
          nodata: true
        }
        continue
      }
      tableObj[key][i] = {
        rank: tdArray[0].textContent,
        pref: tdArray[1].textContent.split(' ')[0],
        amedas: tdArray[3].textContent.split('（')[0],
        value: tdArray[4].textContent,
        time: tdArray[5].textContent,
        title
      }
    }
  }
  const rankObj = {
    updateDay,
    updateHour,
    tableObj
  }
  return rankObj
}

const fetchRanking = async (date: string): Promise<any> => {
  console.log('start fetchRanking')
  const data = await fetchData(date)
  const rankObj = parseHtml(data)
  console.log('finish fetchRanking')
  return rankObj
}

export default fetchRanking
