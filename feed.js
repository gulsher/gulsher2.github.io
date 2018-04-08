// main document ready function to check if dom is loaded fully or not



$(document).ready(() => {


	$("#myModal").modal('show');
    //Function to get facebook acc details
    function getFacebookInfo(e){
      
      $("#myModal").modal('hide');

   
        var myFacebookToken = $("#tokenInput").val();


        $.ajax('https://graph.facebook.com/me?fields=name,gender,email,first_name, last_name,birthday,relationship_status,quotes,hometown,education,feed&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response.feed.data);

                    jQuery.each(response.feed.data,function(i, val) {
                        if(typeof(val.message) != "undefined"){
                           // console.log(val.message)
                           $("#feedsList").append('<p>'+val.message+'</p>');
                        }
                    });


                   
                },// success function
                
                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },// error function

                timeout:5000,// 5 seconds

                beforeSend : function(){
                    
                },// beforeSend function

                complete : function(){
                   
                }// complete function

            }//end argument list 
        );// end ajax call 

        e.preventDefault();
    }// end getFacebookInfo() function

    $("#btnShowFbDetail").on('click',getFacebookInfo);



}); // end document.ready function