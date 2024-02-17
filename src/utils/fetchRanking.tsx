import { DOMParser } from 'react-native-html-parser'

const fetchData = async (): Promise<string> => {
  const fileName = getFileName()
  const url = `https://www.data.jma.go.jp/stats/data/mdrr/rank_daily/${fileName}`
  const res = await fetch(url)
  const data = await res.text()
  return data
}

const getFileName = (): string => {
  // 2月17日のデータなら「0217」
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const dateZfill = ('0' + date).slice(-2)
  const monthZfill = ('0' + month).slice(-2)
  const fileName = `data${monthZfill}${dateZfill}.html`
  return fileName
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
    tableObj[title] = {}
    const trArray = table.getElementsByTagName('tr')
    for (let i = 0; i < trArray.length; i++) {
      const tdArray = trArray[i].getElementsByTagName('td')
      if (tdArray.length === 0) continue
      if (tdArray.length === 1) {
        tableObj[title][i] = {
          rank: tdArray[0].textContent
        }
        continue
      }
      tableObj[title][i] = {
        rank: tdArray[0].textContent,
        pref: tdArray[1].textContent.split(' ')[0],
        amedas: tdArray[3].textContent.split('（')[0],
        value: tdArray[4].textContent,
        time: tdArray[5].textContent
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

const fetchRanking = async (): Promise<any> => {
  console.log('fetchRanking')
  const data = await fetchData()
  const rankObj = parseHtml(data)
  return rankObj
}

export default fetchRanking
