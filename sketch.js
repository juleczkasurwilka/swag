let sliderNapis;
let message = "COME BACK TO YOUR CHILDHOOD";
let cellWidth;
let cellHeight;
let button;


function setup(){
    createCanvas(1920,1080);
    textSize (80);
  textAlign (CENTER,CENTER);
  sliderNapis = createSlider (0,message.length,0);
  sliderNapis.position(width/2-500,height/2+100)
  sliderNapis.size(1000);
    cellWidth = width / message.length;
  cellHeight = height;
  // Create a button and place it beneath the canvas.
   button = createButton('yes, take me back');
  button.position(880, 700);

  // Call repaint() when the button is pressed.
  button.mousePressed(repaint);
}

function draw (){
background(255);
fill(0);
  for (let i = 0; i < sliderNapis.value(); i++) {
    let x = i * cellWidth + cellWidth / 2;
    let y = cellHeight / 2;
    text(message[i], x, y);

  }
    /*
if (sliderNapis.value()<message.length){
button.hide();
}else{
button.show();
}*/
}

function mouseReleased(){
  print('['+mouseX + ',' + mouseY+'],');

}
function repaint() {

window.location.href = 'https://postupalskasasha.github.io/ankaszklanka/'

}
