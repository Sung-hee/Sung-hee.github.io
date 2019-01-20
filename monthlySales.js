// 테스트
var selected = "http://localhost:3000/admin/charts";

$.getJSON(selected, function (data) {
	// Create the chart
	Highcharts.stockChart('container', {
		rangeSelector: {
			selected: 1,
			inputEnabled: false,
			labelStyle: {
				display: 'none'
			},
			buttonTheme: {
				display: 'none'
			},
			scrollbar: {
				enabled: false
			}
		},
		credits: {
			enabled: false
		},
		scrollbar: {
			enabled: false
		},
		navigator: {
			enabled: false
		},
		xAxis: {
			type: 'datetime',
			height: '100%',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m월 %e일',
				week: '%m월 %e일',
				month: '%y년 %m월',
				year: '%Y년'
			}
		},
		yAxis: [{
			labels: {
				align: 'left',
				x: 10,
				format: '{value}원'
			},
		}],
		series: [{
			name: '월간 누적 매출',
			data: data,
			dataGrouping: {
				type: 'column',
				dateTimeLabelFormats: {
					millisecond: ['%m월 %e일'],
					second: ['%m월 %e일'],
					minute: ['%m월 %e일'],
					hour: ['%m월 %e일'],
					day: ['%Y년 %m월 %e일'],
					week: ['%Y년 %m월 %e일'],
					month: ['%Y년 %m월'],
					year: ['%Y년']
				}
			},
			tooltip: {
				pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y} 원\x3c/b\x3e\x3cbr/\x3e',
				dateTimeLabelFormats: {
					millisecond: '%m월 %e일',
					second: '%m월 %e일',
					minute: '%m월 %e일',
					hour: '%m월 %e일',
					day: '%m월 %e일',
					week: '%m월 %e일',
					month: '%m월 %e일',
					year: '%Y년'
				}
			},
			color: '#D8203B'
		}]
	});
});
