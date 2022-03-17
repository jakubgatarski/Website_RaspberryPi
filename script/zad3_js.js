var IP_address = '192.168.0.110';
var Sample_time = 100;
var Max_number_of_samples = 100;
var API_version = 1;


var url_config = 'http://'+IP_address+'/client_LAB_09/HTML/servermock/config_file.json';
/**
* @brief Change IP in URL addresses
*/
function newURL(newIP){

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

$(document).ready(()=>{ 
	ajaxJSON_Config();

	$("#IP_address_id").val("192.168.0.110");
	$("#Sample_time_id").val(100);
	$("#Max_number_of_samples_id").val(100);
	$("#API_version_id").val(1);
	
	//ajaxJSON();

	
	$("#postConfig").submit(function(e) {

		e.preventDefault(); // avoid to execute the actual submit of the form.

		var form = $(this);
		var url = '/PROJECT/config_data.php';
    
		$.ajax({
			type: "POST",
			url: url,
			data: form.serialize(), // serializes the form's elements.
			success: function(data)
			{
			   alert(data); // show response from the php script.
			}
		});
	});
  
});