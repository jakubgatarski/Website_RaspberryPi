var IP_address = '192.168.0.110';
var url_config = 'http://'+IP_address+'/PROJECT/config_test_file.json';

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
* @brief Change IP in URL addresses
*/
function newURL(newIP){
url = 'http://'+newIP+'/projekt_strona/servermock/ledDisplay.php';
url_config = 'http://'+newIP+'/PROJECT/config_test_file.json';
}


$(document).ready(()=>{	

	ajaxJSON_Config();
	$("#postMatrix").submit(function(e) {

		e.preventDefault(); // avoid to execute the actual submit of the form.

		var form = $(this);
		var url = 'http://'+IP_address+'/projekt_strona/servermock/ledDisplay.php';
    
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