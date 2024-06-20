ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([-539579.980381, 6453027.744914, 2011637.415077, 7855492.556230]);
var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Numberofreindeersightings_1 = new ol.format.GeoJSON();
var features_Numberofreindeersightings_1 = format_Numberofreindeersightings_1.readFeatures(json_Numberofreindeersightings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Numberofreindeersightings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numberofreindeersightings_1.addFeatures(features_Numberofreindeersightings_1);
var lyr_Numberofreindeersightings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Numberofreindeersightings_1, 
                style: style_Numberofreindeersightings_1,
                popuplayertitle: "Number of reindeer sightings",
                interactive: true,
    title: 'Number of reindeer sightings<br />\
    <img src="styles/legend/Numberofreindeersightings_1_0.png" /> 1 - 7<br />\
    <img src="styles/legend/Numberofreindeersightings_1_1.png" /> 7 - 14<br />\
    <img src="styles/legend/Numberofreindeersightings_1_2.png" /> 14 - 21<br />\
    <img src="styles/legend/Numberofreindeersightings_1_3.png" /> 21 - 28<br />\
    <img src="styles/legend/Numberofreindeersightings_1_4.png" /> 28 - 35<br />'
        });

lyr_Basemap_0.setVisible(true);lyr_Numberofreindeersightings_1.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_Numberofreindeersightings_1];
lyr_Numberofreindeersightings_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Numberofreindeersightings_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Numberofreindeersightings_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'NUMPOINTS': 'inline label - always visible', });
lyr_Numberofreindeersightings_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});