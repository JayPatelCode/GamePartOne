let playerState='idle';
const dropdown= document.getElementById('animations');
dropdown.addEventListener('change', function(e){

    playerState= e.target.value;
})
const canvas=document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width=600;
const CANVAS_HEIGHT = canvas.height=600;

const playerImage = new Image();
playerImage.src= 'shadow_dog.png';
const spriteWidth =575; //  total width of sprreadsheet that is   6876  divide by total row that is 12
const spriteHeight =523;  //total height of sprreadsheet that is 5230 divide by total row

// let frameX=0; //sx, there are 10 rows that is 0 to 9
// let frameY=1;//sy , column varies from row to row
let gameFrame=0;
const staggerFrames = 5; //this is used for slower animation, higher the no slower the animation
const spriteAnimations = [];
const animationStates=[


    {
        name:'idle',
        frames:7,

    },
    {   name:'jump',
        frames:7,



    },
    {
        name:'fall',
        frames:7,

    },
    {
        name:'run',
        frames:9,

    },
    {
        name:'dizzy',
        frames:11,

    },
    {
        name:'sit',
        frames:5,

    },
    {
        name:'roll',
        frames:7,

    },
    {
        name:'bite',
        frames:7,

    },
    {
        name:'ko',
        frames:12,

    },
    {
        name:'getHit',
        frames:4,

    }
];
animationStates.forEach((state, index)=>{

    let frames= {
        loc: [],
    } 
    for (let j = 0; j < state.frames; j++){
        let positionX=j *spriteWidth;
        let positionY=index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
  spriteAnimations[state.name] = frames;

});
console.log(spriteAnimations);



function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);  // (x,y,howmuch to clearx, how much to cleary)
    // ctx.fillRect(100,50,100,100); //(x,y,how much to fillx, how much to filly)
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); //image, source x,y,w,h, destination x, y ,w, h        
    let position= Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX=spriteWidth*position;
    let frameY=spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY , spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); //first argu is image , second is x then y and width and at last  height. here sy that is n *spriteheight that moves frame to frame in y axis . here sx that is n *spriteWidth that moves frame to frame in x axis .
    // if(gameFrame % staggerFrames == 0){
    // if(frameX < 10) frameX++;
    // else frameX = 0;
    // }
    gameFrame++;
    requestAnimationFrame(animate);


};
animate();