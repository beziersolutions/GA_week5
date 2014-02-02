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

$(function () {

    //hides all so form set in the default behaviour
    $('#secondary-nav-container section').hide();

    //shows correct section of onclick

    $('#primary-nav a').click(function (event) {

        var target = $(this).attr('href');
        //eg:- when $('.international a') target = '#international-drop' the href of the clicked link
        console.log('the target is ' + target);
        event.preventDefault(); //prevent the default behavior of the link onclick event



        if ($(this).hasClass('is-active')) {
            
            console.log('condition is true');
            $(target).slideUp();
            $(this).removeClass('is-active');
            //if class isnt present - do else statement first entry point if is on subsequent navs within session


        } else { //first entry point removes all class then adds one and hide all secondary navs 
            $('#primary-nav a').removeClass('is-active');
            $(this).addClass('is-active');
            // $(this).addClass('is-active'); //jquery checks if a class is ative -checks the state (is) and adds a class to html
            $('#secondary-nav-container section').slideUp();
            $('#secondary-nav-container').show();
            $(target).slideDown();
        }

    });

});