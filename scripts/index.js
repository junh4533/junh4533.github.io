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

    // var starfield = document.getElementById("starfield"),
    //     ctx = starfield.getContext("2d"),
    //     mouseTravel = 15,
    //     mouseX = 0,
    //     mouseY = 0;

    // //set canvas to fullscreen
    // starfield.width = document.body.clientWidth;
    // starfield.height = document.body.clientHeight;

    // document.body.addEventListener("mousemove", function (e) {
    //     //if mouse moves the minimum x or y distance
    //     if (Math.abs(e.pageX - mouseX) > mouseTravel || Math.abs(e.pageY - mouseY) > mouseTravel) {
    //         mouseX = e.pageX;
    //         mouseY = e.pageY;

    //         var x = getRandom(-50, 50) + e.pageX,
    //             y = getRandom(-50, 50) + e.pageY,
    //             radius = Math.random() * 2,
    //             // radius = Math.random() > .99 ? Math.random() * 20 : Math.random() * 2,
    //             saturation = getRandom(50, 100), //higher range = higher chance of darker stars
    //             lightness = getRandom(70, 100); //higher range = lower chance of being 100% white

    //         ctx.beginPath();
    //         ctx.arc(x, y, radius, 0, 360); //draws a circle
    //         ctx.shadowBlur = lightness / 10;
    //         ctx.shadowColor = "white";
    //         ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
    //         ctx.fill();
    //     }

    // })


    var sagittarius = document.getElementById("sagittarius"),
        ctx = sagittarius.getContext("2d"),
        canvasWH = document.body.clientHeight,
        mouseDistance = 60;
        
    sagittarius.width = canvasWH;
    sagittarius.height = canvasWH;

    // x times a square canvasWH will give coordinate
    const star_coordinates = {
        1:[.4, .9],
        2:[.39, .8],
        3:[.234, .834],
        4:[.212, .636],
        5:[.2, .584],
        6:[.194, .396],
        7:[.336, .284],
        8:[.476, .406],
        9:[.456, .17],
        10:[.402, .072],
        11:[.508, .456],
        12:[.534, .34],
        13:[.588, .368],
        14:[.684, .32],
        15:[.744, .23],
        16:[.73, .446],
        17:[.81, .474],
        18:[.694, .588],
        19:[.74, .66],
    }

    document.body.addEventListener("mousemove", function (e) {

        for (var star in star_coordinates){
            var starX = star_coordinates[star][0] * canvasWH;
            var starY = star_coordinates[star][1] * canvasWH;
            //if mouse moves within mouseDistance of the star
            if (Math.abs(e.pageX - starX) <= mouseDistance && Math.abs(e.pageY - starY) <= mouseDistance) {
                console.log(starX);
                var radius = Math.random() * 5,
                saturation = getRandom(50, 100), //higher range = higher chance of darker stars
                lightness = getRandom(70, 100); //higher range = lower chance of being 100% white

                ctx.beginPath();
                ctx.arc(starX, starY, radius, 0, 360); //draws a circle
                ctx.shadowBlur = lightness / 10;
                ctx.shadowColor = "white";
                ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
                ctx.fill();
            }
        }

    })


    // ctx.beginPath();
    // ctx.arc(x, y, 10, 0, 360); //draws a circle
    // ctx.fillStyle = "white";
    // ctx.fill();


    // star1 = drawSagittarius(canvasWH * .4, canvasWH * .9);
    // star2 = drawSagittarius(canvasWH * .39, canvasWH * .8);
    // drawSagittarius(canvasWH * .234, canvasWH * .834);
    // drawSagittarius(canvasWH * .212, canvasWH * .636);
    // drawSagittarius(canvasWH * .2, canvasWH * .584);
    // drawSagittarius(canvasWH * .194, canvasWH * .396);
    // drawSagittarius(canvasWH * .336, canvasWH * .284);
    // drawSagittarius(canvasWH * .476, canvasWH * .406);
    // drawSagittarius(canvasWH * .456, canvasWH * .17);
    // drawSagittarius(canvasWH * .402, canvasWH * .072);
    // drawSagittarius(canvasWH * .508, canvasWH * .456);
    // drawSagittarius(canvasWH * .534, canvasWH * .34);
    // drawSagittarius(canvasWH * .588, canvasWH * .368);
    // drawSagittarius(canvasWH * .684, canvasWH * .32);
    // drawSagittarius(canvasWH * .744, canvasWH * .23);
    // drawSagittarius(canvasWH * .73, canvasWH * .446);
    // drawSagittarius(canvasWH * .81, canvasWH * .474);
    // drawSagittarius(canvasWH * .694, canvasWH * .588);
    // drawSagittarius(canvasWH * .74, canvasWH * .66);

});