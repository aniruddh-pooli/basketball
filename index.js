hpts=document.getElementById("homept")
gpts=document.getElementById("guestpt")
let homepoints = 0 
let guestpoints = 0 
function add1h(){
    homepoints+=1
    hpts.innerText = homepoints

}
function add2h(){
    homepoints+=2
    hpts.innerText = homepoints
}
function add3h(){
    homepoints+=3
    hpts.innerText = homepoints
}
function add1g(){
    guestpoints+=1
    gpts.innerText = guestpoints

}
function add2g(){
    guestpoints+=2
    gpts.innerText = guestpoints
}
function add3g(){
    guestpoints+=3
    gpts.innerText = guestpoints

}
function reset1(){
    console.log("button")
    homepoints=0
    hpts.innerText=homepoints
    guestpoints=0
    gpts.innerText=guestpoints
}