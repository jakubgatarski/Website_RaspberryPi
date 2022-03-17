var IP_address = '192.168.0.110';
var Sample_time = 100;
var Max_number_of_samples = 100;
var API_version = 1;

var url_1 = 'http://'+IP_address+'/PROJECT/OneByOne/accelerometer_pitch.json';
var url_2 = 'http://'+IP_address+'/PROJECT/OneByOne/accelerometer_roll.json';
var url_3 = 'http://'+IP_address+'/PROJECT/OneByOne/accelerometer_yaw.json';
var url_4 = 'http://'+IP_address+'/PROJECT/OneByOne/accelerometer_x.json';
var url_5 = 'http://'+IP_address+'/PROJECT/OneByOne/accelerometer_y.json';
var url_6 = 'http://'+IP_address+'/PROJECT/OneByOne/accelerometer_z.json';
var url_7 = 'http://'+IP_address+'/PROJECT/OneByOne/compass_north.json';
var url_8 = 'http://'+IP_address+'/PROJECT/OneByOne/compass_x.json';
var url_9 = 'http://'+IP_address+'/PROJECT/OneByOne/compass_y.json';
var url_10 = 'http://'+IP_address+'/PROJECT/OneByOne/compass_z.json';
var url_11 = 'http://'+IP_address+'/PROJECT/OneByOne/counter_middle.json';
var url_12 = 'http://'+IP_address+'/PROJECT/OneByOne/counter_x.json';
var url_13 = 'http://'+IP_address+'/PROJECT/OneByOne/counter_y.json';
var url_14 = 'http://'+IP_address+'/PROJECT/OneByOne/gyroscope_x.json';
var url_15 = 'http://'+IP_address+'/PROJECT/OneByOne/gyroscope_y.json';
var url_16 = 'http://'+IP_address+'/PROJECT/OneByOne/gyroscope_z.json';
var url_17 = 'http://'+IP_address+'/PROJECT/OneByOne/gyroscope_roll_deg.json';
var url_18 = 'http://'+IP_address+'/PROJECT/OneByOne/gyroscope_pitch_deg.json';
var url_19 = 'http://'+IP_address+'/PROJECT/OneByOne/gyroscope_yaw_deg.json';
var url_20 = 'http://'+IP_address+'/PROJECT/OneByOne/hum_.json';
var url_21 = 'http://'+IP_address+'/PROJECT/OneByOne/hum_p.json';
var url_22 = 'http://'+IP_address+'/PROJECT/OneByOne/pitch_deg.json';
var url_23 = 'http://'+IP_address+'/PROJECT/OneByOne/pitch_rad.json';
var url_24 = 'http://'+IP_address+'/PROJECT/OneByOne/pres_hpa.json';
var url_25 = 'http://'+IP_address+'/PROJECT/OneByOne/pres_mm_hg.json';
var url_26 = 'http://'+IP_address+'/PROJECT/OneByOne/roll_deg.json';
var url_27 = 'http://'+IP_address+'/PROJECT/OneByOne/roll_rad.json';
var url_28 = 'http://'+IP_address+'/PROJECT/OneByOne/temp_C_1.json';
var url_29 = 'http://'+IP_address+'/PROJECT/OneByOne/temp_C_2.json';
var url_30 = 'http://'+IP_address+'/PROJECT/OneByOne/temp_C_3.json';
var url_31 = 'http://'+IP_address+'/PROJECT/OneByOne/temp_F_1.json';
var url_32 = 'http://'+IP_address+'/PROJECT/OneByOne/temp_F_2.json';
var url_33 = 'http://'+IP_address+'/PROJECT/OneByOne/temp_F_3.json';
var url_34 = 'http://'+IP_address+'/PROJECT/OneByOne/yaw_deg.json';
var url_35 = 'http://'+IP_address+'/PROJECT/OneByOne/yaw_rad.json';

var url_config = 'http://'+IP_address+'/PROJECT/config_test_file.json';


