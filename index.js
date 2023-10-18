var inPut = document.querySelectorAll("input");
var day = document.querySelectorAll("input")[0];
var month = document.querySelectorAll("input")[1];
var year = document.querySelectorAll("input")[2];
var btn = document.querySelector("svg");

var actD = new Date();

for(i = 0; i <3; i++){
    inPut[i].addEventListener("mouseover", function(){
        this.classList.add("hover");
    });

    inPut[i].addEventListener("mouseout", function(){
        this.classList.remove("hover");
    });

    inPut[i].addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
        }    
    });

    inPut[i].addEventListener("focus", function(){
        document.getElementById("y").innerHTML = "";
        document.getElementById("m").innerHTML = "";
        document.getElementById("d").innerHTML = "";
        document.querySelector(".year").classList.remove("red");
        document.querySelector(".month").classList.remove("red");
        document.querySelector(".day").classList.remove("red");
        for(i = 0; i <3; i++){
            inPut[i].classList.remove("red-out");
        }

        

    });


}


function isLeapYear(yr) {
    if ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  

  

function yearVerify(){
    if(year.value === ""){
        document.getElementById("y").innerHTML = "This Field is Required";
        document.querySelector(".year").classList.add("red");
        inPut[2].classList.add("red-out");
        return false;
    }
    
    else if(year.value > actD.getFullYear() || year.value < 1 ){
        document.getElementById("y").innerHTML = "Must be a valid year";
        document.querySelector(".year").classList.add("red");
        inPut[2].classList.add("red-out");
        return false;
    }
    

    else{
        return true;
    }
}

function monthVerify(){
    if(month.value === ""){
        document.getElementById("m").innerHTML = "This Field is Required";
        document.querySelector(".month").classList.add("red");
        inPut[1].classList.add("red-out");
        return false;
    }

    else if(month.value > 12 || month.value < 1){
        document.getElementById("m").innerHTML = "Must be a valid month";
        document.querySelector(".month").classList.add("red");
        inPut[1].classList.add("red-out");
        return false;
    }

    else{
        return true;
    }
}

function dayVerify(){
    if(day.value === ""){
        document.getElementById("d").innerHTML = "This Field is Required";
        document.querySelector(".day").classList.add("red");
        inPut[0].classList.add("red-out");
        return false;
    }        
    
    else if(month.value == 2){
        if(isLeapYear(year.value)){
            if(day.value > 29 || day.value < 1){
                document.getElementById("d").innerHTML = "Must be a valid day";
                document.querySelector(".day").classList.add("red");
                inPut[0].classList.add("red-out");
                return false;
            }

            else{
                return true;
            }
        }

        else if(day.value > 28 || day.value < 1){
            document.getElementById("d").innerHTML = "Must be a valid day";
            document.querySelector(".day").classList.add("red");
            inPut[0].classList.add("red-out");
            return false;
        }
        else{
            return true;
        }
    }
    else if(month.value == 9 || month.value == 4 || month.value == 6 || month.value == 11){
        if(day.value > 30 || day.value < 1){
            document.getElementById("d").innerHTML = "Must be a valid day";
            document.querySelector(".day").classList.add("red");
            inPut[0].classList.add("red-out");
            return false;
        }
        else{
            return true;
        }
    }
    else{
        if(day.value > 31 || day.value < 1){
            document.getElementById("d").innerHTML = "Must be a valid day";
            document.querySelector(".day").classList.add("red");
            inPut[0].classList.add("red-out");
            return false;
        }
        else{
            return true;
        }
    }

}

btn.addEventListener("click", function(){
    this.classList.add("btn-anim");

    setTimeout(function(){btn.classList.remove("btn-anim")}, 100);

    var dayV = dayVerify();
    var monthV = monthVerify();
    var yearV = yearVerify();    


    if(dayV === true && monthV === true && yearV == true){

        var d = new Date(year.value, month.value -1 , day.value);
        var difference = actD.getTime() - d.getTime();
    
        var theYear = Math.floor(difference / (1000*60*60*24*365));
        var remainder = difference % (1000*60*60*24*365);
        
        if(month.value == 2){
            if(isLeapYear(year.value)){
                var theMonth = Math.floor(remainder / (1000*3600*24 * 29));
                var remainder2 = remainder % (1000*3600*24 * 29);
            }

            else{
                var theMonth = Math.floor(remainder / (1000*3600*24 * 28));
                var remainder2 = remainder % (1000*3600*24 * 28);
            }
            
            
        }

        else if(month.value == 9 || month.value == 4 || month.value == 6 || month.value == 11){
            var theMonth = Math.floor(remainder / (1000*3600*24 *30));
            var remainder2 = remainder % (1000*3600*24 * 30);
        }

        else{
            var theMonth = Math.floor(remainder / (1000*3600*24 *31));
            var remainder2 = remainder % (1000*3600*24 * 31);
        }

        var theDay = Math.floor(remainder2 / (1000*3600*24));

        /*alert(theYear);
        alert(theMonth);    
        alert(theDay);*/

        document.querySelectorAll("span")[0].innerHTML = theYear;
        document.querySelectorAll("span")[1].innerHTML = theMonth;
        document.querySelectorAll("span")[2].innerHTML = theDay;


        
    }
});
