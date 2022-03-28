$(document).ready(function(){

    var studentarray = [0,0,0,0,0,0,0];

    $(".maingrid").children().mouseover(function(){
        $("#main").removeClass("itemselect")
        $("#main").addClass("item")
        $(this).toggleClass("item")
        $(this).toggleClass("itemselect")
    })

    $(".maingrid").children().mouseout(function(){
        $(this).toggleClass("item")
        $(this).toggleClass("itemselect")
        $("#main").addClass("itemselect")
        $("#main").removeClass("item")
    })

    $(".maingrid").children().click(function(){
        if (studentarray[0] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[0] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[0] = 0
        }
        
    })


});