/**
* @brief Change IP in URL addresses
*/
function newURL(newIP){
 url_1 = 'http://'+newIP+'/PROJECT/OneByOne/accelerometer_pitch.json';
 url_2 = 'http://'+newIP+'/PROJECT/OneByOne/accelerometer_roll.json';
 url_3 = 'http://'+newIP+'/PROJECT/OneByOne/accelerometer_yaw.json';
 url_4 = 'http://'+newIP+'/PROJECT/OneByOne/accelerometer_x.json';
 url_5 = 'http://'+newIP+'/PROJECT/OneByOne/accelerometer_y.json';
 url_6 = 'http://'+newIP+'/PROJECT/OneByOne/accelerometer_z.json';
 url_7 = 'http://'+newIP+'/PROJECT/OneByOne/compass_north.json';
 url_8 = 'http://'+newIP+'/PROJECT/OneByOne/compass_x.json';
 url_9 = 'http://'+newIP+'/PROJECT/OneByOne/compass_y.json';
 url_10 = 'http://'+newIP+'/PROJECT/OneByOne/compass_z.json';
 url_11 = 'http://'+newIP+'/PROJECT/OneByOne/counter_middle.json';
 url_12 = 'http://'+newIP+'/PROJECT/OneByOne/counter_x.json';
 url_13 = 'http://'+newIP+'/PROJECT/OneByOne/counter_y.json';
 url_14 = 'http://'+newIP+'/PROJECT/OneByOne/gyroscope_x.json';
 url_15 = 'http://'+newIP+'/PROJECT/OneByOne/gyroscope_y.json';
 url_16 = 'http://'+newIP+'/PROJECT/OneByOne/gyroscope_z.json';
 url_17 = 'http://'+newIP+'/PROJECT/OneByOne/gyroscope_roll_deg.json';
 url_18 = 'http://'+newIP+'/PROJECT/OneByOne/gyroscope_pitch_deg.json';
 url_19 = 'http://'+newIP+'/PROJECT/OneByOne/gyroscope_yaw_deg.json';
 url_20 = 'http://'+newIP+'/PROJECT/OneByOne/hum_.json';
 url_21 = 'http://'+newIP+'/PROJECT/OneByOne/hum_p.json';
 url_22 = 'http://'+newIP+'/PROJECT/OneByOne/pitch_deg.json';
 url_23 = 'http://'+newIP+'/PROJECT/OneByOne/pitch_rad.json';
 url_24 = 'http://'+newIP+'/PROJECT/OneByOne/pres_hpa.json';
 url_25 = 'http://'+newIP+'/PROJECT/OneByOne/pres_mm_hg.json';
 url_26 = 'http://'+newIP+'/PROJECT/OneByOne/roll_deg.json';
 url_27 = 'http://'+newIP+'/PROJECT/OneByOne/roll_rad.json';
 url_28 = 'http://'+newIP+'/PROJECT/OneByOne/temp_C_1.json';
 url_29 = 'http://'+newIP+'/PROJECT/OneByOne/temp_C_2.json';
 url_30 = 'http://'+newIP+'/PROJECT/OneByOne/temp_C_3.json';
 url_31 = 'http://'+newIP+'/PROJECT/OneByOne/temp_F_1.json';
 url_32 = 'http://'+newIP+'/PROJECT/OneByOne/temp_F_2.json';
 url_33 = 'http://'+newIP+'/PROJECT/OneByOne/temp_F_3.json';
 url_34 = 'http://'+newIP+'/PROJECT/OneByOne/yaw_deg.json';
 url_35 = 'http://'+newIP+'/PROJECT/OneByOne/yaw_rad.json';
url_config = 'http://'+newIP+'/PROJECT/config_test_file.json';
}

/**
* @brief Send HTTP GET request to IoT server
* update params from config file
*/
function ajaxJSON_Config() {
	$.ajax(url_config, {
		type: 'GET', dataType: 'json',
		success: function(responseJSON, status, xhr) {
			sampleTimeMsec = responseJSON.sampleTime;
			maxSamplesNumber = responseJSON.maxNumOfSamples;
			IP_address = responseJSON.ipAddress;
			
			$("#sampletime").text(sampleTimeMsec.toString());
			$("#samplenumber").text(maxSamplesNumber.toString());
			$("#sampleTimeInput").text(sampleTimeSec.toString());
			newURL(IP_address);

		}
	});
}


