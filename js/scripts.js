console.log("hola")


function initialize() {
    
	var styles = [
	    {
	        "featureType": "all",
	        "elementType": "all",
	        "stylers": [
	            {
	                "invert_lightness": true
	            },
	            {
	                "saturation": 10
	            },
	            {
	                "lightness": 40
	            },
	            {
	                "gamma": 0.5
	            },
	            {
	                "hue": "#435158"
	            }
	        ]
	    }
	];

	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles,
	{name: "Styled Map"});

	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var mapOptions = {
	zoom: 5,
	center: new google.maps.LatLng(4.7318073, -74.0472024),
	mapTypeControlOptions: {
	  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	}
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'),
	mapOptions);

	var marker = new google.maps.Marker({
	    position: mapOptions.center,
	    icon: "favicon.ico"
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	marker.setMap(map);	
}