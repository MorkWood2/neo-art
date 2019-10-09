window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 2890 ) {
      $(".nav-1").css("text-decoration", "line-through");
    } else {
      $(".nav-1").css("text-decoration", "none");
    }
    if (scroll >= 5981 ) {
      $(".nav-2").css("text-decoration", "line-through");
    } else {
      $(".nav-2").css("text-decoration", "none");
    }
    if (scroll >= 7313 ) {
      $(".nav-3").css("text-decoration", "line-through");
    } else {
      $(".nav-3").css("text-decoration", "none");
    }



    if (scroll >= 5371 && scroll <= 7313) {
        $(".sidenav").css("background-color", "#17263c");
        $(".nav-item").css("color", "#00ffa3");
        $(".nav-3").css("border", "1px solid #C03F21");
        $(".nav-item").css("font-family", "'IBM Plex Mono', monospace");
        $(".nav-num").css("color", "#F82470");
        $(".container-p").css("font-family", "'IBM Plex Mono', monospace");
    } else {
        $(".sidenav").css("background-color", "#ffffff");
        $(".nav-item").css("color", "#161616");
        $(".nav-item").css("font-family", "'Roboto Condensed', sans-serif");
        $(".nav-num").css("color", "#d04040");
        $(".container-p").css("font-family", " 'Roboto', sans-serif");
          $(".nav-3").css("border", "none");
    }
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.791992, lng: -122.344085},
          zoom: 12,
          //Google maps styling
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

        //Array of markers
        var markers = [
        {
          coord: {lat:37.791182, lng:-122.198108},
          content: '<img src ="images/map/IMG_8683.jpg"> <br> <p> MacArthur @ Patterson <br> "A Bear Shaped Hole" <br> Artist: Roger Peet and Rush Santos</p>'

        },
        {
          coord: {lat:37.805390, lng:-122.267310},
          content: '<img src="images/map/Oakland-Zio-LeQuivive-_MG_8997.jpg"> <br> <p> 1628 Webster <br> Patterned Beings  <br>   Artist: Zio Ziegler</p>'
        },
        {
          coord: {lat:37.807171, lng: -122.266951},
          content: '<img src="images/map/oakland_athletics_pge_stomper_rise_grind_mural_01.jpg" <br> <p>355 19th St. <br>"Rise and Grind" <br> Artist: The Illuminaries Mural Group </p>'
        },
        {
          coord: {lat:37.802118, lng: -122.273081},
          content:'<img src = "images/map/marriott_hotel_visit_oakland_mural_01.jpg"<br> <p>1001 Broadway <br> "Welcome to Oakland" <br> Artist: The Illuminaries Mural Group </p>'
          },
           {
            coord: {lat:37.797968, lng: -122.272328},
            content:'<img src = "images/map/warriors_dubnation_chinatown_mura.jpg"<br> <p> 330 6th St. <br> "Dub Nation"<br>Artist: The Illuminaries mural group </p>'
        },
        {
          coord: {lat:37.819076, lng:-122.284406},
          content:'<img src = "images/map/v7ahop5umo7ps9tp.JPG"<br> <p>26th @ Magnolia <br> Bird Eye Garage Mural<br>Artist: Ernest Doty </p>'
        },
        {
          coord: {lat:37.815196, lng:-122.266526},
          content:'<img src = "images/map/bvi6jc821vslv3uj.jpg"<br> <p>26th street between Telegraph and Broadway <br> Street Mystic Mural<br> Artist: Ernest Doty, David Polka, Thomas Christopher Haag, Anemal and Roar. </p>'
        },
        {
          coord: {lat:37.828315 , lng:-122.279471},
          content:'<img src = "images/map/tndss6gcad3xj0w7.jpg"<br> <p>intersection of Adeline, San Pablo, and MacArthur <br> US Spring Service Murals<br>Artist: Ernest Doty </p>'
        },
        {
          coord: {lat:37.787645 , lng:-122.241918},
          content:'<img src = "images/map/Oakland-East-Marin-Koleo-DSC09106.jpg"<br> <p> E. Marin st. Mural<br>Artist: KOLEO </p>'
        },
         {
          coord: {lat:37.790787 , lng:-122.229119},
          content:'<img src = "images/map/East-Oakland-DSC00065.jpg"<br> <p> 23rd @ 24th St. <br> "The Gatherer"<br> Artist: Joshua Mays </p>'
        },
        {
          coord: {lat:37.783852 , lng:-122.238574},
          content:'<img src = "images/map/East-Oakland-DSC03606.jpg"<br> <p>12th St. @ 22nd Ave. <br>Ghost Ship Memorial<br>Artist: VOGUE TDK </p>'
        },
         {
          coord: {lat:37.839811 , lng:-122.269520},
          content:'<img src = "images/map/SmooiNoOne55thStAtMLKOakland_.jpg"<br> <p>MLK @ 55th St. <br> "Refreshing"<br>Artist: SMOOI. NO ONE. </p>'
        },
        {
          coord: {lat:37.834281 , lng:-122.267104},
          content:'<img src = "images/map/UnknownMLKAt46thStOakland.jpg"<br> <p>MLK on 46th St. <br> Korean Woman<br>Artist: Unknown </p>'
        },
        {
          coord: {lat:37.810239 , lng:-122.302121},
          content:'<img src = "images/map/Oakland-Pipes-201308-DSC06175.jpg"<br> <p> @ Oakland Pipes <br> "X Marks The Spot"<br>Artist: IMP </p>'
        },
        {
          coord: {lat:37.810431 , lng:-122.303152},
          content:'<img src = "images/map/Oakland-Pipes-DSC05297.jpg"<br> <p> @ Oakland Pipes <br> "X in The Pink"<br>Artist: Unknown </p>'
        },
        {
          coord: {lat:37.808124 , lng:-122.269918},
          content:'<img src = "images/map/Unknown19thAndTelegraphOakland.jpg"<br> <p> Telegraph @ 19th st. <br> Masked Girl<br>Artist: Unknown </p>'
        },
        {
          coord: {lat:37.843321 , lng:-122.292944},
          content:'<img src = "images/map/berkeleytracks.jpg"<br> <p> @ Berkeley Tracks <br> Grounded Teeth <br>Artist: Unknown </p>'
        },
        {
          coord: {lat:37.787289 , lng:-122.243535},
          content:'<img src = "images/map/East-Oakland-Solano-Alley-DSC02422.jpg"<br> <p> Solano Ave @ 17th Ave. <br> Octopus Hold <br>Artist: Unknown </p>'
        },
        {
          coord: {lat:37.759076 , lng:-122.511167},
          content:'<img src = "images/map/Beach-DSC03919.jpg"<br> <p> @ Ocean Beach <br> "TVOST" <br>Artist: KYZE TVC </p>'
        },
        {
          coord: {lat:37.767412 , lng:-122.428941},
          content:'<img src = "images/map/SF-Castro-DSC01166.jpg"<br> <p> Market St @ Church <br> 12 TO 1 <br>Artist: Big Foot One </p>'
        },
        {
          coord: {lat:37.794318 , lng:-122.406842},
          content:'<img src = "images/map/SF-Chinatown-DSC05217.jpg"<br> <p> Clay @ Waverly <br> On Guard <br>Artist: OPTIMISTUEY </p>'
        },
          {
          coord: {lat:37.791143 , lng:-122.403760},
          content:'<img src = "images/map/SF-Downtown-DSC02230.jpg"<br> <p> @ Beldon Place  <br> Salvador Dali <br>Artist: Unknown </p>'
        },
         {
          coord: {lat:37.780477 , lng:-122.432168},
          content:'<img src = "images/map/ArtistUnknownTurkandFillmore.jpg"<br> <p> Fillmore @ Turk <br> Fillmore East to the West <br>Artist: Unknown </p>'
        },
         {
          coord: {lat:37.784241 , lng:-122.432936},
          content:'<img src = "images/map/Marina-Fill-greary.jpg"<br> <p> Fillmore @ Geary <br> Shake it up, Rock it out <br>Artist: Eddie Colla </p>'
        },
        {
          coord: {lat:37.769621 , lng:-122.450270},
          content:'<img src = "images/map/SF-Haight-DSC00978.jpg"<br> <p> Cole @ Haight <br> Jerry Garcia <br>Artist: Mel Waters </p>'
        },
        {
          coord: {lat:37.770855, lng:-122.440401},
          content:'<img src = "images/map/SF-Haight-DSC04221.jpg"<br> <p> Baker @ Haight <br> Lips <br>Artist: FNNCH </p>'
        },
        {
          coord: {lat:37.777566 , lng:-122.42147},
          content:'<img src = "images/map/SF-WA-Hayes-Vallery-DSC07019.jpg"<br> <p> Ivy @ Franklin <br> Bee Mural <br>Artist: Shawn Bullen </p>'
        },
        {
          coord: {lat:37.775166 , lng:-122.419165},
          content:'<img src = "images/map/SF-Hayes-Valley-DSC00956.jpg"<br> <p> Van Ness @ Market <br> Storm Trooper <br>Artist: Vogue One </p>'
        },
         {
          coord: {lat:37.788231 , lng:-122.420249},
          content:'<img src = "images/map/sdjnvlanlfandfnaldfla.jpg"<br> <p> Fern Alley @ Polk <br> Qween <br>Artist: Serge Gay Jr. </p>'
        },
         {
          coord: {lat:37.752486 , lng: -122.412491},
          content:'<img src = "images/map/SF-MD-Balmy-DSC01543.jpg"<br> <p> Balmy Alley @ 24th St. <br> Meditating  <br>Artist: Julien De Casablanca </p>'
        },
        {
          coord: {lat:37.751560, lng: -122.412361},
          content:'<img src = "images/map/MD-Balmy-Cat.jpg"<br> <p> Balmy Ally @ 24th St. <br> Dreams are like stars  <br>Artist: Unknown</p>'
        },
        {
          coord: {lat:37.755180, lng: -122.419840},
          content:'<img src = "images/map/CarmenMcNallBartlettAt22ndSF.jpg"<br> <p> Bartlett @ 22nd St. <br> Friends yet Strangers  <br>Artist: Carmen Mcnall</p>'
        },
        {
          coord: {lat:37.759185, lng: -122.409836},
          content:'<img src = "images/map/SF-MD-Bryant-DSC02141.jpg"<br> <p>  Bryant @ 20th St. <br> I eat kids.  <br>Artist: Sirron Norris</p>'
        },
        {
          coord: {lat:37.765444, lng: -122.421447},
          content:'<img src = "images/map/SF-MD-Caledonia-Alley-DSC00487.jpg"<br> <p>  Caledonia Alley @ 16th St. <br> Eyes and Noses  <br>Artist: Amara Por Dios </p>'
        },
        {
          coord: {lat:37.760394, lng: -122.411022},
          content:'<img src = "images/map/SF-MD-Cellspace-DSC07384.jpg"<br> <p>  Florida @ 19th St. <br> Ever little step she takes makes me spin. <br>Artist: Nils Westergard </p>'
        },
        {
          coord: {lat:37.774480, lng: -122.407939},
          content:'<img src = "images/map/SF-Soma-Heron-Shine.jpg"<br> <p>  Berwick Alley @ Harrison St. <br> "The New Orleanian" <br>Artist: Mike Shine </p>'
        },
         {
          coord: {lat:37.783825, lng: -122.413691},
          content:'<img src = "images/map/UnknownTenderloin.jpg"<br> <p>  @ Tenderloin <br> Behind Bars <br>Artist: Unknown </p>'
        },
         {
          coord: {lat:37.773110, lng: -122.437510},
          content:'<img src = "images/map/SF-WA-Divisadero-DSC07868.jpg"<br> <p>  Oak @ Divisadero <br> Paws Across the World <br>Artist: Mike Kershnar </p>'
        },
        {
          coord: {lat:37.822323, lng: -122.373815},
          content:'<img src = "images/map/MmWATxQ.jpg"<br> <p> @ Cosson Hall on Treasure Island <br> Hall of Color <br>Artist: Various Artists </p>'
        },
        {
          coord: {lat:37.810059, lng: -122.267635},
          content:'<img src = "images/map/jetmartinez_process_30.jpg"<br> <p> @ Paramount Theatre <br> "There is More to Green Than Money" <br>Artist: Jet Martinez </p>'
        },
        {
          coord: {lat:37.730622, lng: -122.207743},
          content:'<img src = "images/map/03cv9xxqizxt9wo5.jpg"<br> <p> @ MLK Shoreline <br> Watermelon Rock <br>Artist: Unknown </p>'
        },
        {
          coord: {lat:37.784703, lng: -122.417887},
          content:'<img src = "images/map/SF-Lower-Polk-DSC00021.jpg"<br> <p> Olive @ Larkin St. <br> THE TENDERLOIN <br>Artist: Cave JPS </p>'
        },
        {
          coord: {lat:37.778675, lng: -122.416653},
          content:'<img src = "images/map/SF-Tenderloin-DSC01602.jpg"<br> <p> Grove & Larkin St. <br> Mutant Rat <br>Artist: Nychos </p>'
        },
        {
          coord: {lat:37.770902, lng: -122.415056},
          content:'<img src = "images/map/SF-Soma-Other-DSC05238.jpg"<br> <p> 12th & Folsom St. <br> Infamous Hamburger <br>Artist: Steel MSK </p>'
        },
        {
          coord: {lat:37.784999, lng: -122.400543},
          content:'<img src = "images/map/Unknown3rdStreetSF.jpg"<br> <p> Howard & 3rd St. <br> Spider Pelt <br>Artist: Dustin Schuler </p>'
        },
        {
          coord: {lat:37.820100, lng: -122.254332},
          content:'<img src = "images/map/oaktownart_20100831_02.jpg"<br> <p> MacArthur & Harrison St. <br> "Giraphics" <br>Artist: Dan Fontes </p>'
        },
        {
          coord: {lat:37.804319, lng: -122.271209},
          content:'<img src = "images/map/IMG_7720-630x500.jpg"<br> <p> Broadway @ 14th St. <br> Zio Ziegler Mural <br>Artist: Zio Ziegler </p>'
        },



        ];

        //loop through markers
        for(var i = 0; i < markers.length; i++){
          addMarker(markers[i]);
        }

      function addMarker(props){
        var marker = new google.maps.Marker({
           position:props.coord,
           map: map,
           icon:'images/map/markerSprayCan.svg'
      });

        //check content
        if (props.content) {
          var infoWindow = new google.maps.InfoWindow({
            content: props.content
          });
          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });

          //Remove default infowindow styling
        google.maps.event.addListener(infoWindow, 'domready', function() {

            var iwOuter = $('.gm-style-iw');

            var iwBackground = iwOuter.prev();

            iwBackground.children(':nth-child(2)').css({'background' : '#252525'});

            var iwmain = iwBackground.children(':nth-child(2)');

            iwBackground.children(':nth-child(4)').css({'display' : 'none'});

            var iwCloseBtn = iwOuter.next();

          });
        }

      };


     };
