

$(document).ready(function(){
    
    $("#loading .spinner").fadeOut(2000 , function(){
        
        $("#loading").fadeOut(2000 , function(){
            
            $("body").css("overflow","auto")
            
    })
    })
        })


$("#options i").click(function(){
    
    $(".color-options").toggle();
})

var lis = $("#options ul li");

lis.eq(0).css("backgroundColor","teal")
lis.eq(1).css("backgroundColor","tan")
lis.eq(2).css("backgroundColor","#09c")
lis.eq(3).css("backgroundColor","blue")
lis.eq(4).css("backgroundColor","darkred")

lis.click(function(){
    
    var bgColor =$(this).css("backgroundColor")
    $("p").css("color",bgColor)
})
