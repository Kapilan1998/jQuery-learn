$(document).ready(function () {
    $("#btnHide").click(function () {                           // when this button is clicked , event is executed
        $('#msg1').hide();      // hide id
        $('.msg2').hide();      // hide class
        // $('*').hide();          //hide whole web page

    });

    $("#btnShow").dblclick(function () {                    // when this button is clicked double times, event is executed
        $('#msg1').fadeIn(1);      // show id
        $('.msg2').fadeIn(1);      // show class
    });

    // $('#e1').focus(function () {
    //     // $(this).css("background-color","green");    // 1 event to change while focusing
    //     $(this).css({
    //         "background-color": "red",                  //multi event to change while focusing
    //         "font-size": "20px",
    //         "font-weight": "800",
    //         "color": "blue"
    //     });
    // });

    // $('#e1').blur(function () {
    //     alert("this input field has lost its focus");       // after user clicked outside this event is executed
    // });

    //     $('#e1').change(function(){                             // when user entered value and moves away from that input field this event is executed 
    // $(this).css("background-color","green");
    //     });

    // $('.msg2').hover(function(){
    //     $(this).css("background-color","cyan");
    // });

    //     $("div").focusin(function(){                            // while focusing( when we clicked inside that div tag it is executed)
    //         $(this).css("background-color","yellow");         
    //     });
    //     $('div').focusout(function(){                           // while out of focus( when we clicked outside that div tag it is executed)
    // $(this).css("background-color","rgb(184, 229, 243)");
    //     });

    // $('#msg1').on("dblclick",function(){            //executed when double times clicked
    //     alert("event ON");
    // })

    // let x=0;
    // $(window).resize(function () {                   
    //     $("span").text(x+=1);
    // });

    // let x = 0;
    // $('.c1').scroll(function () {           // when scrolling count increases
    //     $('#span1').text(x += 1);
    // });

    // $('input').select(function () {                     // when selecting some text, this function is executing
    //     alert("Hey you selected some text, so select function in jquery is executing");
    // });

    // $('form').submit(function () {              // executed when submit (when clicked on submit)
    //    alert('You submitted form')

    // });

    // $('.mouse').mousedown(function () {         // executed when a mouse button is pressed down over .mouse class element
    //     $('.mouseH2').text('mouse down');
    // });

    // $('.mouse').mouseup(function () {               //executed when a mouse button is released after being pressed down
    //     $('.mouseH2').text('mouse up');
    // });

    // $('.mouse').mouseenter(function () {            // executed when the mouse enters the area of .mouse class element
    //     $('.mouseH2').text('mouse enter');
    // });

    // $('.mouse').mouseleave(function () {            // executed when the mouse leaves the area of .mouse class element
    //     $('.mouseH2').text('mouse leave');
    // });

    // $('.mouse').mouseover(function () {            // executed when the mouse move over  the .mouse class element
    //     $('.mouseH2').text('mouse over');
    // });

    // $('.mouse').mouseout(function () {            // executed when the mouse moves out of .mouse class element
    //     $('.mouseH2').text('mouse out');
    // });

    //     $('.mouseMove').mousemove(function (event) {                    // to see mouse co-ordinate location
    // $('.mouseMoveSpan').text("X co-rdinate = " + event.pageX + " ,Y co-rdinate = "+event.pageY);
    //     });

    // $('#keyEvent').keydown(function () {                                    // when a key on the keyboard is pressed down
    //     $(this).css("background-color","#008B8B");
    // });

    // $('#keyEvent').keyup(function () {                                      // when a key on the keyboard is released
    //     $(this).css("background-color","#FFDEAD");
    // });

    let x = 0;
    $('#keyEvent').keypress(function () {              // when a key on the keyboard is pressed it increases count                
        $('.keyPressed').text(x++);
    });



});