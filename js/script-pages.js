function focoNome(){
	document.getElementById("nome").focus();	
}

//Inicio Inserir Mapa Google
var myCenter=new google.maps.LatLng(-19.482987,-44.260015);
function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("map"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
var infowindow = new google.maps.InfoWindow({
  content:"Estamos Aqui!"
  });

infowindow.open(map,marker);

marker.addListener('click', function() {
    open("https://www.google.com.br/maps/place/Mart+Minas+-+Atacado+e+Varejo/@-19.4820788,-44.2642482,16z/data=!4m5!3m4!1s0x0:0x5f0434241273290c!8m2!3d-19.4836263!4d-44.2600425");
  })

}
google.maps.event.addDomListener(window, 'load', initialize);
//Fim Inserir Mapa Google