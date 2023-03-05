AOS.init();
$(document).ready(function(){

    //lightbulb
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.lightbulb',
        duration: '90%'
    })
    .setClassToggle('.lightbulb','fade-in')
    .addTo(controller);

    //cards under lightbulb
    var controller1 = new ScrollMagic.Controller();
    var ourScene1 = new ScrollMagic.Scene({
        triggerElement: '.cards',
        duration: '90%'
    })
    .setClassToggle('.cards','fade-in1')
    .addTo(controller1);

    //title of recommendations
    var controller2 = new ScrollMagic.Controller();
    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '.title',
        duration: '90%'
    })
    .setClassToggle('.title','fade-in2')
    .addTo(controller2);

    //recommendation
    var controller3 = new ScrollMagic.Controller();
    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '.recommendations',
        duration: '90%'
    })
    .setClassToggle('.recommendations','fade-in3')
    .addTo(controller3);

    //about me
    var controller4 = new ScrollMagic.Controller();
    var ourScene4 = new ScrollMagic.Scene({
        triggerElement: '.about',
        duration: '90%'
    })
    .setClassToggle('.about','fade-in4')
    .addTo(controller4);

    //introduction
    var controller5 = new ScrollMagic.Controller();
    var ourScene5 = new ScrollMagic.Scene({
        triggerElement: '.intro',
        duration: '90%'
    })
    .setClassToggle('.intro','fade-in5')
    .addTo(controller5);

    //job
    var controller6 = new ScrollMagic.Controller();
    var ourScene6 = new ScrollMagic.Scene({
        triggerElement: '#job',
        duration: '90%'
    })
    .setClassToggle('#job','fade-in6')
    .addTo(controller6);
});