let sliderNapis;
let message = "COME BACK TO YOUR CHILDHOOD";
let cellWidth;
let cellHeight;



function setup(){
    createCanvas(1920,1080);
    textSize (80);
  textAlign (CENTER,CENTER);
  sliderNapis = createSlider (0,message.length,0);
  sliderNapis.position(width/2-500,height/2+100)
  sliderNapis.size(1000);
    cellWidth = width / message.length;
  cellHeight = height;
  
}

function draw (){
background(255);
fill(0);
  for (let i = 0; i < sliderNapis.value(); i++) {
    let x = i * cellWidth + cellWidth / 2;
    let y = cellHeight / 2;
    text(message[i], x, y);

  }

}

function mouseReleased(){
  print('['+mouseX + ',' + mouseY+'],');

}
