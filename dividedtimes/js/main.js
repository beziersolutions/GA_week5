//$(document).ready(function()
//shorthand is this $(function()

// research this below
//jquery attr()
// slideDown()
// slideUp()
//show()
//hide()
// parent()
//siblings()#
//$this could be used as convention for jquery obj
//this.find will traverse down the dom tree
//slide up plus delay 
//addclass('active).siblings().removeClass('active)

//set at the li element so each ind section can change color

//$(document).ready(function()
$(function () {

    //hides all so form set in the default behaviour
    $('#secondary-nav-container section').hide();

    //shows correct section of onclick

    $('#primary-nav a').click(function (event) {

        var target = $(this).attr('href');
        //eg:- when $('.international a') target = '#international-drop' the href of the clicked link
        console.log('the target is ' + target);
        event.preventDefault(); //prevent the default behavior of the link onclick event

        //closes focused menu
        if ($(this).hasClass('is-active')) {
            console.log("if clause entered ");
            console.log('condition is true');
            $(target).slideUp();
            $(this).removeClass('is-active');

        } else {
            console.log("else clause entered ");
            $('#primary-nav a').removeClass('is-active');

            $(this).addClass('is-active');
            // $(this).addClass('is-active'); 
            // $(this).parent().css("background", "#666");
            $('#secondary-nav-container section').slideUp();

            $('#secondary-nav-container').show();

            $(target).slideDown();


        }

    });

});