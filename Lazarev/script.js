function navAnimation() {
    var nav = document.querySelector(".nav-2")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to('#nav-bt', {
            height: "26vh"
        })

        tl.to('.nav-2 h5', {
            display: "block"
        })

        tl.to(".nav-2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })

        tl.to('.nav-2 h5', {
            display: "none",
            duration: 0.1
        })

        tl.to("#nav-bt", {
            height: 0,
            duration: 0.2
        })
    })
}

navAnimation();
