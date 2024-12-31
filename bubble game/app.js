let score = 0;
let hitrn;
let timer= 60;

function makeBubble(){
    var clutter = "";
    for(let i=1;i<=270;i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

function timeinterval(){
    const time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#interval").textContent = timer
        }else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1.`
        }    
    },1000)
}

function getnewhit(){
    hitrn  = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn;
}

function increasescore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm")
    .addEventListener('click',function(e){
        let clickednum = Number(e.target.textContent)
        if(hitrn === clickednum){
            increasescore();
            makeBubble();
            getnewhit();
        }
    })

getnewhit();
timeinterval();
makeBubble();
