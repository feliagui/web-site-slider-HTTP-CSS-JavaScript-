var coordinates;
var requests = 0;

var requests_Plate = 0;
var requests_Tip = 0;



//Variables for cityChecker Classic=$3, Premium=$5, Royal=$10
var cityElem = "cityCheck";
var cityButton = "cityChecker";
var cityInput = "cityZip";

function muestra_oculta(id)
{
	if (document.getElementById)
	{ //se obtiene el id
		var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
		el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}
}

var restaurants = [];

        function OnChangeRadio (radio) {
            
            	if (radio.value==="Classic")
            	{
            		requests_Plate=3;

            	}
            	else if (radio.value==="Premium")
            	{
            		requests_Plate=5;

            	}
            	else if (radio.value==="Royal")
            	{
            		requests_Plate=10;

            	}

            	if (radio.value==="10")
            	{
            		requests_Tip=10;

            	}
            	else if (radio.value==="15")
            	{
            		requests_Tip=15;

            	}
            	else if (radio.value==="20")
            	{
            		requests_Tip=20;

            	}

		document.getElementById("demo").innerHTML = requests_Plate + (requests_Plate*requests_Tip/100);

        }


function updateCity(){
	var btn = g(cityButton);
	if (btn != null){
		
		btn.addEventListener("click", function(e){
			
			var value = g(cityInput).value;
			
			if (value != null && value == '20000'){
				g(cityElem).innerHTML = "City is available.";
				g(cityElem).className = "green";
			}
			else {
				g(cityElem).innerHTML = "City is not yet in our system.";
				g(cityElem).className += "red";
			}
			
			e.preventDefault();
		});
	}
}

//FOR TEMPLATE
function updateCity(){
	var btn = g(cityButton);
	if (btn != null){
		
		btn.addEventListener("click", function(e){
			
			var value = g(cityInput).value;
			
			if (value != null && value == '20000'){
				g(cityElem).innerHTML = "City is available.";
				g(cityElem).className = "green";
			}
			else {
				g(cityElem).innerHTML = "City is not yet in our system.";
				g(cityElem).className += "red";
			}
			
			e.preventDefault();
		});
	}
}


/*	updates the navigation bar with number
	of requests that the user has submitted.
*/
function updateRequests(){
	var elem = g("requests");
	if (elem != null){
		elem.innerHTML = "( " + requests + " )" ;
	}
}

function populateRestaurants(){
	restaurants = [
		'Applebees',
		'Bojangles',
		'O\'Charles',
		'McDonalds',
		'Red Lobster'
	];
	
	var input = g("restaurant");
	
	if (input != null){
		input.addEventListenerz("keyup", function(e){
			console.log("possible restaurants...");
			
			var value = this.value;
			console.log("value: " + value);
			
			//list possible restaurants
			for (i=0; i < restaurants.length; i++){
				var r = restaurants[i];
				if (value != null && value != "" && r.startsWith(value)){
					console.log("Restaurant: " + r);
				}
			}
			
		});
	}
	
}

function g(id){
	return document.getElementById(id);
}


function loginUser(){
	//Check for Web Storage API support
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
	} else {
		// Sorry! No Web Storage support..
	}
	
	
	if (localStorage.getItem("address_state") == null){
		var username = "username";
		var email = "user@example.com";
		var phone = "1234567890";
		var address_street = "123 Main Street Suite 205";
		var address_city = "Reston";
		var address_state = "Virginia";
		var address_zipcode = "20190";
		
		localStorage.setItem("address_street", address_street);
		localStorage.setItem("address_city", address_city);
		localStorage.setItem("address_state", address_state);
		localStorage.setItem("address_zipcode", address_zipcode);
		localStorage.setItem("username", username);
		localStorage.setItem("phone", phone);
		localStorage.setItem("email", email);
		localStorage.setItem("username", username);
	} else {
		//localStorage.address = null;
		//localStorage.removeItem("user");
		
		var address = localStorage.getItem("address_street");
		
		var elem = g("address");
		
		if (elem != null){
			elem.value = address;
		} else {
			//do nothing
			//more than likely this method was executed on another page
			//or the element id is a different name
		}
		
	}
}


updateRequests();
updateCity();
populateRestaurants();
loginUser();


var bannerStatus = 1;
	var bannerTimer = 5000;
    var anchoR = "-1200px";
    var anchoL = "1200px";
    

	window.onload = function() {
       	
       	muestra_oculta('contenido_banner');

        bannerLoop();  

        var startBannerLoop = setInterval(function() {
            bannerLoop();
            }, bannerTimer);
        // on mouse over loop stops
        document.getElementById("main-banner").onmouseover = function() {
            clearInterval(startBannerLoop);
        },
        // on mouse out it restarts sliding to the right
        document.getElementById("main-banner").onmouseout = function() {
        startBannerLoop = setInterval(function() {
            bannerLoop();
            }, bannerTimer);
        }
        // on click on the left arrow on the slider it slides back
        document.getElementById("imgbanbtn-prev").onclick = function() {
            clearInterval(startBannerLoop);
            bannerLoop();
           
        }
        // on click on the right arrow on the slider it slides forward
        document.getElementById("imgbanbtn-next").onclick = function() {
           if (bannerStatus == 3) { bannerStatus=1; //helado reg papa
           bannerLoop();
           }
           else if (bannerStatus == 2) { bannerStatus=3; 
           bannerLoop();
           }
           else if (bannerStatus == 1) { bannerStatus=2; 
           bannerLoop();
           }
        }

	
	}
	
	

function bannerLoop() {
    if (bannerStatus === 1) {  
        console.log("primero");
        setTimeout(function() {
            document.getElementById("helado").style.opacity="0"; 
        }, 1000);
        setTimeout(function() {
            document.getElementById("cebolla").style.right=anchoL;
            document.getElementById("cebolla").style.zIndex="1"; 
            document.getElementById("helado").style.right=anchoR; 
            document.getElementById("helado").style.zIndex="0"; 
            document.getElementById("papa").style.right="0px"; 
            document.getElementById("papa").style.zIndex="3"; 
        }, 500);
       setTimeout(function() {
            document.getElementById("helado").style.opacity="1"; 
        }, 1000);
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        console.log("segundo");
        setTimeout(function() {
            document.getElementById("cebolla").style.opacity="0"; 
        }, 1000);
        setTimeout(function() {
            document.getElementById("cebolla").style.right=anchoR;
            document.getElementById("cebolla").style.zIndex="0"; 
            document.getElementById("helado").style.right="0px"; 
            document.getElementById("helado").style.zIndex="3"; 
            document.getElementById("papa").style.right=anchoL; 
            document.getElementById("papa").style.zIndex="0"; 
        }, 500);
       setTimeout(function() {
            document.getElementById("cebolla").style.opacity="1"; 
        }, 1000);
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {
        console.log("tercero");
        setTimeout(function() {
            document.getElementById("papa").style.opacity="0"; 
        }, 1000);
        setTimeout(function() {
            document.getElementById("cebolla").style.right="0px";
            document.getElementById("cebolla").style.zIndex="3"; 
            document.getElementById("helado").style.right=anchoL; 
            document.getElementById("helado").style.zIndex="0"; 
            document.getElementById("papa").style.right=anchoR; 
            document.getElementById("papa").style.zIndex="0"; 
        }, 500);
       setTimeout(function() {
            document.getElementById("papa").style.opacity="1"; 
        }, 1000);
        bannerStatus = 1;
    }

}


