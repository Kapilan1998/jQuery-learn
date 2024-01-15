$(document).ready(function () {
    // $('#btn1').click(function () {       
    //     $('#p1').hide(3000);                 // hide that element
    // });

    // $('#btn2').click(function () {
    //     $('#p1').show(2000);                    // show that hided element
    // });

    // $('#btn3').click(function () {
    //     $('#p1').toggle();                      // hide that elemnt and then show elemnt
    // });

    // $('#btn4').click(function () {
    //     $('.div1').fadeOut();                   // hide elemet 
    //     $('.div2').fadeOut("slow");
    //     $('.div3').fadeOut(3000);
    // });

    // $('#btn5').click(function () {
    //     $('.div4').fadeIn();                   // show hided elemet 
    //     $('.div5').fadeIn("slow");
    //     $('.div6').fadeIn(3000);
    // });

    // $('#btn6').click(function () {
    //     $('.div7').fadeToggle();                   // show hided elemet and hide that again 
    //     $('.div8').fadeToggle("slow");
    //     $('.div9').fadeToggle(5000);
    // });

    // $('#btn7').click(function () {
    //     $('.div10').fadeTo("fast",0.15);                   // decreases the opacity
    //     $('.div11').fadeTo("slow",0.7);
    //     $('.div12').fadeTo(5000,0.2);
    // });

    // $('#flip').click(function () { 
    //     $("#panel").slideDown();
    //     // $("#panel").slideDown(3000);        // slide down after 3 seconds (appear after 3 seconds by coming downwards)
    // });

    // $('#flip').click(function () { 
    //     // $("#up").slideUp(3000);             // slide up after 3 seconds (hide after 3 seconds by going upwards)
    //     $("#up").slideUp();            
    // });

    // $('#flip').click(function () { 
    //         $("#toggle").slideToggle("slow");             // hide and visible      
    //     });

    //here all annimation will execute in same time
    // $('#annimate').click(function () {
    //     // $('#query').animate({height:"200px", width:"325px",opacity:"0.5",left:"400px"},"slow"); // here element moves to this position with annimation of given css proerties        
    //     // $('#query').animate({height:"200px", width:"325px",opacity:"0.5",left:"400px"},"slow"); // here element moves to this position with annimation of given css proerties        
    //     $('#query').animate({ height: "toggle", }, "slow"); // here element visible then hide      
    // });


    //here all annimation will execute one by one 
    // $('#annimate').click(function () {
    //     let divQuery= $('#query');
    //     divQuery.animate({ height: "250px"}, "slow");     
    //     divQuery.animate({ width: "350px"}, "fast");     
    //     divQuery.animate({ opacity: "0.6"}, "slow");     
    //     divQuery.animate({ height: "500px"}, "slow");     
    //     divQuery.animate({ width: "700px"}, "fast");     
    // });


    // here one by one annimation is executing and after height changed its background color changed using css property and disappeared using fadeOut property
    // $('#annimate').click(function () {
    //     let divQuery= $('#query');
    //     divQuery.animate({ height: "250px" }, "slow");     
    //     divQuery.animate({ width: "350px"}, "fast", function () {
    //         divQuery.css("background-color", "yellow")});     
    //     divQuery.animate({ opacity: "0.6"}, "slow");     
    //     divQuery.animate({ height: "6500px"}, "slow");     
    //     divQuery.animate({ width: "700px"}, "fast", function(){
    //         divQuery.fadeOut(3000);
    //     });     
    // });


    // here i am using call back function to execute line by line actions
    // $('#effect2').click(function () {
    //     $('#effect1').hide("slow", function () {               // here if i didn't use function, it will show alert first then after only it will hide
    //         // alert("Paragraph tag has beed hided !");
    //         $('#effect1').show("slow");
    //     });
    // });

// $('#effect4').click(function(){
// // $('#effect3').css("backgroundColor","orange").slideDown(3000).slideUp(3000);     // chaining to multiple methods
// $('#effect3').css("backgroundColor","orange").slideToggle(4000);
// });





});