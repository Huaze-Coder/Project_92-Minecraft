

// Create the reference variable of the canvas using fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images
block_width = 30;
block_height = 30;


// Define the starting x and y coordinates for the player
player_x = 10;
player_y = 10;


// Define a variable named player_object to store object of the player image
var player_object = "";
var block_object = "";

// Add a function named player_update() to add the player image
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}

// Add a function named new_image() to add the different images as per the specific keys pressed
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == "80"){
        console.log("p + shiftpress");
        block_width += 10;
        block_height += 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(e.shiftKey == true && keypress == "77"){
        console.log("m + shiftpress");
        block_width -= 10;
        block_height -= 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keypress == "38"){
        Up();
        console.log("Up");
    }
    if(keypress == "40"){
        Down();
        console.log("Down");
    }
    if(keypress == "37"){
        Left();
        console.log("Left");
    }
    if(keypress == "39"){
        Right();
        console.log("Right");
    }
    if(keypress == "87"){
        new_image("wall.jpg")
        console.log("W");
    }
    if(keypress == "71"){
        new_image("ground.png");
        console.log("G");
    }
    if(keypress == "76"){
        new_image("light_green.png");
        console.log("L");
    }
    if(keypress == "84"){
        new_image("trunk.jpg");
        console.log("T");
    }
    if(keypress == "82"){
        new_image("roof.jpg");
        console.log("R");
    }
    if(keypress == "89"){
        new_image("yellow_wall.png");
        console.log("Y");        
    }
    if(keypress == "68"){
        new_image("dark_green.png");
        console.log("D");
    }
    if(keypress == "85"){
        new_image("unique.png");
        console.log("U");
    }
    if(keypress == "67"){
        new_image("cloud.jpg");
        console.log("C");
    }
}
function Up(){
    if(player_y > 0){
        player_y = player_y - block_height;
        console.log("block_image_height = "+ block_height);
        console.log("when up pressed, x = "+ player_x +" y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if(player_y < 500){
        player_y = player_y + block_height;
        console.log("block_image_height = "+ block_height);
        console.log("when down pressed, x = "+ player_x +" y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if(player_x > 0){
        player_x = player_x - block_width;
        console.log("block_image_width = "+ block_width);
        console.log("when left pressed, x = "+ player_x +" y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if(player_x < 800){
        player_x = player_x + block_width;
        console.log("block_image_width = "+ block_width);
        console.log("when right pressed, x = "+ player_x +" y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}