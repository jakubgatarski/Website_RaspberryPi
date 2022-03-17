var IP_address = '192.168.0.110';
var url_x = 'http://'+IP_address+'/PROJECT/OneByOne/counter_x.json';
var url_y = 'http://'+IP_address+'/PROJECT/OneByOne/counter_y.json';
var url_m = 'http://'+IP_address+'/PROJECT/OneByOne/counter_middle.json';
var url_config = 'http://'+IP_address+'/PROJECT/config_test_file.json';

/**
* @brief Update plot data
*/

function updatePlot(i,j,k){
	var data_ = {
                x: i,
                y: j,
				r: k
            };
	$("#countermiddle").text(k.toString());
	chart.data.datasets[0].data.push(data_);
	chart.data.datasets[0].data.splice(0,1);	
	chart.update();
}
/**
* @brief Send HTTP GET request to IoT server
*/
function ajaxJSON() {
	$.ajax(url_x, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			x = +responseJSON.value;
	
	$.ajax(url_y, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			y = +responseJSON.value;
	
	$.ajax(url_m, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			updatePlot(x, y, +responseJSON.value);
		}	
	});
		}
	});	
		}
	});	
		
}

/**
* @brief Change IP in URL addresses
*/

function newURL(newIP){
url_x = 'http://'+newIP+'/PROJECT/OneByOne/counter_x.json';
url_y = 'http://'+newIP+'/PROJECT/OneByOne/counter_y.json';
url_m = 'http://'+newIP+'/PROJECT/OneByOne/counter_middle.json';
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
* @brief Chart initialization
*/
function chartInit()
{
	
	chartContext = $("#chart")[0].getContext('2d');

	chart = new Chart(chartContext, {
		
		type: 'scatter',

		
		data: {
			labels: 'scatter dataset',
			datasets:[{
				label: 'joystick position',
				backgroundColor: 'rgb(255, 0, 0)',
				borderColor: 'rgb(255, 0, 0)',
				data: [{
					x: 0,
					y: 0
					
				}]
			}]
		},
		// Configuration options
		options: {
			legend: {
				display: false
			},
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'y counter'
					},
					
					ticks:{ 
						suggestedMin: -40,
						suggestedMax: 40
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'x counter'
					},
					
					ticks:{ 
						suggestedMin: -40,
						suggestedMax: 40
					}
				}]
			}
		}
	});
}



$(document).ready(() => { 
	ajaxJSON_Config();
	chartInit();
	
	$("#rfrsh").click(ajaxJSON);
	//chartInit();
	
	

	
});