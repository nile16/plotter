
function initMap() {

	var locations = [[]];

	locations[0]  = {lat:56.16397,lng:14.86656,icon:"pics/b.png",info:'<div class="photowrap"><img src=" pics/0.png"></div><strong>BTH Karlshamn         </strong>                                             <br><a href="http://www.bth.se/" target="_blank">www.bth.se</a><br>'};
	locations[1]  = {lat:62.93272,lng:17.76179,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/1.png"></div><strong>Sebastian Selin       </strong><br>Hällgumsgatan 25B<br>87236 Kramfors      <br><a href="http://" target="_blank"></a><br>'};
	locations[2]  = {lat:56.16077,lng:15.13303,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/2.png"></div><strong>Nils Leandersson      </strong><br>Väbynäsvägen 48<br>37263 Bräkne-Hoby     <br><a href="http://searchosm.com" target="_blank">SearchOSM.com</a><br>'};
	locations[3]  = {lat:56.17506,lng:14.86637,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/3.png"></div><strong>Simon Persson         </strong><br>Landsvägen 1062<br>Karlshamn             <br><a href="http://" target="_blank"></a><br>'};
	locations[4]  = {lat:62.99960,lng:17.65161,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/4.png"></div><strong>Alexander Sohlin      </strong><br>Timotejvägen 27<br>Bollstabruk           <br><a href="http://" target="_blank"></a><br>'};
	locations[5]  = {lat:56.80425,lng:12.96349,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/5.png"></div><strong>Simon Gruber          </strong><br>Björkallen 19                            <br><a href="http://" target="_blank"></a><br>'};
	locations[6]  = {lat:56.18978,lng:15.59464,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/6.png"></div><strong>William Meeuwisse     </strong><br>Ringvägen 19<br>37141 karlskrona         <br><a href="http://" target="_blank"></a><br>'};
	locations[7]  = {lat:57.65231,lng:12.10193,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/7.png"></div><strong>Markus Mario Lindström</strong><br>Kullbäckstorpsvägen 21<br>43542 Mölnlycke<br><a href="http://" target="_blank"></a><br>'};
	locations[8]  = {lat:56.17367,lng:14.86455,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/8.png"></div><strong>Jesper Truedsson      </strong><br>Hantverkaregatan 91b<br>Karlshamn        <br><a href="http://" target="_blank"></a><br>'};
	locations[9]  = {lat:59.68496,lng:16.62737,icon:"pics/p.png",info:'<div class="photowrap"><img src=" pics/9.png"></div><strong>Malin Bredin          </strong><br>Egnahemsvägen 4A<br>Västerås             <br><a href="http://" target="_blank"></a><br>'};
	locations[10] = {lat:55.71025,lng:13.18245,icon:"pics/p.png",info:'<div class="photowrap"><img src="pics/10.png"></div><strong>Jonathan Franke       </strong><br>Tryckerigatan 4<br>Lund                  <br><a href="http://" target="_blank"></a><br>'};
	locations[11] = {lat:56.42898,lng:12.85020,icon:"pics/p.png",info:'<div class="photowrap"><img src="pics/11.png"></div><strong>Simon Larsson         </strong><br>Sjövägen 10<br>Båstad                    <br><a href="http://" target="_blank"></a><br>'};

	
	locations[12] = {lat:56.16353,lng:14.86666,icon:"pics/r.png",info:'<strong>&amp;Vin                </strong><br>+46 454 572040<br><a href="http://www.ochvin.se/" target="_blank">www.ochvin.se</a><br>'};
	locations[13] = {lat:56.17300,lng:14.85987,icon:"pics/r.png",info:'<strong>Á la Pizetta            </strong><br>+46 454 18447<br><a href="http://www.alapizzetta.se/" target="_blank">www.alapizzetta.se</a><br>'};
	locations[14] = {lat:56.16977,lng:14.86077,icon:"pics/r.png",info:'<strong>Brooklyn 1664           </strong><br>+46 454 84535<br><a href="http://www.brooklyn1664.se/" target="_blank">www.brooklyn1664.se</a><br>'};
	locations[15] = {lat:56.17022,lng:14.86482,icon:"pics/r.png",info:'<strong>Ceder Restaurang        </strong><br>+46 454 10309<br><a href="http://www.cederrestaurang.se/" target="_blank">www.cederrestaurang.se</a><br>'};
	locations[16] = {lat:56.15730,lng:14.88486,icon:"pics/r.png",info:'<strong>Fiskstugan              </strong><br>+46 454 19035<br><a href="http://www.delikatessrokeri.se/" target="_blank">www.delikatessrokeri.se</a><br>'};
	locations[17] = {lat:56.16416,lng:14.86610,icon:"pics/r.png",info:'<strong>Gourmet Grön            </strong><br>+46 454 16440<br><a href="http://www.gourmetgron.se/" target="_blank">www.gourmetgron.se</a><br>'};
	locations[18] = {lat:56.16956,lng:14.86123,icon:"pics/r.png",info:'<strong>Gourmet Thai Restaurang </strong><br>+46 454 14500,+46 454 14510<br><a href="http://www.gourmetthai.se/" target="_blank">www.gourmetthai.se</a><br>'};
	locations[19] = {lat:56.16793,lng:14.86245,icon:"pics/r.png",info:'<strong>Hotellbaren             </strong><br>+46 454 84585<br><a href="http://hotellbaren.nu/" target="_blank">www.hotellbaren.nu</a><br>'};
	locations[20] = {lat:56.17068,lng:14.86377,icon:"pics/r.png",info:'<strong>Kebab House             </strong><br>+46 454 16777<br><a href="http://kebabhousekarlshamn.se/" target="_blank">www.kebabhousekarlshamn.se</a><br>'};
	locations[21] = {lat:56.17199,lng:14.86062,icon:"pics/r.png",info:'<strong>Konditori Christin      </strong><br>+46 454 10036<br><a href="http://www.konditorichristin.se/" target="_blank">www.konditorichristin.se</a><br>'};
	locations[22] = {lat:56.18772,lng:14.84696,icon:"pics/r.png",info:'<strong>McDonald&apos;s         </strong><br>+46 454 13222, +46 703 414926<br><a href="http://www.mcdonalds.se/" target="_blank">www.mcdonalds.se</a><br>'};
	locations[23] = {lat:56.16994,lng:14.86063,icon:"pics/r.png",info:'<strong>Ölhallen                </strong><br>+46 454 14444<br><a href="http://www.olhallen.se/" target="_blank">www.olhallen.se</a><br>'};
	locations[24] = {lat:56.16846,lng:14.86251,icon:"pics/r.png",info:'<strong>PoDee                   </strong><br>+46 454 17777<br><a href="http://www.siamgarden.se/" target="_blank">www.siamgarden.se</a><br>'};
	locations[25] = {lat:56.19404,lng:14.84354,icon:"pics/r.png",info:'<strong>Restaurang Kvarnen      </strong><br>+46 454 84070,+46 72 2829942<br><a href="http://www.restaurangkvarnen.se/" target="_blank">www.restaurangkvarnen.se</a><br>'};
	locations[26] = {lat:56.16933,lng:14.86536,icon:"pics/r.png",info:'<strong>Resturang Canton        </strong><br>+46 454 13660<br><a href="http://restaurangcanton.se/" target="_blank">www.restaurangcanton.se</a><br>'};
	locations[27] = {lat:56.17013,lng:14.86441,icon:"pics/r.png",info:'<strong>REX Salonger            </strong><br>+46 454 10999<br><a href="http://rexsalonger.se/" target="_blank">www.rexsalonger.se</a><br>'};
	locations[28] = {lat:56.16943,lng:14.86480,icon:"pics/r.png",info:'<strong>Sushibar Maki           </strong><br>+46 454 15944<br><a href="http://www.sushibarmaki.se/" target="_blank">www.sushibarmaki.se</a><br>'};
	locations[29] = {lat:56.16358,lng:14.87200,icon:"pics/r.png",info:'<strong>Villa Utsikten          </strong><br>+46 454 10325<br><a href="http://villautsikten.se/" target="_blank">www.villautsikten.se</a><br>'};


	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 7,
		center: new google.maps.LatLng(56.16424, 14.86625),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i, response;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position : new google.maps.LatLng(locations[i].lat, locations[i].lng),
			icon     : locations[i].icon,
			map      : map
		});

		if (i!=0) {
		new google.maps.DistanceMatrixService().getDistanceMatrix(
			{
				origins: [new google.maps.LatLng(56.16397,14.86656)], // BTH
				destinations: [new google.maps.LatLng(locations[i].lat, locations[i].lng)],
				travelMode: 'DRIVING',
			},  (function (response, status, i) {	
						return function (response, status) {
							if (status == google.maps.DirectionsStatus.OK) 	locations[i].info+=response.rows[0].elements[0].distance.text;
						}
					})(response, status, i));
		}	
			
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent("<div class='infowrap'>"+locations[i].info+"</div>");
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
	
	
    if (navigator.geolocation) {
      var options = { enableHighAccuracy:true, timeout:5000, maximumAge:0 };
	  navigator.geolocation.getCurrentPosition(
	    function(pos) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				icon : "pics/y.png",
				map: map
			});
		})
	}

	
	
}



