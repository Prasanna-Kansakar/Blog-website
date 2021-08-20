// clock() is used to provide current time in 12 hour format when called
function clock(){
    		var date = new Date();
    		var h = date.getHours(); // 0 - 23
    		var m = date.getMinutes(); // 0 - 59
    		var s = date.getSeconds(); // 0 - 59
    		var session = "AM";
            //If conditions to check whether variable h is eqaul to 0 
    		if(h == 0){
        	h = 12;
   			 }
            //If conditions to check whether variable h is more than 12
    		if(h > 12){
       		h = h - 12;
        	session = "PM";
    		}
            // Ternary Operator for the variables h,m and s
    		h = (h < 10) ? "0" + h : h;
    		m = (m < 10) ? "0" + m : m;
    		s = (s < 10) ? "0" + s : s;
    
    		var time = h + ":" + m + ":" + s + " " + session;
    		document.getElementById("MyClockDisplay").innerText = time;    
    		setTimeout(clock, 1000);
    
		}
		clock();