$(document).ready(function(){

    var studentarray = [0,0,0,0,0,0,0,0,0,0];

    // $(".maingrid").children().mouseenter(function(){
    //     if($(this)[0].id == "main"){

    //     }

    //     else{
    //     $(this).toggleClass("item")
    //     $(this).toggleClass("itemselect")
    //     var counter = 0;
    //     for (x = 0 ; x<studentarray.length; x++){
    //         if (studentarray[x] == 1) {
    //             counter = counter + 1
    //         }
    //     }
    //     if (counter == 0){
    //         $("#main").removeClass("itemselect")
    //         $("#main").addClass("item")
    //     }
    //     }      
    // })

    // $(".maingrid").children().mouseout(function(){
    //     $(this).toggleClass("item")
    //     $(this).toggleClass("itemselect") 
    //     var counter = 0;
    //     for (x = 0 ; x<studentarray.length; x++){
    //         if (studentarray[x] == 1) {
    //             counter = counter + 1
    //         }
    //     }
    //     if (counter == 0){
    //         $("#main").addClass("itemselect")
    //         $("#main").removeClass("item")
    //     }
    // })


    $(".maingrid").children().click(function(event){
        if($(this)[0].id == "main"){

        }

        else{
            console.log("click")
            var studentcounter = 0;
            for (x = 0 ; x<studentarray.length; x++){
                if (studentarray[x] == 1) {
                    studentcounter = studentcounter + 1
                }
            }
    
            if (studentcounter > 0){
                console.log("xout")
                for (x=0; x<studentarray.length; x++){
                    if (studentarray[x]==0){
                        $(".maingrid").children().eq(x).removeClass("itemmin")
                        $(".maingrid").children().eq(x).addClass("item")
                        $(".maingrid").children("name").show()
                        $("#main").addClass("itemselect")
                        // $("#main").addClass("itemmin")
                        // $("#main").addClass("item")
                    }
    
                    if (studentarray[x]==1){
                        $(".maingrid").children().eq(x).removeClass("hero")
                        // $(this).children(".presentation").css("display", "none");
                        $(this).children(".presentation").css("display", "none");
                        $(this).children(".name").show();

                        
                    }
                } 
                studentarray = [0,0,0,0,0,0,0,0,0,0]
            }
    
            else{     
                var clicked = event.target.id
                var counter = 0
                $(".maingrid").children().each((function(){ 
                    if (clicked == $(this)[0].id) {
                        if (studentarray[counter] == 0){
                            studentarray = [0,0,0,0,0,0,0,0,0,0]
                            studentarray[counter] = 1
                        }
                        else {
                            studentarray[counter] = 0
                        }
                    }
                counter = counter + 1
                }))
    
                counter = 0
                for (x=0; x<studentarray.length; x++){
                    if (studentarray[x]==0){
                        $(".maingrid").children().eq(x).removeClass("item")
                        $(".maingrid").children().eq(x).addClass("itemmin")
                        $(".maingrid").children(".name").hide()
                        $("#main").removeClass("item")
                        $("#main").removeClass("itemselect")
                        $("#main").addClass("itemmin")
                    }
    
                    if (studentarray[x]==1){
                        $(".maingrid").children().eq(x).addClass("hero")
                        $(this).children(".presentation").css("display", "flex");
                        $(this).children(".name").hide();

                        // $("#main").addClass("item")
                        // $("#main").addClass("itemselect")
                    }
                }  
            }
        }
      
    })

    // $(".student1").click(function(){
    //     if (studentarray[0] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[0] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[0] = 0

    //     }   
    // })

    // $(".student2").click(function(){
    //     if (studentarray[1] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[1] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[1] = 0
    //     }   
    // })

    // $(".student3").click(function(){
    //     if (studentarray[2] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[2] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[2] = 0
    //     }   
    // })


    // $(".student4").click(function(){
    //     if (studentarray[3] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[3] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[3] = 0
    //     }   
    // })

    // $(".student5").click(function(){
    //     if (studentarray[4] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[4] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[4] = 0
    //     }   
    // })

    // $(".student6").click(function(){
    //     if (studentarray[5] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[5] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[5] = 0
    //     }   
    // })

    // $(".student7").click(function(){
    //     if (studentarray[6] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[6] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[6] = 0
    //     }   
    // })

    // $(".student8").click(function(){
    //     if (studentarray[7] == 0){
    //         $(this).children(".name").hide();
    //         $(this).children(".presentation").css("display", "flex");
    //         studentarray[7] = 1
    //     }

    //     else{
    //         $(this).children(".name").show();
    //         $(this).children(".presentation").hide();
    //         studentarray[7] = 0
    //     }   
    // })


});