/**
* @brief Send HTTP GET request to IoT server
*/
function ajaxJSON1() {
	$.ajax(url_1, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("1.1").innerHTML = responseJSON.name;
			document.getElementById("1.2").innerHTML = responseJSON.value;
			document.getElementById("1.3").innerHTML = responseJSON.unit;
			document.getElementById("1.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON2() {
	$.ajax(url_2, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("2.1").innerHTML = responseJSON.name;
			document.getElementById("2.2").innerHTML = responseJSON.value;
			document.getElementById("2.3").innerHTML = responseJSON.unit;
			document.getElementById("2.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON3() {
	$.ajax(url_3, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("3.1").innerHTML = responseJSON.name;
			document.getElementById("3.2").innerHTML = responseJSON.value;
			document.getElementById("3.3").innerHTML = responseJSON.unit;
			document.getElementById("3.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON4() {
	$.ajax(url_4, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("4.1").innerHTML = responseJSON.name;
			document.getElementById("4.2").innerHTML = responseJSON.value;
			document.getElementById("4.3").innerHTML = responseJSON.unit;
			document.getElementById("4.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON5() {                       //5
	$.ajax(url_5, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("5.1").innerHTML = responseJSON.name;
			document.getElementById("5.2").innerHTML = responseJSON.value;
			document.getElementById("5.3").innerHTML = responseJSON.unit;
			document.getElementById("5.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON6() {                       
	$.ajax(url_6, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("6.1").innerHTML = responseJSON.name;
			document.getElementById("6.2").innerHTML = responseJSON.value;
			document.getElementById("6.3").innerHTML = responseJSON.unit;
			document.getElementById("6.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON7() {                       
	$.ajax(url_7, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("7.1").innerHTML = responseJSON.name;
			document.getElementById("7.2").innerHTML = responseJSON.value;
			document.getElementById("7.3").innerHTML = responseJSON.unit;
			document.getElementById("7.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON8() {                       
	$.ajax(url_8, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("8.1").innerHTML = responseJSON.name;
			document.getElementById("8.2").innerHTML = responseJSON.value;
			document.getElementById("8.3").innerHTML = responseJSON.unit;
			document.getElementById("8.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON9() {                       
	$.ajax(url_9, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("9.1").innerHTML = responseJSON.name;
			document.getElementById("9.2").innerHTML = responseJSON.value;
			document.getElementById("9.3").innerHTML = responseJSON.unit;
			document.getElementById("9.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON10() {
	$.ajax(url_10, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("10.1").innerHTML = responseJSON.name;
			document.getElementById("10.2").innerHTML = responseJSON.value;
			document.getElementById("10.3").innerHTML = responseJSON.unit;
			document.getElementById("10.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON11() {
	$.ajax(url_11, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("11.1").innerHTML = responseJSON.name;
			document.getElementById("11.2").innerHTML = responseJSON.value;
			document.getElementById("11.3").innerHTML = responseJSON.unit;
			document.getElementById("11.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON12() {
	$.ajax(url_12, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("12.1").innerHTML = responseJSON.name;
			document.getElementById("12.2").innerHTML = responseJSON.value;
			document.getElementById("12.3").innerHTML = responseJSON.unit;
			document.getElementById("12.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON13() {
	$.ajax(url_13, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("13.1").innerHTML = responseJSON.name;
			document.getElementById("13.2").innerHTML = responseJSON.value;
			document.getElementById("13.3").innerHTML = responseJSON.unit;
			document.getElementById("13.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON14() {
	$.ajax(url_14, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("14.1").innerHTML = responseJSON.name;
			document.getElementById("14.2").innerHTML = responseJSON.value;
			document.getElementById("14.3").innerHTML = responseJSON.unit;
			document.getElementById("14.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON15() {
	$.ajax(url_15, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("15.1").innerHTML = responseJSON.name;
			document.getElementById("15.2").innerHTML = responseJSON.value;
			document.getElementById("15.3").innerHTML = responseJSON.unit;
			document.getElementById("15.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON16() {
	$.ajax(url_16, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("16.1").innerHTML = responseJSON.name;
			document.getElementById("16.2").innerHTML = responseJSON.value;
			document.getElementById("16.3").innerHTML = responseJSON.unit;
			document.getElementById("16.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON17() {
	$.ajax(url_17, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("17.1").innerHTML = responseJSON.name;
			document.getElementById("17.2").innerHTML = responseJSON.value;
			document.getElementById("17.3").innerHTML = responseJSON.unit;
			document.getElementById("17.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON18() {
	$.ajax(url_18, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("18.1").innerHTML = responseJSON.name;
			document.getElementById("18.2").innerHTML = responseJSON.value;
			document.getElementById("18.3").innerHTML = responseJSON.unit;
			document.getElementById("18.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON19() {
	$.ajax(url_19, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("19.1").innerHTML = responseJSON.name;
			document.getElementById("19.2").innerHTML = responseJSON.value;
			document.getElementById("19.3").innerHTML = responseJSON.unit;
			document.getElementById("19.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON20() {
	$.ajax(url_20, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("20.1").innerHTML = responseJSON.name;
			document.getElementById("20.2").innerHTML = responseJSON.value;
			document.getElementById("20.3").innerHTML = responseJSON.unit;
			document.getElementById("20.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON21() {
	$.ajax(url_21, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("21.1").innerHTML = responseJSON.name;
			document.getElementById("21.2").innerHTML = responseJSON.value;
			document.getElementById("21.3").innerHTML = responseJSON.unit;
			document.getElementById("21.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON22() {
	$.ajax(url_22, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("22.1").innerHTML = responseJSON.name;
			document.getElementById("22.2").innerHTML = responseJSON.value;
			document.getElementById("22.3").innerHTML = responseJSON.unit;
			document.getElementById("22.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON23() {
	$.ajax(url_23, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("23.1").innerHTML = responseJSON.name;
			document.getElementById("23.2").innerHTML = responseJSON.value;
			document.getElementById("23.3").innerHTML = responseJSON.unit;
			document.getElementById("23.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON24() {
	$.ajax(url_24, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("24.1").innerHTML = responseJSON.name;
			document.getElementById("24.2").innerHTML = responseJSON.value;
			document.getElementById("24.3").innerHTML = responseJSON.unit;
			document.getElementById("24.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON25() {
	$.ajax(url_25, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("25.1").innerHTML = responseJSON.name;
			document.getElementById("25.2").innerHTML = responseJSON.value;
			document.getElementById("25.3").innerHTML = responseJSON.unit;
			document.getElementById("25.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON26() {
	$.ajax(url_26, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("26.1").innerHTML = responseJSON.name;
			document.getElementById("26.2").innerHTML = responseJSON.value;
			document.getElementById("26.3").innerHTML = responseJSON.unit;
			document.getElementById("26.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON27() {
	$.ajax(url_27, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("27.1").innerHTML = responseJSON.name;
			document.getElementById("27.2").innerHTML = responseJSON.value;
			document.getElementById("27.3").innerHTML = responseJSON.unit;
			document.getElementById("27.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON28() {
	$.ajax(url_28, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("28.1").innerHTML = responseJSON.name;
			document.getElementById("28.2").innerHTML = responseJSON.value;
			document.getElementById("28.3").innerHTML = responseJSON.unit;
			document.getElementById("28.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON29() {
	$.ajax(url_29, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("29.1").innerHTML = responseJSON.name;
			document.getElementById("29.2").innerHTML = responseJSON.value;
			document.getElementById("29.3").innerHTML = responseJSON.unit;
			document.getElementById("29.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON30() {
	$.ajax(url_30, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("30.1").innerHTML = responseJSON.name;
			document.getElementById("30.2").innerHTML = responseJSON.value;
			document.getElementById("30.3").innerHTML = responseJSON.unit;
			document.getElementById("30.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON31() {
	$.ajax(url_31, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("31.1").innerHTML = responseJSON.name;
			document.getElementById("31.2").innerHTML = responseJSON.value;
			document.getElementById("31.3").innerHTML = responseJSON.unit;
			document.getElementById("31.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON32() {
	$.ajax(url_32, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("32.1").innerHTML = responseJSON.name;
			document.getElementById("32.2").innerHTML = responseJSON.value;
			document.getElementById("32.3").innerHTML = responseJSON.unit;
			document.getElementById("32.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON33() {
	$.ajax(url_33, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("33.1").innerHTML = responseJSON.name;
			document.getElementById("33.2").innerHTML = responseJSON.value;
			document.getElementById("33.3").innerHTML = responseJSON.unit;
			document.getElementById("33.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON34() {
	$.ajax(url_34, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("34.1").innerHTML = responseJSON.name;
			document.getElementById("34.2").innerHTML = responseJSON.value;
			document.getElementById("34.3").innerHTML = responseJSON.unit;
			document.getElementById("34.4").innerHTML = responseJSON.sensor;
		}
	});	
}
function ajaxJSON35() {
	$.ajax(url_35, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			
			document.getElementById("35.1").innerHTML = responseJSON.name;
			document.getElementById("35.2").innerHTML = responseJSON.value;
			document.getElementById("35.3").innerHTML = responseJSON.unit;
			document.getElementById("35.4").innerHTML = responseJSON.sensor;
		}
	});	
}



function ajaxes(){
	ajaxJSON1();
	ajaxJSON2();
	ajaxJSON3();
	ajaxJSON4();
	ajaxJSON5();
	ajaxJSON6();
	ajaxJSON7();
	ajaxJSON8();
	ajaxJSON9();
	ajaxJSON10();
	ajaxJSON11();
	ajaxJSON12();
	ajaxJSON13();
	ajaxJSON14();
	ajaxJSON15();
	ajaxJSON16();
	ajaxJSON17();
	ajaxJSON18();
	ajaxJSON19();
	ajaxJSON20();
	ajaxJSON21();
	ajaxJSON22();
	ajaxJSON23();
	ajaxJSON24();
	ajaxJSON25();
	ajaxJSON26();
	ajaxJSON27();
	ajaxJSON28();
	ajaxJSON29();
	ajaxJSON30();
	ajaxJSON31();
	ajaxJSON32();
	ajaxJSON33();
	ajaxJSON34();
	ajaxJSON35();
	
}

$(document).ready(()=>{ 
	ajaxJSON_Config();	
	ajaxes();
	
	$("#refresh").click(ajaxes);
  
});