let posX = undefined
let posY = undefined
const spotlight = document.getElementById("spotlight1");
// const spotlight2 = document.getElementById("spotlight2");
// const spotlight3 = document.getElementById("spotlight3");
// const spotlight4 = document.getElementById("spotlight4");
// const spotlight5 = document.getElementById("spotlight5");
// let arr = [spotlight1,spotlight2,spotlight3,spotlight4,spotlight5]
document.addEventListener('mousemove',(event)=>{
        posX = event.clientX;
        posY = event.clientY;
        // Map mouse position to RGB values
        let width = window.innerWidth;
        let height = window.innerHeight;
        // console.log(posX,posY);
        // let spotlight = arr[0] 
        // arr.shift();
        if(posX==0 || posY<=10 || posX>width-35 || posY>height-35){
            spotlight.hidden = true;
        }
        else{
         spotlight.hidden = false;
         spotlight.style.left = `${posX}px`;
         spotlight.style.top = `${posY}px`;
        }
        // arr.push(spotlight);
        // let red = Math.round((posX / width) * 255);
        // let green = Math.round((posY / height) * 255);
        // let blue = 150; // Static blue value to maintain balance
        // document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

