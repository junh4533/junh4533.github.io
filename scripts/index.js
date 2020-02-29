$(document).ready(() => {

    const particlesConfig = {
        "particles": {
            "number": {
                "value": 7,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": ["#5f5fc2", "#250a63"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": ["#5f5fc2", "#250a63"]
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
                "value": .5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.15,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#0C0E38",
                "opacity": .3,
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
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": false
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

    const particlesConfigContact = {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 1200
                }
            },
            "color": {
                "value": "#FFFFFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": ["#5f5fc2", "#250a63"]
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
                "value": .5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#FFFFFF",
                "opacity": .5,
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
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": false
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

    particlesJS("particles-about", particlesConfig);
    particlesJS("particles-skills", particlesConfig);
    particlesJS("particles-projects", particlesConfig);
    particlesJS("particles-contact", particlesConfigContact);

    const controller = new ScrollMagic.Controller(); // initialize scrollmagic

    const images = [
        "../images/flipbook/jump1.jpg",
        "../images/flipbook/jump2.jpg",
        "../images/flipbook/jump3.jpg",
        "../images/flipbook/jump4.jpg",
        "../images/flipbook/jump5.jpg",
        "../images/flipbook/jump6.jpg",
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    let obj = {
        curImg: 0
    };

    // create tween
    let tween = TweenMax.to(obj, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: () => {
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

    let getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    const starfield = document.getElementById("starfield"),
        sagittarius = document.getElementById("sagittarius"),
        canvasHeight = document.body.clientHeight,
        canvasWidth = document.body.clientWidth,
        mouseTravel = 15,
        mouseDistance = 45;

    let mouseX = 0,
        mouseY = 0;

    //set background starfield to fullscreen
    starfield.width = canvasWidth;
    starfield.height = document.body.clientHeight;

    //set sag map to fullscreen
    sagittarius.width = canvasWidth;
    sagittarius.height = canvasHeight;

    // x times a square canvasHeight will give coordinate
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

    let animateCanvas = (canvas, x, y, radius, saturation, lightness, interval, delay) => {
        ctx = canvas.getContext("2d");
        for (let i = radius / interval; i <= radius; i += radius / interval) {
            setTimeout(() => {
                ctx.beginPath();
                ctx.arc(x, y, i, 0, 360); //draws a circle
                ctx.shadowBlur = lightness / 10;
                ctx.shadowColor = "hsl(240, " + saturation + "%, " + lightness + "%)";
                ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
                ctx.fill();
                ctx.closePath();
            }, delay * i);
        }
    };

    document.body.addEventListener("mousemove", (e) => {

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
        for (let star in star_coordinates) {
            let starX = star_coordinates[star][0] * canvasWidth;
            let starY = star_coordinates[star][1] * canvasHeight;

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
                for (let line_coordinate in sagittarius_lines) {
                    let line_coordinate2 = sagittarius_lines[line_coordinate];
                    // if both coordinates are hovered over, form a line connecting the two
                    if (!(line_coordinate in star_coordinates) && !(line_coordinate2 in star_coordinates)) {
                        let starX1 = star_coordinates2[line_coordinate][0] * canvasWidth,
                            starY1 = star_coordinates2[line_coordinate][1] * canvasHeight,
                            starX2 = star_coordinates2[line_coordinate2][0] * canvasWidth,
                            starY2 = star_coordinates2[line_coordinate2][1] * canvasHeight;
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


    $('.modal-button').on("click",
        modalContents = (e) => {
            
            modalHeading = document.getElementById('modalHeading');
            modalBody = document.getElementById('modalBody');

            console.log(e.target.id);

            switch (e.target.id.toString()) {
                case "QueueingSystem":
                    modalHeading.innerHTML = "Queueing System";
                    modalBody.innerHTML = "Test Test";
                    break;
            }
            
            
        }
    );

    // $("#contact-form").onsubmit = () => {
    //     window.location.href = "http://www.jsfiddle.net";
    //     return false;
    // };

});