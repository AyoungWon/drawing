const canvas = document.querySelector('.canvas')
const context = canvas.getContext("2d")
const color = document.querySelector('#color-picker')
const ranges = document.querySelectorAll('.range')
const strokeRange = document.querySelector('#stroke-range')
const textSet = document.querySelector('.text-setting')
const textInput = document.querySelector('#textInput')
const textSize = document.querySelector('#font-size')
const saveBtn = document.querySelector('.save')
const modeBtns = document.querySelector('.mode-btns')
let mode, prevX,prevY, lastX,lastY
let painting = false;

const COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

context.fillStyle = "white";
context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
context.strokeStyle = COLOR;
context.fillStyle = COLOR;
context.lineWidth = 2.5;


$('#color-picker').spectrum({
  type: "text",
  showAlpha: true,
  showPalette: true,
});


const handleColorClick = () => {
console.log('a')
}

const handleSaveClick = () => {

}
const handleModeClick = (e) => {
mode = e.target.getAttribute('id')
console.log(ranges)
console.log(mode)
ranges.forEach(range => {
  range.style.display = "none"
})
if(mode === "drawing"){
  strokeRange.style.display = "block"
} else if (mode === "text"){
  textSet.style.display = "flex"
}
}

const onMouseMove = (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}
const handleCanvasClick = (e) => {
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
  }


}
const handleCM = () => {

}
const startPainting = () => {

}
const stopPainting = () => {

}
const onMousedown = (e) => {
  prevX = e.offsetX;
  prevY = e.offsetY
if(mode === drawing){

}else if(mode === "squre"){

}
}
const onMouseUp = (e) => {
  lastX = e.offsetX;
  lastY = e.offsetY
if(mode === drawing){

}else if(mode === "squre"){
 context.fillRect(prevX, prevY, lastX - prevX, lastY-prevY)
}else if(mode === "circle"){
  context.beginPath()
  var radius = lastX - prevX
  context.arc(prevX,prevY,radius,0,Math.PI * 2, true ) 
  context.fill()
}
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMousedown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}


color.addEventListener('click', handleColorClick)
saveBtn.addEventListener('click', handleSaveClick)
modeBtns.addEventListener('click', handleModeClick)