//Helen Huh 2019 

mapboxgl.accessToken = 'pk.eyJ1IjoiMTg0N2NlbnN1cyIsImEiOiJjanllcnY1MmYwM3doM2JudnZkdDl4eWs1In0.F_3cfs4al_haneDBGnscIw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/1847census/cjyahhgxs0a7t1cnph92hmkgv'
});

//gives map default pointer cursor
map.getCanvas().style.cursor = 'default';

//ensures map shows Philadelphia when it's loaded by setting the bounds of the map on load
map.fitBounds([[-75.238691, 39.910205], [-75.103018, 39.986277]]);
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');
map.on('load', function () {
    //create legend
    var layers = ['City', 'Northern Liberties', 'Spring Garden and West Philadelphia', 'Southwark and Moyamensing'];
    var colors = ['#F2A5A5', '#F4F086', '#CAF4B4', '#7EB1E7'];
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
    //add 1847 Map layer using TileJSON link
    map.addLayer({
        "id": "1847 Map",
        "source": {
            "type": "raster",
            "url": "https://maps.georeferencer.com/georeferences/237857156156/2017-02-20T14:25:19.132722Z/map.json?key=YAuFmpBUothIHUoOrApf"
        },
        "type": "raster",
        "layout": {
            'visibility': 'none' //ensures the 1847 map does not initial show
        }
    });
    slider.addEventListener('input', function (e) {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        map.setLayoutProperty('1847 Map', 'visibility', 'visible') //enables user to see the 1847 map
        map.setPaintProperty('1847 Map', 'raster-opacity', parseInt(e.target.value, 10) / 100);
        // Value indicator
        sliderValue.textContent = e.target.value + '%';
    });
});
//add listener for mousemove event, identify which region is at location of cursor, and update information window
map.on('mousemove', function (e) {
    var region = map.queryRenderedFeatures(e.point, {
        layers: ['1847census-city-1dmrb2', "1847census-springgarden-6ajgv6", "1847census-southwark-3alse2", "1847census-northernliberties-0ephyp"]
    });
    if (region.length > 0) {
        document.getElementById('pd').innerHTML = '<h3><strong>' + region[0].properties.name + '</strong></h3><p><strong><em>'
            + region[0].properties["male intemperate"] + '</strong> males intemperate</em></p><p><strong><em>'
            + region[0].properties["female intemperate"] + '</strong> females intemperate</em></p><p><strong><em>'
            + region[0].properties["can read"] + '</strong> can read</em></p><p><strong><em>'
            + region[0].properties["can write"] + '</strong> can write</em></p><p><strong><em>'
            + region[0].properties["born slaves"] + '</strong> born slaves</em></p><p><strong><em>'
            + region[0].properties["attend religious meetings"] + '</strong> attend religious meetings</em></p><p><strong><em>'
            + region[0].properties["not attend religious meetings"] + '</strong> do not attend religious meetings</em></p><p><strong><em>'
            + region[0].properties["belong to temperance societies"] + '</strong> belong to temperance societies</em></p>';
    } else {
        document.getElementById('pd').innerHTML = '<p>Hover over a region!</p>';
    }
});
