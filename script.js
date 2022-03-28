$(document).ready(function(){

    var studentarray = [0,0,0,0,0,0,0,0];

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

    $(".student1").click(function(){
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

    $(".student2").click(function(){
        if (studentarray[1] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[1] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[1] = 0
        }   
    })

    $(".student3").click(function(){
        if (studentarray[2] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[2] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[2] = 0
        }   
    })


    $(".student4").click(function(){
        if (studentarray[3] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[3] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[3] = 0
        }   
    })

    $(".student5").click(function(){
        if (studentarray[4] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[4] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[4] = 0
        }   
    })

    $(".student6").click(function(){
        if (studentarray[5] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[5] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[5] = 0
        }   
    })

    $(".student7").click(function(){
        if (studentarray[6] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[6] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[6] = 0
        }   
    })

    $(".student8").click(function(){
        if (studentarray[7] == 0){
            $(this).children(".name").hide();
            $(this).children(".presentation").css("display", "flex");
            studentarray[7] = 1
        }

        else{
            $(this).children(".name").show();
            $(this).children(".presentation").hide();
            studentarray[7] = 0
        }   
    })


});