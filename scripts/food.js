$(document).ready(function () {
    // initialize scrollmagic
    var controller = new ScrollMagic.Controller();

    var fromLeftTimeline = new TimelineMax();
    var fromLeftFrom = TweenMax.from(".div1", 1, {
        opacity: 0,
        y: 1000,
        transform: "scale(0)"
    });
    var fromLeftTo = TweenMax.to(".div1", 1, {
        opacity: 1,
        y: 0,
        transform: "scale(1)"
    });
    fromLeftTimeline
        .add(fromLeftFrom)
        .add(fromLeftTo);

    new ScrollMagic.Scene({
            triggerElement: ".parent",
            offset: -100,
        })
        .setTween(fromLeftTimeline)
        .duration(400)
        //    .reverse(false)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

});