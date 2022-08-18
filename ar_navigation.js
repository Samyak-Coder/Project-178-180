let coordinates = {};

$(document).ready(function(){
    getCoordinates();
    get_weather();
})

function getCoordinates(){
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has("source") && searchParams.has("destination")){
        let source = searchParams.get("source");
        let destination = searchParams.get("destination");

        coordinates.source_lat = source.split(";")[0];
        coordinates.source_lon = source.split(";")[1];

        
        coordinates.destination_lat = destination.split(";")[0];
        coordinates.destination_lon = destination.split(";")[1];
        console.log(coordinates)
    }
    else{
        alert("Coordinates not selected")
        Window.history.back();
    }
}

function get_weather(){
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=1e6cb749b8d3b0f8ed3a20783c8b6997`,
        type: "get",
        success: function(response){
            let name = response.name;
            let wearther = response.wearther[0].main;
            $("#scene_container").append(
                `
                <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude:  ${steps[i].maneuver.location[0]};">
                    <a-entity>
                    <a-text height="50" value="Weather Focast in ${weather} at ${name} > </a-text> 
                    </a-entity>
                <a-entity>
                `
            )
        }
    })
}
