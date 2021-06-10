
function updateRate() 
{
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
	
    var rateval = document.getElementById("rate").value;
    document.getElementById("result").innerHTML=interest;
	
	
	document.getElementById("rate_val").innerHTML=rate;
	/*
	document.getElementById("val1").innerHTML=principal;
	document.getElementById("val2").innerHTML=rate;
	document.getElementById("val3").innerHTML=interest*principal;
	document.getElementById("val4").innerHTML=year; */
	
	document.getElementById("val1").innerHTML="If you deposit <b>"+principal+"</b>,";
	document.getElementById("val2").innerHTML="at an interest rate of <b>"+rate+"</b>,";
	document.getElementById("val3").innerHTML="You will receive an amount of <b>"+interest*principal+"</b>,";
	document.getElementById("val4").innerHTML="in the year <b>"+years+"</b>";
	
	
	
	
	
	
	
}