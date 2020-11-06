const body = document.querySelector('body')
const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')

// COLOR LINE
let colorWell = document.querySelector("#canvColor")
colorWell.value = '#424242'
let lineColor = colorWell.value

colorWell.onchange = e => {
  lineColor = e.target.value
}

// WIDTH LINE
let lineWidth = 3

// NUMBER LINE
let nbrLineForDraw = 3

// INPUT RANG CONTROL
const rangeInputs = document.querySelectorAll(".js-range")
rangeInputs.forEach( el => {
  const min = el.getAttribute('min')
  const max = el.getAttribute('max')
  const val = el.value
  const spanMin = document.createElement('span')
  const spanMax = document.createElement('span')
  const spanVal = document.createElement('span')
  const parentInput = el.parentNode
  spanMin.innerHTML = min
  spanMax.innerHTML = max
  spanVal.innerHTML = val
  spanMin.className = 'range-min'
  spanMax.className = 'range-max'
  spanVal.className = 'range-val'
  parentInput.insertBefore(spanMin, el)
  parentInput.insertBefore(spanMax, el)
  parentInput.insertBefore(spanVal, el)
})

// WIDTH AND NUMBER LINE CONTROL
const rangeInput = document.querySelectorAll(".js-range")
rangeInput.forEach( el => {
  el.onchange = e => {
    const rangeValue = e.target.value
    const parentBlock = e.target.closest('div')
    const elem = parentBlock.querySelector('.range-val')
    elem.innerHTML = rangeValue

    //SET VALUE LINE WIDTH OR NUMBER LINE
    const nameCurrentElem = e.target.getAttribute('name')
    let currentElem = ''
    if (nameCurrentElem === 'lineWidth') {
      lineWidth = rangeValue
    } else if (nameCurrentElem === 'numberLine') {
      nbrLineForDraw = rangeValue
    }
    
  }
})

// ARRAY ALL CARD POINTS ON CANVAS
const listCard = []
const lengthListCard = () => listCard.length // COUNT TOTAL POINT ON CANVAS

// SET WIDTH AND HEIGHT FOR CANVAS
const canvWidth = 1000
const canvHeight = 1000

canv.width = canvWidth
canv.height = canvHeight

const canvStyle = {
  backgroundColor: '#d2d2d2'
}
Object.assign(canv.style, canvStyle)

// CLEAR CANVAS
const clearCanvas = () => ctx.clearRect(0,0,canvWidth,canvHeight)

// GENERATOR COLOR
const getRandomColor = () => {
  const letters = '0123456789ecb';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// DRAW DOT
const drawDot = (x, y, r) => {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI*2)
  ctx.fill()
  ctx.closePath()
}


// The coordinates of a line
const lineCard = (primaryPosition, secondaryPosition) => {
  const arr = []
  const arrCards = []
  const lengthCard = lengthListCard()
  if (lengthCard >= 2 && secondaryPosition <= lengthCard-1) {
    const newArr = arr.concat([listCard[primaryPosition].x, listCard[primaryPosition].y, listCard[secondaryPosition].x, listCard[secondaryPosition].y])
    const [startX, startY, EndX, EndY] = newArr
    arrCards.push({x:startX, y:startY})
    arrCards.push({x:EndX, y:EndY})
  } 
  return arrCards
}

// CALC FOR EACH LINE, ALL POINT COORDINATES OF WAY  
const calcWayPoints = (lineCards) => {
  const waypoints = []
  let counter = 1
  for (let i = 1; i < lineCards.length; i++) {
    const pt0 = lineCards[i - 1]
    const pt1 = lineCards[i]

    const dx = pt1.x - pt0.x
    const dy = pt1.y - pt0.y

    for (let p = 0; p < 100; p++) {
      const x = pt0.x + dx * p / 100
      const y = pt0.y + dy * p / 100

      waypoints.push({
          x: x,
          y: y
      })
    }
  }
  return waypoints
}

// DRAW AND ANIMATE A LINE
const animation = (allCardsLine) => {
  let counter = 1
  const totalPoints = allCardsLine.length
  for (let l = 1; l < totalPoints; l++) {
    let init = l - 1
    setTimeout(() => {
      ctx.beginPath()
      ctx.moveTo(allCardsLine[init].x, allCardsLine[init].y)
      ctx.lineTo(allCardsLine[counter].x, allCardsLine[counter].y)
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = lineColor
      ctx.stroke()
      counter++
    }, 500)
  }
}

// FOR EACH CLIC ON CANVAS
canv.onmousedown = e => {
  const x = e.offsetX
  const y = e.offsetY
  let lengthCard = lengthListCard()
  
  for (let r = 0; r < 6; r++) {
    setTimeout(() => {
      drawDot(x, y, r)
    }, 400)
  }
  listCard.push({x, y})

  if (lengthCard > 0) {
    switch (lengthCard) {
      case 1:
        color = 'black'
        break;
      default:
        lengthCard = lengthListCard()
        color = getRandomColor()
        break;
    }
    
    if (lengthCard>2) {
      lengthCard = lengthListCard()
      const MaxNbrLineForDraw = lengthCard - 1
      const reelNbrLineForDraw = (nbrLineForDraw > MaxNbrLineForDraw)? MaxNbrLineForDraw:nbrLineForDraw

      for (let l = reelNbrLineForDraw; l > 0; l--) {
        const currentPrimaryPosition = lengthCard-1
        const currentSecondaryPosition = currentPrimaryPosition - l
        const lineCards = lineCard(currentPrimaryPosition, currentSecondaryPosition)
        const allCardsLine = calcWayPoints(lineCards)
        animation(allCardsLine)
    
    console.log(currentPrimaryPosition, currentSecondaryPosition)
      }

    } else {
      const primaryPosition = 1
      const secondaryPosition = 0
      const lineCards = lineCard(primaryPosition, secondaryPosition)
      const allCardsLine = calcWayPoints(lineCards)
      animation(allCardsLine)
    }
    
  }
}


