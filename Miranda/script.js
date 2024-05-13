const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline()

tl.to("#page1", {
    y:"110vh",
    scale: 0.6,
    duration: 0
})

tl.to("#page1", {
    y: "20vh",
    duration: 1,
    delay:1
})

tl.to("#page1", {
    y: "0vh",
    rotate:-720,
    scale: 1,
    duration:1,
    delay:1
})

one = document.getElementById("one")
two = document.getElementById("two")
three = document.getElementById("three")
four = document.getElementById("four")

one.addEventListener("mouseover", ()=>{
    two.style.transform = "translateX(280px)";
    three.style.transform = "translateX(280px)";
    four.style.transform = "translateX(280px)";
})

one.addEventListener("mouseout", ()=>{
    two.style.transform = "translateX(0px)";
    three.style.transform = "translateX(0px)";
    four.style.transform = "translateX(0px)";
})

two.addEventListener("mouseover", ()=>{
    three.style.transform = "translateX(280px)";
    four.style.transform = "translateX(280px)";
})

two.addEventListener("mouseout", ()=>{
    three.style.transform = "translateX(0px)";
    four.style.transform = "translateX(0px)";
})

three.addEventListener("mouseover", ()=>{
    four.style.transform = "translateX(280px)";
})

three.addEventListener("mouseout", ()=>{
    four.style.transform = "translateX(0px)";
})