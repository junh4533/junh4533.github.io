$(document).ready(function () {

    const particlesJSON = {
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 80,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": .5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 100,
                    "size": 10,
                    "duration": 1,
                    "opacity": 1,
                    "speed": .2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 1.5
                },
                "push": {
                    "particles_nb": 2
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    particlesJS("particles-about", particlesJSON);
    particlesJS("particles-skills", particlesJSON);
    particlesJS("particles-projects", particlesJSON);

    var controller = new ScrollMagic.Controller(); // initialize scrollmagic

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
            triggerElement: "#about",
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
        mouseTravel = 15,
        mouseX = 0,
        mouseY = 0;

    //set canvas to fullscreen
    starfield.width = document.body.clientWidth;
    starfield.height = document.body.clientHeight;

    var sagittarius = document.getElementById("sagittarius"),
        canvasWH = document.body.clientHeight,
        mouseDistance = 45;

    sagittarius.width = document.body.clientWidth;
    sagittarius.height = canvasWH;

    // x times a square canvasWH will give coordinate
    const star_coordinates = {
        1: [.4, .9],
        2: [.39, .8],
        3: [.234, .834],
        4: [.212, .636],
        5: [.2, .584],
        6: [.194, .396],
        7: [.336, .284],
        8: [.476, .406],
        9: [.534, .34],
        10: [.588, .368],
        12: [.456, .17],
        13: [.402, .072],
        11: [.508, .456],
        14: [.684, .32],
        15: [.744, .23],
        16: [.73, .446],
        17: [.81, .474],
        18: [.694, .588],
        19: [.74, .66],
    }

    const star_coordinates2 = {
        1: [.4, .9],
        2: [.39, .8],
        3: [.234, .834],
        4: [.212, .636],
        5: [.2, .584],
        6: [.194, .396],
        7: [.336, .284],
        8: [.476, .406],
        9: [.534, .34],
        10: [.588, .368],
        12: [.456, .17],
        13: [.402, .072],
        11: [.508, .456],
        14: [.684, .32],
        15: [.744, .23],
        16: [.73, .446],
        17: [.81, .474],
        18: [.694, .588],
        19: [.74, .66],
    }

    const sagittarius_lines = {
        1: 3,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        11: 8,
        12: 8,
        13: 12,
        14: 10,
        15: 14,
        16: 14,
        17: 16,
        18: 16,
        19: 18,
    }

    function animateCanvas(canvas, x, y, radius, saturation, lightness, interval, delay) {
        ctx = canvas.getContext("2d");
        for (var i = radius / interval; i <= radius; i += radius / interval) {
            setTimeout(function () {
                ctx.beginPath();
                ctx.arc(x, y, i, 0, 360); //draws a circle
                ctx.shadowBlur = lightness / 10;
                ctx.shadowColor = "hsl(240, " + saturation + "%, " + lightness + "%)";
                ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
                ctx.fill();
                ctx.closePath();
            }, delay * i);
        }
    }

    document.body.addEventListener("mousemove", function (e) {

        //if mouse moves the minimum x or y distance
        if (Math.abs(e.pageX - mouseX) > mouseTravel || Math.abs(e.pageY - mouseY) > mouseTravel) {
            mouseX = e.pageX;
            mouseY = e.pageY;

            animateCanvas(starfield,
                getRandom(-50, 50) + e.pageX,
                getRandom(-50, 50) + e.pageY,
                Math.random() * 2,
                getRandom(50, 100),
                getRandom(70, 100),
                3,
                500);
        }

        // check each star coordinate everytime the mouse moves 
        for (var star in star_coordinates) {
            var starX = star_coordinates[star][0] * document.body.clientWidth;
            var starY = star_coordinates[star][1] * canvasWH;

            // if mouse is within mouseDistance of star coordinate
            if (Math.abs(e.pageX - starX) <= mouseDistance && Math.abs(e.pageY - starY) <= mouseDistance) {
                animateCanvas(sagittarius,
                    starX,
                    starY,
                    8,
                    getRandom(50, 100),
                    getRandom(85, 100),
                    1,
                    0);
                // delete star so it doesn't redraw on hover
                delete star_coordinates[star];

                // check sagitarrius lines for star coordinates that are removed (hovered over)
                for (var line_coordinate in sagittarius_lines) {
                    var line_coordinate2 = sagittarius_lines[line_coordinate];
                    // if both coordinates are hovered over, form a line connecting the two
                    if (!(line_coordinate in star_coordinates) && !(line_coordinate2 in star_coordinates)) {
                        var starX1 = star_coordinates2[line_coordinate][0] * document.body.clientWidth;
                        var starY1 = star_coordinates2[line_coordinate][1] * canvasWH;
                        var starX2 = star_coordinates2[line_coordinate2][0] * document.body.clientWidth;
                        var starY2 = star_coordinates2[line_coordinate2][1] * canvasWH;
                        ctx.beginPath();
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = "hsl(240, 90%, 90%)";
                        ctx.moveTo(starX1, starY1);
                        ctx.lineTo(starX2, starY2);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }


    })

});