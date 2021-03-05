const canvas = document.querySelector('.canvas')
const context = canvas.getContext("2d")
const color = document.querySelector('#color-picker')
const strokeColor = document.querySelector('#strokeColor')
const ranges = document.querySelectorAll('.range')
const strokeRange = document.querySelector('#stroke-range')
const textSet = document.querySelector('.text-setting')
const textInput = document.querySelector('#textInput')
const textSize = document.querySelector('#font-size')
const saveBtn = document.querySelector('.save')
const resetBtn = document.querySelector('.reset')
const modeBtns = document.querySelector('.mode-btns')
const modes = document.querySelectorAll('.modeBtn')
const strokeSet = document.querySelector('.stroke-setting')
let mode, prevX,prevY, lastX,lastY
let drawing = false;
let fill = false

const COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
context.fillStyle = "white";
context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
context.strokeStyle = COLOR;
context.fillStyle = COLOR;
context.lineWidth = 2.5;

$('#strokeColor').spectrum({
  type: "text",
  showAlpha: true,
  showPalette: true,
});

$('#color-picker').spectrum({
  type: "text",
  showAlpha: true,
  showPalette: true,
});



const handleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "work";
  link.click();
}
const handleModeClick = (e) => {
  mode = e.target.getAttribute('id')
  ranges.forEach(range => {
    range.style.display = "none"
  })
  if(mode !== null){
    modes.forEach(mode => {
      mode.style.border = "2px solid rgba(0, 0, 0, 0.2)"
    })
    e.target.style.border = "2px solid rgba(0, 0, 0, 0.9)"
  }
  if(mode === "drawing"){
    strokeRange.style.display = "block"
  } else if (mode === "text"){
    textSet.style.display = "flex"
  } else if (mode === "squre" || mode === "circle"){
    console.log(strokeSet)
    strokeSet.style.display = "flex"
  }
}

const handleCM = (e) => {
  e.preventDefault();
}

const stopPainting = () => {
  drawing = false
}

const handleCanvasClick = (e) => {
  context.fillStyle = color.value
  const x = e.offsetX;
  const y = e.offsetY;
  if(mode === "text" && textInput.value){
    const loadText = textInput.value
    if(textSize.value){
      context.font =`${textSize.value}pt gothic`
    }else {
      context.font = '10pt gothic'
    }
    context.fillText(loadText, x,y)
  }else if(mode === "fill"){
    context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

const onMouseMove = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!drawing) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}

const onMousedown = (e) => {
  prevX = e.offsetX;
  prevY = e.offsetY;
  context.strokeStyle = color.value
  context.fillStyle = color.value
  if(mode === "drawing"){
  drawing = true
  }
}
const onMouseUp = (e) => {
  lastX = e.offsetX;
  lastY = e.offsetY;
  if(mode === "drawing"){
    drawing = false
  }else if(mode === "squre"){
    context.strokeStyle = strokeColor.value
    context.fillRect(prevX, prevY, lastX - prevX, lastY-prevY)
    context.strokeRect(prevX, prevY, lastX - prevX, lastY-prevY)
  }else if(mode === "circle"){
    context.strokeStyle = strokeColor.value
    context.beginPath()
    var radius = lastX - prevX
    context.arc(prevX,prevY,radius,0,Math.PI * 2, true ) 
    context.fill()
    context.stroke()
  }
}

const handleResetClick = () => {
  context.fillStyle = "white";
  context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  context.fillStyle = color.value
}

const handleRangeChange = (e) => {
  const size = e.target.value
  context.lineWidth = size
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMousedown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

saveBtn.addEventListener('click', handleSaveClick)
resetBtn.addEventListener('click', handleResetClick)
modeBtns.addEventListener('click', handleModeClick)
strokeRange.addEventListener("input", handleRangeChange);
