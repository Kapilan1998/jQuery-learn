$(document).ready(function(){
    $('#btn1').click(function(){
        // let text=" Details are,  <br>";

        // // text += " Width "+$('#d1').width()+" <br>";     //display width of that #d1 given in css style property = 400px
        // // text += "Height "+$('#d1').height()+" <br>";    

        //         // normal width + padding = innerWidth()
        // // text += " Width "+$('#d1').innerWidth()+" <br>";     //display width of that #d1 with addition of padding 50 px  (400+50+50 =500)
        // // text += "Height "+$('#d1').innerHeight()+" <br>";    

        //         // normal width + padding + border = outerWidth()
        // // text += " Width "+$('#d1').outerWidth()+" <br>";     //display width of that #d1 with addition of padding 50 px and border 10px  (400+50+50+10+10 =520)
        // // text += "Height "+$('#d1').outerHeight()+" <br>";   
              
        //         // normal width + padding + border + margin= outerWidth(true)
        //         text += " Width "+$('#d1').outerWidth(true)+" <br>";     //display width of that #d1 with addition of padding 50 px , border 10px ,margin 60px (400+50+50+10+10+ 60 +60 =640)
        // text += "Height "+$('#d1').outerHeight(true)+" <br>";   
        // $('#d1').html(text);

        // $('#d1').width(85).height(65);          //#d1 element height and width changes after button click 
        // $('#d1').innerWidth(250).innerHeight(100);
        $('#d1').outerWidth(350).outerHeight(180);          

    });
})