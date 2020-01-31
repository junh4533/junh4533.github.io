$(document).ready(function () {
    // initialize scrollmagic
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '#about', //select element for scrollmagic scene
            // duration: 300
            duration: '50%', //end after scrolling 50% of viewport height below starting point
            triggerHook: .7 //how much the user needs to scroll before triggering animation (0-1)
        }).setClassToggle('#test-h1', 'fade-in') // add in class for animations
        .addIndicators() //indicators for debugging
        .addTo(controller); //add scene to controller


    var images = [
        "../images/flipbook/jump1.jpg",
        "../images/flipbook/jump2.jpg",
        "../images/flipbook/jump3.jpg",
        "../images/flipbook/jump4.jpg",
        "../images/flipbook/jump5.jpg",
        "../images/flipbook/jump6.jpg",
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {
        curImg: 0
    };

    // create tween
    var tween = TweenMax.to(obj, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function () {
            $("#flip-img").attr("src", images[obj.curImg]); // set the image source
        }
    });

    // build scene
    new ScrollMagic.Scene({
            triggerElement: "#skills",
            duration: '60%',
            triggerHook: .6
        })
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var starfield = document.getElementById("starfield"),
        ctx = starfield.getContext("2d"),
        mouseDistance = 15,
        mouseX = 0,
        mouseY = 0;

    //set canvas to fullscreen
    starfield.width = document.body.clientWidth; 
    starfield.height = document.body.clientHeight;

    document.body.addEventListener("mousemove", function (e) {
        //if mouse moves the minimum x or y distance
        if (Math.abs(e.pageX - mouseX) > mouseDistance || Math.abs(e.pageY - mouseY) > mouseDistance) {
            mouseX = e.pageX;
            mouseY = e.pageY;

            var x = getRandom(-50, 50) + e.pageX,
                y = getRandom(-50, 50) + e.pageY,
                radius = Math.random() * 2,
                // radius = Math.random() > .99 ? Math.random() * 20 : Math.random() * 2,
                saturation = getRandom(50, 100), //higher range = higher chance of darker stars
                lightness = getRandom(70, 100); //higher range = lower chance of being 100% white

            
            // for (var i=0; i < radius/5;i++) {
            //     ctx.beginPath();
            //     ctx.arc(x, y, radius, 0, 360); //draws a circle
            //     ctx.shadowBlur = lightness / 10;
            //     ctx.shadowColor = "white";
            //     ctx.fill();
            // }
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 360); //draws a circle
            ctx.shadowBlur = lightness / 10;
            ctx.shadowColor = "white";
            ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
            ctx.fill();
        }

    })

});