/*

array of images
$(button)on(click), function(){
//do stuff on click
}

manpulate the image with the attr function

bonus
score each imge and add the score using the append function

example code
var imagePath = 'images/'
var index = 1

$(.btn-skip).on('click')
var = (/"src=1"images/image.jpg")

$('#image-to-vote-on').attr('src', imagePath + 'food' + '.jpg')
})

*/


$(function () {

    //variables
    var imagePath = "images/";
    var ext = ".jpg";
    var i = 0;
    var food = ["food1", "food2", "food3", "food4", "food5", "food6", "food7", "food8"];
    var foodReverse = ["food1", "food2", "food3", "food4", "food5", "food6", "food7", "food8"];
    foodReverse.reverse();
    console.log("reversed " + foodReverse);
    var b = 0;


    $("#skip").click(function () {



        i = (i + 1) % food.length;


        $("#image-to-vote-on").attr('src', imagePath + food[i] + ext);
        console.log("next image " + food[i]);

    });


    $("#back").click(function () {



        b = (b + 1) % foodReverse.length;


        $("#image-to-vote-on").attr('src', imagePath + foodReverse[b] + ext);
        console.log("previous image  " + foodReverse[b]);


    });


    /*


    // <img id="image-to-vote-on" src="images/food1.jpg">
    //<input type="button" class="btn" value="Skip">
    $("#skip").click(function() {
        var i = 0;
        $("#image-to-vote-on").attr('src', nextImage(i++) );

        
    }); */


});