var canvas=new fabric.Canvas('myCanvas');
var block_img_width=30;
var block_img_height=30;
var player_x=10;
var player_y=10;
var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
    });
}

//player_update();

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
        });
}


//new_image("trunk.jpg");


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
   keypress=e.keyCode;
   console.log(keypress);

   if(e.shiftKey==true&&keypress=="80"){
console.log("p and shift pressed together");
block_img_width = block_img_width + 10;
block_img_height = block_img_height + 10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
   }
   if(e.shiftKey==true&&keypress=="77"){
    console.log("m and shift pressed together");
    block_img_width = block_img_width - 10;
    block_img_height = block_img_height - 10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
       }

    if(keypress=="38"){
        up();
        console.log("up key is pressed");
    }

    if(keypress=="40"){
        down();
        console.log("down key is pressed");
    }

    if(keypress=="37"){
        left();
        console.log("left key is pressed");
    }

    if(keypress=="39"){
        right();
        console.log("right key is pressed");
    }

    if(keypress=="87"){
        new_image('wall.jpg');
        console.log("w key is pressed");
    }

    if(keypress=="71"){
        new_image('ground.png');
        console.log("g key is pressed");
    }

    if(keypress=="76"){
        new_image('light_green.png');
        console.log("l key is pressed");
    }

    if(keypress=="84"){
        new_image('trunk.jpg');
        console.log("t key is pressed");
    }

    if(keypress=="82"){
        new_image('roof.jpg');
        console.log("r key is pressed");
    }

    if(keypress=="89"){
        new_image('yellow_wall.png');
        console.log("y key is pressed");
    }

    if(keypress=="68"){
        new_image('dark_green.png');
        console.log("d key is pressed");
    }

    if(keypress=="85"){
        new_image('unique.png');
        console.log("u key is pressed");
    }

    if(keypress=="67"){
        new_image('cloud.jpg');
        console.log("c key is pressed");
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - 10;
        console.log("When up arrow is pressed, X = "+player_x+" , Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y <= 468){
        player_y = player_y + 10;
        console.log("When down arrow is pressed, X = "+player_x+" , Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 870){
        player_x = player_x + 10;
        console.log("When right arrow is pressed, X = "+player_x+" , Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x >= -40){
        player_x = player_x - 10;
        console.log("When left arrow is pressed, X = "+player_x+" , Y = "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}