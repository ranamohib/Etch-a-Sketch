let colors = ["#B7D3F2","#AFAFDC","#8A84E2","#84AFE6","#79BEEE"]
let condt = "black";
const cWidth = "500px";
const cHeight = cWidth;
let boxNo = 10;
const container = document.querySelector("#container");
container.style.width = cWidth;
container.style.height = cHeight;
function brush(e){
    color = colors[Math.floor(Math.random()*(colors.length-1))];
    if(condt === "rainbow")
    e.target.style.backgroundColor = color;
    if(condt === "erase")
    e.target.style.backgroundColor = "white";
    if(condt === "black")
    e.target.style.backgroundColor = "black";
}
function randomColor(){
    condt = "rainbow";
}

function eraser(e){
    condt = "erase";
}
function black(e){

    condt = "black";
}
function highLight(e){

}

function createCanvas(gridSize){
    let boxWidth = 500/gridSize+"px";
    let boxHeight = 500/gridSize+"px";
    for(let k=0;k<gridSize;k++){

        for(let i=0;i<gridSize;i++){
            let gridBox = document.createElement("div");
            gridBox.style.height = boxHeight;
            gridBox.style.width = boxWidth;
            gridBox.classList.add("gridBox");
            gridBox.addEventListener("mouseover",brush)
            container.appendChild(gridBox);
           
        }
        let br = document.createElement("br");
        container.appendChild(br);
    }

}
function clearCanvas(){
    let gridBoxes = document.querySelectorAll(".gridBox");
    
    gridBoxes.forEach((box) =>{
        box.style.backgroundColor = "white";
    });
}
function resize(){

    let gridSize = prompt("Please enter the number for grid boxes:")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let boxWidth = 500/gridSize+"px";
    let boxHeight = 500/gridSize+"px";
    for(let k=0;k<gridSize;k++){

        for(let i=0;i<gridSize;i++){
            let gridBox = document.createElement("div");
            gridBox.style.height = boxHeight;
            gridBox.style.width = boxWidth;
            gridBox.classList.add("gridBox");
            gridBox.addEventListener("mouseover",brush)
            container.appendChild(gridBox);
           
        }
        let br = document.createElement("br");
        container.appendChild(br);
    }
}
createCanvas(boxNo);
