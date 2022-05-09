const bases = [[346, 84, 61], [42, 100, 70], [164, 95, 43], [195, 83, 38], [195, 83, 16]]
const upperBound = 80
const lowerBound = 20

const generateColors = (size: number) => {
  const neededPerBase = Math.ceil((size - bases.length) / bases.length)
  const result = []

  const coefficients = []

  for (let i = 0; i < bases.length; i += 1) {
    result[i] = bases[i]
    const lum = bases[i][2]
    coefficients.push([(upperBound - lum) / neededPerBase, (lum - lowerBound) / neededPerBase])
  }

  for (let i = bases.length; i < size; i += 1) {
    const j = i % bases.length
    const multiplier = Math.floor(i / 5)
    const b = bases[j]
    const dir = i % 2 === 0 ? 0 : 1
    let l
    if (dir === 0) {
      l = b[2] + (multiplier * coefficients[j][0])
    } else {
      l = b[2] - (multiplier * coefficients[j][1])
    }
    result.push([b[0], b[1], l])
  }

  for (let i = 0; i < result.length; i += 1) {
    const newStr = 'hsl('
    const a = result[i][0].toString().concat(', ')
    const b = result[i][1].toString().concat('%, ')
    const c = result[i][2].toString().concat('%)')
    result[i] = newStr.concat(a).concat(b).concat(c)
  }

  return result
}

export default generateColors
