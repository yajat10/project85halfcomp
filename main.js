//Create a reference for canvas 
 var canvas=document.getElementById("myCanvas")
 var ctx=canvas.getContext("2d")
//Give specific height and width to the car image
var car_height=75;
var car_width=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
//Set initial position for a car image.
var car_x=5;
var car_y=225;

function add() {
	//upload car, and background images on the canvas.
	background_img=new Image;
	background_img.onload=uploadBackground();
	background_img.src=background_image;

    car_img=new Image;
	car_img.onload=uploadgreencar();
	car_img.src="car2.png";
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_img,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(car_img,car_x,car_y,car_width,car_height)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){

	
	
		if (car_y>=0 ) {
			car_y-=10;
			console.log("roverY="+car_y);
			console.log("roverX="+car_x);
			uploadBackground()
			uploadgreencar()
		}
	
	
}

function down()
{
	//Define function to move the car downwardif (car_y>=0 ) {
		if (car_y<=375 ) {
			car_y+=10;
			console.log("roverY="+car_y);
			console.log("roverX="+car_x);
			uploadBackground()
			uploadgreencar()
		}
	
}

function left()
{
	//Define function to move the car left side
	if (car_x>=0 ) {
		car_x-=10;
		console.log("roverY="+car_y);
		console.log("roverX="+car_x);
		uploadBackground()
		uploadgreencar()
	}

}

function right()
{
	//Define function to move the car right side
	if (car_x>=795 ) {
		car_x+=10;
		console.log("roverY="+car_y);
		console.log("roverX="+car_x);
		uploadBackground()
		uploadgreencar()
	}

}
