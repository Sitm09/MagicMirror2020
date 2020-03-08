/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
							       // "127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1/24", 								      //	"192.168.1.1/24"
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "helloworld",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-MyCalendar",
			// header: "US Holidays",
			position: "top_left",
			config: {
				colored: true,
				calendars: [
					{
						// symbol: "trophy",
						maximumEntries: 1,
						color: 'red',
						url: "https://calendar.google.com/calendar/ical/sitm09%40gmail.com/private-1929be7ce51f5e7045e6ae90489aab83/basic.ics"
					},
					{
							// symbol: "trophy",
							maximumEntries: 2,
							color: 'blue',
							url: "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-PIR-Sensor",
			config: {
				sensorPin: 23,
				powerSavingDelay: 25
				}
		},
		{
			module: "MMM-CTA",
			position: "top_middleleft",
			config: {
				updateTime: 50000, // 1 minute, no need to go below
				ctaApiKeyTrain: "bc9d0610109c4f4bba82e89bb69687ba",
				trainStopName: 'Wellington',
				trainStationID: '41210',
				maxResultTrain: 4,
				moduleInstance: 1, // To run multiple instances of this module
				}

		},
		{
			module: "MMM-CTA2",
			position: "top_middleright",
			config: {
				updateTime: 45000,
				ctaApiKeyTrain: "bc9d0610109c4f4bba82e89bb69687ba",
				trainStopName: 'Belmont',
				trainStationID: '41320',
				maxResultTrain: 6,
				moduleInstance: 1,
			}
		},
		{
			module: 'MMM-Reddit',
			position: 'top_lefthalf',
			config: {
				subreddit: ['worldnews', 'politics', 'science', 'blackpeopletwitter', 'sports', 'nba', 'AskReddit', 'EarthPorn', 'GetMotivated', 'comics', 'wholesomememes', 'RoomPorn'],
				displayType: 'image',
				imageQuality: 'high',
				count: 25,
				show: 1,
				width: 500,
				showHeader: false,
				showRank: false,
				}
		},
		{
			module: "MagicMirror-QuoteCatalog",
			position: 'top_righthalf',
			config: {
				timeFormat: 10,
				fadeSpeed: 5
				}
		},
		{
	    		module: 'MMM-forecast-io',
	    		position: 'top_right',  // This can be any of the regions.
	    		config: {
	      			// See 'Configuration options' for more information.
	      			apiKey: 'edf16b42da79134f94f9d2bbd2802a20', // Dark Sky API key.
	      			// Only required if geolocation doesn't work:
	      			latitude:   41.9359477,
	      			longitude: -87.6541478,
				maxDaysForecast: 3,
				precipitationFillColor: 'dodgerblue',
				precipitationGraphWidth: 300
	    			}
	  	},
		{	module: 'MMM-Screencast',
			position: 'bottom_right',
			config: {
				position: 'center',
				height: 700,
				width: 1000,
				}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/world/rss.xml"
					},
					{
						title: "NBC Chicago",
						url: "https://www.nbcchicago.com/news/top-stories/?rss=y&embedThumb=y&summary=y"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
