var IP_address = '192.168.0.110';
var sampleTimeSec = 0.1;                  ///< sample time in sec
var sampleTimeMsec = 1000*sampleTimeSec;  ///< sample time in msec
var maxSamplesNumber = 100;               ///< maximum number of samples

var xdata; ///< x-axis labels array: time stamps
var ydata1; ///< y-axis data array: random value
var ydata2; ///< y-axis data array: random value
var ydata3;
var lastTimeStamp; ///< most recent time stamp 

var chartContext;  ///< chart context i.e. object that "owns" chart
var chart_1;         ///< Chart.js object
var chart_2;         ///< Chart.js object
var chart_3;

var timer; ///< request timer


var url_t = 'http://'+IP_address+'/PROJECT/OneByOne/temp_C_1.json';		//temperature json data
var url_p = 'http://'+IP_address+'/PROJECT/OneByOne/pres_hpa.json'; 		//pressure json data
var url_h = 'http://'+IP_address+'/PROJECT/OneByOne/hum_p.json';			//humidity json data
var url_config = 'http://'+IP_address+'/PROJECT/config_test_file.json';




/**
* @brief Add new value to next data point.
* @param y New y-axis value 
*/
function addData(y1, y2, y3){
	if(ydata1.length  > maxSamplesNumber || ydata2.length  > maxSamplesNumber || ydata3.length  > maxSamplesNumber)
	{
		removeOldData();
		lastTimeStamp += sampleTimeSec;
		xdata.push(lastTimeStamp.toFixed(4));
	}
	ydata1.push(y1);
	ydata2.push(y2);
	ydata3.push(y3);
	chart_1.update();
	chart_2.update();
	chart_3.update();
}

/**
* @brief Remove oldest data point.
*/
function removeOldData(){
	xdata.splice(0,1);
	ydata1.splice(0,1);
	ydata2.splice(0,1);
	ydata3.splice(0,1);
}

/**
* @brief Start request timer
*/
function startTimer(){
	timer = setInterval(ajaxJSON, sampleTimeMsec);
}

/**
* @brief Stop request timer
*/
function stopTimer(){
	clearInterval(timer);
}

/**
* @brief Change IP in URL addresses
*/

function newURL(newIP){
url_t = 'http://'+newIP+'/PROJECT/OneByOne/temp_C_1.json';		//temperature json data
url_p = 'http://'+newIP+'/PROJECT/OneByOne/pres_hpa.json'; 		//pressure json data
url_h = 'http://'+newIP+'/PROJECT/OneByOne/hum_p.json';			//humidity json data
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
function ajaxJSON() {
	$.ajax(url_t, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			temperature = +responseJSON.value;
	$.ajax(url_p, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			pressure = +responseJSON.value;		
	$.ajax(url_h, {
		type: 'GET', dataType: 'json', 
		success: function(responseJSON, status, xhr) {
			addData(temperature, pressure, +responseJSON.value);
		}	
	});
		}
	});	
		}
	});	
}

/**
* @brief Chart initialization
*/
function chartInit()
{
	
	// array with consecutive integers: <0, maxSamplesNumber-1>
	xdata = [...Array(maxSamplesNumber).keys()]; 
	// scaling all values ​​times the sample time 
	xdata.forEach(function(p, i) {this[i] = (this[i]*sampleTimeSec).toFixed(4);}, xdata);

	// last value of 'xdata'
	lastTimeStamp = +xdata[xdata.length-1]; 

	// empty array
	ydata1 = []; 
	ydata2 = []; 
	ydata3 = []; 

	// get chart context from 'canvas' element
	chartContext_1 = $("#chart_1")[0].getContext('2d');
	chartContext_2 = $("#chart_2")[0].getContext('2d');
	chartContext_3 = $("#chart_3")[0].getContext('2d');


	chart_1 = new Chart(chartContext_1, {
		// The type of chart: linear plot
		type: 'line',

		// Dataset: 'xdata' as labels, 'ydata' as dataset.data
		data: {
			labels: xdata,
			datasets: [{
				fill: false,
				label: 'temperature',
				backgroundColor: 'rgb(255, 0, 0)',
				borderColor: 'rgb(255, 0, 0)',
				data: ydata1,
				lineTension: 0
			}
			]
		},

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'temperature [*C]' 
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Time [s]'
					}
				}]
			}
		}
	});
	
	chart_2 = new Chart(chartContext_2, {
		// The type of chart: linear plot
		type: 'line',

		// Dataset: 'xdata' as labels, 'ydata' as dataset.data
		data: {
			labels: xdata,
			datasets: [
			{
				fill: false,
				label: 'pressure',
				backgroundColor: 'rgb(0, 255, 0)',
				borderColor: 'rgb(0, 255, 0)',
				data: ydata2,
				lineTension: 0
			}
			]
		},

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
					labelString: 'pressure [hPa]' 
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Time [s]'
					}
				}]
			}
		}
	});
	
		chart_3 = new Chart(chartContext_3, {
		// The type of chart: linear plot
		type: 'line',

		// Dataset: 'xdata' as labels, 'ydata' as dataset.data
		data: {
			labels: xdata,
			datasets: [
			{
				fill: false,
				label: 'humidity',
				backgroundColor: 'rgb(0, 0, 255)',
				borderColor: 'rgb(0, 0, 255)',
				data: ydata3,
				lineTension: 0
			}
			]
		},

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'humidity [%]' 
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Time [s]'
					}
				}]
			}
		}
	});
	
	ydata1 = chart_1.data.datasets[0].data;
	ydata2 = chart_2.data.datasets[0].data;
	ydata3 = chart_3.data.datasets[0].data;
	
	xdata = chart_1.data.labels;
	xdata = chart_2.data.labels;
	xdata = chart_3.data.labels;
}

$(document).ready(() => { 
	ajaxJSON_Config();
	
	chartInit();
	
	$("#start").click(startTimer);
	$("#stop").click(stopTimer);
	$("#sampletime").text(sampleTimeMsec.toString());
	$("#samplenumber").text(maxSamplesNumber.toString());
	$("#sampleTimeInput").text(sampleTimeSec.toString());

	$("#btn").click(()=>{
		sampleTimeSec = document.getElementById("sampleTimeInput").value;
		$("#samplenumber").text(maxSamplesNumber.toString());
		sampleTimeMsec = sampleTimeSec*1000;
		$("#sampletime").text(sampleTimeMsec.toString());
		chartInit();
	});

	
});