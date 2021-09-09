var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
mars_image_array=["mars.jpg","mars_img_1.jpg","mars_img_2.jpg","mars_img_6.jpg","mars_img_4.jpg"];
rover_width=100;
rover_height=90;
rover_x= 100;
rover_y=100;
random_number=Math.floor(Math.random()* 5);
console.log(random_number);
background_image= mars_image_array[random_number];
rover_image= "rover.png";
function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground();
    background_imgTag.src= background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadRover();
    rover_imgTag.src= rover_image;
} 
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        console.log("up");
        up();
    }
    if(keyPressed=="40"){
        console.log("down");
        down();
    }
    if(keyPressed=="37"){
        console.log("left");
        left();
    }
    if(keyPressed=="39"){
        console.log("right");
        right();
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed x= "+ rover_x+ "| y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed x= "+ rover_x+ "| y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed x= "+ rover_x+ "| y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed x= "+ rover_x+ "| y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}

