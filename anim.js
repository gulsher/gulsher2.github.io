$(document).ready(() =>{

	$("#myModal").modal('show');


function getFacebookInfo(e){

	 $("#myModal").modal('hide');

      
      
      
   
        var myFacebookToken = $("#tokenInput").val();


        $.ajax('https://graph.facebook.com/me?fields=name,gender,email,first_name, last_name,birthday,relationship_status,quotes,hometown,education,feed,cover,picture.type(large)&access_token='+myFacebookToken,{
        	 success : function(response){
        	 	console.log(response);

        	 	$('#userName').append(response.name);

            $('#favouritrQuote').append(response.quotes);

            $('#EmailId').append(response.email);

            $('#Gender').append(response.gender);

            $('#Dob').append(response.birthday);

            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

            $('#cover').css('background-image', 'url(' + response.cover.source + ')');


        	 	  },// success function
        	 	  error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },// error function

                timeout:5000,// 5 seconds

               

            }//end argument list 
        );// end ajax call 

        e.preventDefault();
    }// end getFacebookInfo() function
    $("#btnShowFbDetail").on('click',getFacebookInfo);


 


   
})