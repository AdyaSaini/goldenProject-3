var brickWall, brickWallImg;
var streetImg, street;
var graaImg, grass;
var brick1, brick2;

function preload(){
    streetImg = loadImage("images/street.jpeg");
    brickWallImg = loadImage("images/brickWall.jpeg");
    grassImg = loadImage("images/grass.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    street = createSprite(windowWidth-465, windowHeight/2);
    street.addImage(streetImg);
    street.scale = 1.7;

    brickWall = createSprite(windowWidth/6, windowHeight/2);
    brickWall.addImage(brickWallImg);
    brickWall.scale = 0.6;

    grass = createSprite(windowWidth/2, windowHeight-150);
    grass.addImage(grassImg);

    brick1 = createSprite(120,175,150,50);
    brick1.shapeColor = "#994d00";

    brick2 = createSprite(430,175,150,50);
    brick2.shapeColor = "#994d00";

}
function draw(){
    background("black");
    //background("pink");
    console.log(mouseX,mouseY);

    drawSprites();
}