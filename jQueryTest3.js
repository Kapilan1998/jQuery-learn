$(document).ready(function () {
    // $('.btn1').click(function () {
    //     // alert($('.p1').text());      // display in normal way
    //     // alert($('.p1').html());      // display with html visible tag
    //     // alert($('.name1').val());       // get value from textbox
    //     alert($('a').attr("href"));         // get url from a href tag and display the url 
    // });

    $('#btn2').click(function () {
        // $('.p2').html("<b>Here text is replaced<b>");     // set value to <p> tag with html tage like <b> 
        // $('.p2').text("Here text is replaced");     // set value to <p> tag
        // $('.name2').val("Text is added");               // set value to textbox

    });

    $('#u1').click(function () {
        // $('#p3').append(' <b> here extra text is <i> appended </i> </b>');  // add additional text after previous text inside p3 id
        $('#p3').prepend(' <b> here extra text is <i> appended </i> </b>');  // add additional text before previous text inside p3 id
    })


    // used only for have opening tags only like <input> 
    $('#btn5').click(function () {
        // $('#input5').before("<b>Enter your name </b>");  // display something before input5 id
        $('#input5').after("<b>fine </b>");  // display something after input5 id
    });

    // remove parent and child element
    $('#btn6').click(function () {
        //  $('.parent').remove();         // remove or hide that element
        //  $('body').remove();         // remove or hide whole body
        // $('.child3').remove();         // remove that elemnt has class of child3
    });

    $('.add').click(function () {
        // $('.d1').addClass('d2');    // d2 class property is added to single (d1) elemnet
        $('.d1,#d3').addClass('d2');   // d2 class property is added to multiple (d1,d3) elemnet
    });


    $('.remove').click(function () {
        // $('.d2').removeClass('d2');    // d2 class property is removed
        $('#id1,#id2').removeClass('d2');   // d2 class property is removed to multiple (id1,id2) elemnet
    });

    $('.toggle').click(function () {
        $('.d1').toggleClass('d2');    // d2 class property is added then removed after button clicked
    });


$('#show').click(function(){
    
})

});



// function fun(){
//     let text1 = "<p> Text 1</p>";
//     let text2 = $("<p></p>").text("Text 2");
//     let text3 = document.createElement("p");
//     text3.innerHTML = "Text 3";

//     $('body').append(text1,text2,text3);
// }
