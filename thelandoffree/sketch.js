
//Gabor Paszti - "The land of free - censoring beauty" //

var backgroundImg; 
var foregroundImg;
var song;


var numFlowers;

var red_Flower_Static;
var red_Flower;
var red_FlowerPos_x;
var red_FlowerPos_y;
var red_FlowerDirection_x;
var red_FlowerDirection_y;

var bw_Flower;
var bw_FlowerPos_x;
var bw_FlowerPos_y;
var bw_FlowerDirection_x;
var bw_FlowerDirection_y;


var maxDist;


function preload()
{
    
    backgroundImg = loadImage("2.CENSORING BEAUTY VIDEO-UNDER LAYER  - PING.png");
    foregroundImg = loadImage("1.CENSORING BEAUTY VIDEO-TOP LAYER  - PING.png");
    red_Flower = loadImage("FLOWER Red.png")
    bw_Flower = loadImage("FLOWER BW.png")
    red_Flower_Static = loadImage("FLOWER Red_Static.png")
   
    
    //load your sounds here
    soundFormats('mp3','wav');
    song = loadSound('1.CENSORING BEAUTY Sound.mp3');
    song.setVolume(0.3);
}


function setup()
{
    
    createCanvas(windowWidth, windowHeight);
   
	video = createCapture(VIDEO);         //WEBCAM
    video.size(500,750);
    video.hide();
    
    
    
    

     numFlowers = 10 ;
    
     red_Flower = loadImage("FLOWER Red.png")
     red_FlowerPos_x = [];
     red_FlowerPos_y = [];
     red_FlowerDirection_x = [];
     red_FlowerDirection_y = [];
    
     for(var i=0; i< numFlowers; i++)  
         {
             red_FlowerPos_x.push(random(windowWidth/2));
             red_FlowerPos_y.push(random(windowHeight/2));
             red_FlowerDirection_x.push(random(-5,7));
             red_FlowerDirection_y.push(random(-5,7));
         }
    
    
    
maxDist = dist( windowWidth/2, windowHeight/2,0,0)
       
}



function mousePressed() 
{
        if ( !song.isPlaying() )     // .isPlaying() returns a boolean
          {        
            //song.play();
              song.loop()

        //  } else {
        //    song.pause();

           }
       
}

function keyPressed()
{
    if(song.isPlaying() && keyCode == 27)
   {
    song.pause();
    }
}




function draw()

{
    
background(230,0,0)
fill(0)
rect(0, windowHeight/1.50, 500,130)
rect(1000, windowHeight/1.55, 500,50)
    
    
image(video,  windowWidth/1.8, windowHeight/2);                              //WEBCAM//                               
    
    

imageMode(CENTER)
image(backgroundImg , windowWidth/2, windowHeight/2)         //BACKGROUND//                   
    
 
    
    
    
for (var i=0; i< numFlowers; i++)                             //RED FLOWER//
{  
    push();
    translate(windowWidth/2.3,windowHeight/2.2)
    scale(1/6);

    var d = dist(
        windowWidth/2,
        windowHeight/2,
        red_FlowerPos_x[i],
        red_FlowerPos_y[i]);

    var r = 400 + (d/maxDist)*50;

    image(
        red_Flower,
        red_FlowerPos_x[i],
        red_FlowerPos_y[i],
        r,r );

    red_FlowerPos_x [i] += red_FlowerDirection_x[i];
    red_FlowerPos_y [i] += red_FlowerDirection_y[i];


    pop();
}

    
    
    
image(foregroundImg, width/2, height/2)                                 //FORGROUND//
    
    
    
    
//BW FLOWER//
push();    
translate(windowWidth/8, windowHeight/5)
scale(random(1/6, 1/5.75));  
//tint( 100,100,100,200);    
image(bw_Flower, 0 ,0,) 
pop();  
        
    
push();    
translate(windowWidth/2.5, windowHeight/2.75)
scale(random(1/16, 1/15.75));
//tint( 100,100,100,200);
image(bw_Flower, 0 ,0)   
pop(); 
    
    
push();    
translate(windowWidth/2.9, windowHeight/1.2)
scale(random(1/8, 1/7.75));
//tint( 100,100,100,200);
image(bw_Flower, 0 ,0)   
pop();  
    

push();    
translate(windowWidth/1.15, windowHeight/4)
scale(random(1/13, 1/12.75)); 
//tint( 100,100,100,200);
image(bw_Flower, 0 ,0)   
pop();  
    
    
push();    
translate(windowWidth/1.15, windowHeight/2)
scale(random(1/8, 1/7.75));
//tint( 100,100,100,200);
image(bw_Flower, 0 ,0)
//noTint()
pop();          
    
//RED FLOWER - static//
push();    
translate(windowWidth/4.8, windowHeight/1.45)
scale(1/14);
//tint(100,100,100,200);
image(red_Flower_Static, 0 ,0)
//noTint()
pop();
    

push();    
translate(windowWidth/3, windowHeight/1.9)
scale(1/37);
//tint(100,100,100,200);
image(red_Flower_Static, 0 ,0)
//noTint()
pop();       
    
    
push();    
translate(windowWidth/1.37, windowHeight/1.77)
scale(1/11.4);
//tint(100,100,100,200);
image(red_Flower_Static, 0 ,0)
//noTint()
pop();
    
    
push();    
translate(windowWidth/1.534, windowHeight/2.5)
scale(1/19.4);
//tint(100,100,100,200);
image(red_Flower_Static, 0 ,0)
//noTint()
pop();      
         
     
    
for (var i=0; i< numFlowers; i++)                                      //RED FLOWER//
{  
    push();
    translate(windowWidth/2.3, windowHeight/2.2)
    scale(1/8);

        var d = dist(
            windowWidth/2,
            windowHeight/2,
            red_FlowerPos_x[i],
            red_FlowerPos_y[i]);

        var r = 500 + (d/maxDist)*300;

        image(
            red_Flower,
            red_FlowerPos_x[i],
            red_FlowerPos_y[i],
            r,r );

        red_FlowerPos_x [i] += red_FlowerDirection_x[i];
        red_FlowerPos_y [i] += red_FlowerDirection_y[i];


        pop();


       

if(d> maxDist+4500)

   {                       
     red_FlowerPos_x [i] = windowWidth/2
     red_FlowerPos_y [i] = windowHeight/2
   }
}
           
           
   
}


function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
