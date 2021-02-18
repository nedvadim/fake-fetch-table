export default function createValidDatastack (data) {
  return Object.keys(data).map((el, i) => ({
    stock: data.stocks[i],
    current: data.current[i].toFixed(2),
    change: (data.current[i] - data.start[i]).toFixed(2)
  })).sort((a, b) => a.stock.localeCompare(b.stock))
}
