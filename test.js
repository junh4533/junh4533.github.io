// document.body.addEventListener("mousemove", mouseMoveHandler = (e) => {

        //     //if mouse moves the minimum x or y distance
        //     if (Math.abs(e.pageX - mouseX) > mouseTravel || Math.abs(e.pageY - mouseY) > mouseTravel) {
        //         mouseX = e.pageX;
        //         mouseY = e.pageY;

        //         animateCanvas(starfield,
        //             getRandom(-50, 50) + e.pageX,
        //             getRandom(-50, 50) + e.pageY,
        //             Math.random() * 2,
        //             getRandom(50, 100),
        //             getRandom(70, 100),
        //             3,
        //             500);
        //     }

        //     // check each star coordinate everytime the mouse moves 
        //     for (let star in star_coordinates) {
        //         let starX = star_coordinates[star][0] * vw;
        //         let starY = star_coordinates[star][1] * vh;

        //         // if mouse is within mouseDistance of star coordinate
        //         if (Math.abs(e.pageX - starX) <= mouseDistance && Math.abs(e.pageY - starY) <= mouseDistance) {
        //             animateCanvas(sagittarius,
        //                 starX,
        //                 starY,
        //                 8,
        //                 getRandom(50, 100),
        //                 getRandom(85, 100),
        //                 1,
        //                 0);
        //             // delete star so it doesn't redraw on hover
        //             delete star_coordinates[star];

        //             // check sagitarrius lines for star coordinates that are removed (hovered over)
        //             for (let line_coordinate in sagittarius_lines) {
        //                 let line_coordinate2 = sagittarius_lines[line_coordinate];
        //                 // if both coordinates are hovered over, form a line connecting the two
        //                 if (!(line_coordinate in star_coordinates) && !(line_coordinate2 in star_coordinates)) {
        //                     let starX1 = star_coordinates2[line_coordinate][0] * vw,
        //                         starY1 = star_coordinates2[line_coordinate][1] * vh,
        //                         starX2 = star_coordinates2[line_coordinate2][0] * vw,
        //                         starY2 = star_coordinates2[line_coordinate2][1] * vh;
        //                     ctx.beginPath();
        //                     ctx.lineWidth = 3;
        //                     ctx.strokeStyle = "hsl(240, 90%, 90%)";
        //                     ctx.moveTo(starX1, starY1);
        //                     ctx.lineTo(starX2, starY2);
        //                     ctx.stroke();
        //                     ctx.closePath();
        //                 }
        //             }
        //         }

        //         // When user finds all of the stars
        //         if (Object.keys(star_coordinates).length === 0) {
        //             console.log("Found all stars");
        //             toggleHeroText(true);
        //             toggleScroll(true); // prevents scrolling when playing game 
        //             e.currentTarget.removeEventListener(e.type, mouseMoveHandler);
        //         }

        //     }

        // });