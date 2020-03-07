$(document).ready(() => {

    const circleImg = document.getElementById("circle-img");
    console.log(circleImg.offsetWidth);
    circleImg .offsetWidth = "100%";
    circleImg.offsetHeight = circleImg.clientWidth;
    console.log(circleImg.offsetHeight);

    const particlesConfig = {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 2500
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
                    "opacity_min": .3,
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
                "value": 35,
                "density": {
                    "enable": true,
                    "value_area": 1500
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
                "value": .3,
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
                "opacity": .2,
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
    // particlesJS("particles-skills", particlesConfig);
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

    let obj = {
        curImg: 0
    };

    // create tween for table tennis image animation
    let TTtween = TweenMax.to(obj, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: () => {
            $("#flip-img").attr("src", images[obj.curImg]); // set the image source
        }
    });

    new ScrollMagic.Scene({
            triggerElement: "#about",
            duration: '60%',
            triggerHook: .6
        })
        .setTween(TTtween)
        .addIndicators({
            name: "table tennis"
        })
        .addTo(controller);

    const vw = document.body.clientWidth;
    const vh = document.body.clientHeight;

    const headerSlideIn = (header, easing) => {
        return TweenMax.fromTo(header, 1, {
            translateX: -(vw / 4),
            opacity: 0
        }, {
            translateX: 0,
            opacity: 1,
            ease: easing
        })
    };

    ////////////////////// skills section //////////////////////

    const skillsEasing = "circ.inOut";

    let skillsTweenTimeline = new TimelineMax().add([
        headerSlideIn("#skills-header", skillsEasing)
    ], 0).add([
        // hexagon rotate in  
        TweenMax.fromTo(".hexagon", 1, {
            translateX: -(vw / 2),
            opacity: 0
        }, {
            rotate: 450,
            translateX: 0,
            opacity: 1,
            ease: skillsEasing
        })
    ], 0.5).add([
        // hexagon description slide in to left
        headerSlideIn(".hexagon-description", skillsEasing)
    ], 0.5).add([
        // profile picture slide in to right
        TweenMax.fromTo(".slide-to-right", 1, {
            translateX: -(vw / 4),
            opacity: 0
        }, {
            translateX: 0,
            opacity: 1,
            ease: skillsEasing
        })
    ], 1.5).add([
        // skills level slide in to left
        TweenMax.fromTo(".slide-to-left", 1, {
            translateX: (vw / 4),
            opacity: 0
        }, {
            translateX: 0,
            opacity: 1,
            ease: skillsEasing
        }),
    ], 1.5).add([
        // progress bar expand
        TweenMax.fromTo(".progress-bar", 1, {
            scaleX: 0
        }, {
            scaleX: 1,
            ease: skillsEasing
        }),
    ], 2);

    new ScrollMagic.Scene({
            triggerElement: "#skills",
            duration: 0,
        })
        .setTween(skillsTweenTimeline)
        // .addIndicators({
        //     name: "skills"
        // })
        .addTo(controller);

    ////////////////////// end skills section //////////////////////

    ////////////////////// Projects section //////////////////////

    const projectsEasing = "circ.inOut";

    const projectsTweenTimeline = new TimelineMax().add(
        TweenMax.fromTo([".project-image"], 1, {
            scale: 0,
            opacity: 0,
            translateY: (vh / 2)
        }, {
            scale: 1,
            opacity: 1,
            translateY: 0,
            ease: projectsEasing
        })
    )

    new ScrollMagic.Scene({
            triggerElement: "#projects",
            duration: 0,
        })
        .setTween(projectsTweenTimeline)
        // .addIndicators({
        //     name: "projects"
        // })
        .addTo(controller);

    ////////////////////// End Projects section //////////////////////

    ////////////////////// Contact section //////////////////////

    const contactEasing = "power2.inOut";

    const contactTweenTimeline = new TimelineMax().add(
        TweenMax.fromTo(["#contact-header"], 1, {
            scale: 0,
            opacity: 0,
            translateY: -(vh / 5)
        }, {
            scale: 1,
            opacity: 1,
            translateY: 0,
            ease: contactEasing
        })
    ).add([
            TweenMax.fromTo(["#contact-form"], 1, {
                scale: 0,
                opacity: 0,
                translateY: -(vh / 5)
            }, {
                scale: 1,
                opacity: 1,
                translateY: 0,
                ease: contactEasing
            })
        ], 0 //add tween 0 seconds after previous tween
    ).add([
        TweenMax.fromTo([".contact-icons"], 1, {
            scale: 0,
            opacity: 0,
            translateX: -(vw / 5)
        }, {
            scale: 1,
            opacity: 1,
            translateX: 0,
            ease: contactEasing
        })
    ], 1).add([
        TweenMax.fromTo(["footer"], 1, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: contactEasing
        })
    ], 0.5);

    new ScrollMagic.Scene({
            triggerElement: "#contact",
            duration: 0,
        })
        .setTween(contactTweenTimeline)
        // .addIndicators({
        //     name: "contact"
        // })
        .addTo(controller);

    ////////////////////// End Projects section //////////////////////

    // randomize star appearance on mouse move
    let getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    };

    const starfield = document.getElementById("starfield"),
        sagittarius = document.getElementById("sagittarius"),
        mouseTravel = 15,
        mouseDistance = 45;

    let mouseX = 0,
        mouseY = 0;

    //set background starfield to fullscreen
    starfield.width = vw;
    starfield.height = vh;

    //set sag map to fullscreen
    sagittarius.width = vw;
    sagittarius.height = vh;

    // x times a square vh will give coordinate
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

        let drawStars = (i) => {
            ctx.beginPath();
            ctx.arc(x, y, i, 0, 360); //draws a circle
            ctx.shadowBlur = lightness / 10;
            ctx.shadowColor = "hsl(240, " + saturation + "%, " + lightness + "%)";
            ctx.fillStyle = "hsl(240, " + saturation + "%, " + lightness + "%)";
            ctx.fill();
            ctx.closePath();
        }

        let runOnce = false; //temp variable to let the initial star draw

        for (let i = radius / interval; i <= radius; i += radius / interval) {
            if (runOnce == false) {
                drawStars(i);
                runOnce = true;
            }
            setTimeout(() => {
                drawStars(i);
            }, delay * i);
        }
    };

    //////////////////////////// STARFIELD ////////////////////////////

    document.body.addEventListener("mousemove", function handler(e) {

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
            let starX = star_coordinates[star][0] * vw;
            let starY = star_coordinates[star][1] * vh;

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
                        let starX1 = star_coordinates2[line_coordinate][0] * vw,
                            starY1 = star_coordinates2[line_coordinate][1] * vh,
                            starX2 = star_coordinates2[line_coordinate2][0] * vw,
                            starY2 = star_coordinates2[line_coordinate2][1] * vh;
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

            // When user finds all of the stars
            if (Object.keys(star_coordinates).length === 0) {
                console.log("Found all stars");
                e.currentTarget.removeEventListener(e.type, handler);
            }

        }

    });

    const addText = (heading, subheading, description) => {
        const modalBody = document.getElementById('modal-body'),
            modalProjectHeading = '<h3 id="modalProjectHeading">' + heading + '</h3>',
            modalProjectSubHeading = '<h5 id="modalProjectSubHeading">' + subheading + '</h5>',
            modalProjectDescription = '<p id="modalProjectDescription">' + description + '</p>',
            closeButton = '<button type="button" class="close" data-dismiss="modal">&times;</button>';

        modalBody.insertAdjacentHTML('beforeend', modalProjectHeading);
        modalBody.insertAdjacentHTML('beforeend', modalProjectSubHeading);
        modalBody.insertAdjacentHTML('beforeend', "<hr>");
        modalBody.insertAdjacentHTML('beforeend', modalProjectDescription);
        modalBody.insertAdjacentHTML('beforeend', closeButton);
    }

    const appendProjectImages = (parentFolder, images) => {
        // Append project images
        for (let image of images) {

            let slideImg = '<div class="carousel-item">' +
                '<img class="w-100 h-100" src="images/projects/' +
                parentFolder + '/' + image + '.png"' + ' alt="' + image + '">' +
                '</div>';

            document.getElementById("projectSlides").insertAdjacentHTML('beforeend', slideImg);
        }

        // add class "active" to ONLY the first slide of the carousel
        document.getElementById("projectSlides").firstElementChild.classList.add("active");
    }

    const addWebIcon = (link) => {
        const icon =
            '<a href="' + link + '" target = "_blank">' +
            '<i class="fas fa-globe-americas mr-2"></i>' +
            '</a>';

        document.getElementById("modal-body").insertAdjacentHTML('beforeend', icon);
    }

    const addGithubIcon = (link) => {
        const icon =
            '<a href="' + link + '" target = "_blank">' +
            '<i class="fab fa-github mr-2"></i>' +
            '</a>';

        document.getElementById("modal-body").insertAdjacentHTML('beforeend', icon);
    }

    //////////////////////////// PROJECTS MODAL ////////////////////////////
    $('.modal-button').on("click",
        modalContents = (e) => {

            // reset existing images/text from the carousel
            document.getElementById("projectSlides").innerHTML = '';
            document.getElementById("modal-body").innerHTML = ''

            let images,
                heading,
                subHeading,
                desc;

            switch (e.target.id.toString()) {

                case "QueueingSystem":
                    images = ["issue", "swipe", "text", "wait", "order", "order_video", "order_video2", "queue", "portal", "dashboard", "customize", "reports"]
                        heading = "Queueing System",
                        subHeading = "Queue Management and Appointment Scheduling",
                        desc = "Managing long lines of customers with pen and paper can be a daunting task. With a queueing system, customers can schedule an appointment and receive status updates with ease.";

                    appendProjectImages("queueing", images);
                    addText(heading, subHeading, desc);

                    break;
                case "FireDrop":
                    images = ["home"],
                        heading = "Fire Drop",
                        subHeading = "Online Sneaker Marketplace",
                        desc = "FireDrop is a static website with front-end form validation. I created this as my final project for a web design class at Baruch.";

                    appendProjectImages("firedrop", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/firedrop");
                    addWebIcon("firedrop-master/index.html");

                    break;
                case "AscendBaruch":
                    images = ["home", "about", "committees", "eboard"],
                        heading = "Ascend Baruch",
                        subHeading = "Pan-Asian Student Organization",
                        desc = "Ascend Baruch's mission is to be the premier professional organization dedicated to enabling its members, business partners and the community to leverage the leadership and global business potential of Pan-Asians.";

                    appendProjectImages("ascend", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/ascend");
                    addWebIcon("http://www.ascendbaruch.org/");

                    break;
                case "EZDoctDjango":
                    images = ["home", "dashboard", "profile", "add_user", "search_appointment", "schedule_appointment", "doctor_dashboard", "doctor_appointments", "patient", "django"],
                        heading = "EZDoct - Django",
                        subHeading = "Appointment Scheduling",
                        desc = "After learning the basics of client and server side development, I decided to use a more modern development stack improve upon the EZDoct app I've built previously.";

                    appendProjectImages("ezdoct_django", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/masters");

                    break;
                case "mediaManagement":
                    images = ["login", "admin", "add_tv", "configure"],
                        heading = "Baruch Media Management - Django",
                        subHeading = "Video Streaming",
                        desc = "This app was created for Baruch's marketing team so they can easily upload, delete, and manage Baruch's promotional videos.";

                    appendProjectImages("media_management", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/masters");

                    break;
                case "EZDoctPHP":
                    images = ["doctor", "assistant", "doctor", "patient", "db", "xampp"],
                        heading = "EZDoct - PHP",
                        subHeading = "Appointment Scheduling",
                        desc = "One of the first web application I've created. I was beginning to understand how fullstack development involves front end UI/UX design and backend database engineering.";

                    appendProjectImages("ezdoct_php", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/ezdoc");

                    break;
                case "BaruchDonorPHP":
                    images = ["preview", "home", "view_donors", "view_pc"],
                        heading = "Baruch Donor",
                        subHeading = "Baruch Donor Appreciation",
                        desc = "Baruch decided to honor their supporters by adding their names to desktop backgrounds across the computer labs. This application manages donor information and automatically generates desktop backgrounds.";

                    appendProjectImages("baruch_donor", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/Baruch_Donor");

                    break;
                case "arduinoSmarthome":
                    images = ["entire_system", "lcd", "mockup"],
                        heading = "Arduino Smarthome",
                        subHeading = "All in One RFID Door Lock",
                        desc = "During my last semester of high school, I had the opportunity to research any one programming language of my choice. Rather than limiting myself to only software development, I decided to build a smarthome system using the Arduino platform.";

                    appendProjectImages("arduino_smarthome", images);
                    addText(heading, subHeading, desc);
                    addGithubIcon("https://github.com/junh4533/independent_study-arduino");

                    break;
            }


        }
    );

    // $("#contact-form").onsubmit = () => {
    //     window.location.href = "http://www.jsfiddle.net";
    //     return false;
    // };

});