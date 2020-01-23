var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__55_1 = new ol.format.GeoJSON();
var features__55_1 = format__55_1.readFeatures(json__55_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__55_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__55_1.addFeatures(features__55_1);
var lyr__55_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__55_1, 
                style: style__55_1,
                interactive: true,
                title: '<img src="styles/legend/_55_1.png" /> Сулёмский берег_55'
            });
var format__54_2 = new ol.format.GeoJSON();
var features__54_2 = format__54_2.readFeatures(json__54_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__54_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__54_2.addFeatures(features__54_2);
var lyr__54_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__54_2, 
                style: style__54_2,
                interactive: true,
                title: '<img src="styles/legend/_54_2.png" /> Пахомиха_54'
            });
var format__53_3 = new ol.format.GeoJSON();
var features__53_3 = format__53_3.readFeatures(json__53_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__53_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__53_3.addFeatures(features__53_3);
var lyr__53_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__53_3, 
                style: style__53_3,
                interactive: true,
                title: '<img src="styles/legend/_53_3.png" /> Волеговская_53'
            });
var format__52_4 = new ol.format.GeoJSON();
var features__52_4 = format__52_4.readFeatures(json__52_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__52_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__52_4.addFeatures(features__52_4);
var lyr__52_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__52_4, 
                style: style__52_4,
                interactive: true,
                title: '<img src="styles/legend/_52_4.png" /> Романовский трек_52'
            });
var format__51_5 = new ol.format.GeoJSON();
var features__51_5 = format__51_5.readFeatures(json__51_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__51_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__51_5.addFeatures(features__51_5);
var lyr__51_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__51_5, 
                style: style__51_5,
                interactive: true,
                title: '<img src="styles/legend/_51_5.png" /> Журавлик_51'
            });
var format_49_6 = new ol.format.GeoJSON();
var features_49_6 = format_49_6.readFeatures(json_49_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_49_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_49_6.addFeatures(features_49_6);
var lyr_49_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_49_6, 
                style: style_49_6,
                interactive: true,
                title: '<img src="styles/legend/49_6.png" /> Бровка 49'
            });
var format_48_7 = new ol.format.GeoJSON();
var features_48_7 = format_48_7.readFeatures(json_48_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_48_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_48_7.addFeatures(features_48_7);
var lyr_48_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_48_7, 
                style: style_48_7,
                interactive: true,
                title: '<img src="styles/legend/48_7.png" /> Гилёвская 48'
            });
var format_47_8 = new ol.format.GeoJSON();
var features_47_8 = format_47_8.readFeatures(json_47_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_47_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_47_8.addFeatures(features_47_8);
var lyr_47_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_47_8, 
                style: style_47_8,
                interactive: true,
                title: '<img src="styles/legend/47_8.png" /> По девонскому морю 47'
            });
var format_46_9 = new ol.format.GeoJSON();
var features_46_9 = format_46_9.readFeatures(json_46_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_46_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_46_9.addFeatures(features_46_9);
var lyr_46_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_46_9, 
                style: style_46_9,
                interactive: true,
                title: '<img src="styles/legend/46_9.png" /> Пленичная петля 46'
            });
var format_45_10 = new ol.format.GeoJSON();
var features_45_10 = format_45_10.readFeatures(json_45_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45_10.addFeatures(features_45_10);
var lyr_45_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_45_10, 
                style: style_45_10,
                interactive: true,
                title: '<img src="styles/legend/45_10.png" /> Илимская петля 45'
            });
var format__44_11 = new ol.format.GeoJSON();
var features__44_11 = format__44_11.readFeatures(json__44_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__44_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__44_11.addFeatures(features__44_11);
var lyr__44_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__44_11, 
                style: style__44_11,
                interactive: true,
                title: '<img src="styles/legend/_44_11.png" /> Ёквинская тайга_44'
            });
var format__43_12 = new ol.format.GeoJSON();
var features__43_12 = format__43_12.readFeatures(json__43_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__43_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__43_12.addFeatures(features__43_12);
var lyr__43_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__43_12, 
                style: style__43_12,
                interactive: true,
                title: '<img src="styles/legend/_43_12.png" /> Столбовая_43'
            });
var format_42_13 = new ol.format.GeoJSON();
var features_42_13 = format_42_13.readFeatures(json_42_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42_13.addFeatures(features_42_13);
var lyr_42_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42_13, 
                style: style_42_13,
                interactive: true,
                title: '<img src="styles/legend/42_13.png" /> Крестовая 42'
            });
var format__41_14 = new ol.format.GeoJSON();
var features__41_14 = format__41_14.readFeatures(json__41_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__41_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__41_14.addFeatures(features__41_14);
var lyr__41_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__41_14, 
                style: style__41_14,
                interactive: true,
                title: '<img src="styles/legend/_41_14.png" /> Синявка_41'
            });
var format__40_15 = new ol.format.GeoJSON();
var features__40_15 = format__40_15.readFeatures(json__40_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__40_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__40_15.addFeatures(features__40_15);
var lyr__40_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__40_15, 
                style: style__40_15,
                interactive: true,
                title: '<img src="styles/legend/_40_15.png" /> Собачья_40'
            });
var format__39_16 = new ol.format.GeoJSON();
var features__39_16 = format__39_16.readFeatures(json__39_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__39_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__39_16.addFeatures(features__39_16);
var lyr__39_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__39_16, 
                style: style__39_16,
                interactive: true,
                title: '<img src="styles/legend/_39_16.png" /> Шаманка_39'
            });
var format__38_17 = new ol.format.GeoJSON();
var features__38_17 = format__38_17.readFeatures(json__38_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__38_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__38_17.addFeatures(features__38_17);
var lyr__38_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__38_17, 
                style: style__38_17,
                interactive: true,
                title: '<img src="styles/legend/_38_17.png" /> Оленья_38'
            });
var format__37_18 = new ol.format.GeoJSON();
var features__37_18 = format__37_18.readFeatures(json__37_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__37_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__37_18.addFeatures(features__37_18);
var lyr__37_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__37_18, 
                style: style__37_18,
                interactive: true,
                title: '<img src="styles/legend/_37_18.png" /> Пермяковская_37'
            });
var format__36_19 = new ol.format.GeoJSON();
var features__36_19 = format__36_19.readFeatures(json__36_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__36_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__36_19.addFeatures(features__36_19);
var lyr__36_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__36_19, 
                style: style__36_19,
                interactive: true,
                title: '<img src="styles/legend/_36_19.png" /> Вогулка_36'
            });
var format__35_20 = new ol.format.GeoJSON();
var features__35_20 = format__35_20.readFeatures(json__35_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__35_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__35_20.addFeatures(features__35_20);
var lyr__35_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__35_20, 
                style: style__35_20,
                interactive: true,
                title: '<img src="styles/legend/_35_20.png" /> Чизма_35'
            });
var format__34_21 = new ol.format.GeoJSON();
var features__34_21 = format__34_21.readFeatures(json__34_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__34_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__34_21.addFeatures(features__34_21);
var lyr__34_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__34_21, 
                style: style__34_21,
                interactive: true,
                title: '<img src="styles/legend/_34_21.png" /> Лесной путь_34'
            });
var format__33_22 = new ol.format.GeoJSON();
var features__33_22 = format__33_22.readFeatures(json__33_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__33_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__33_22.addFeatures(features__33_22);
var lyr__33_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__33_22, 
                style: style__33_22,
                interactive: true,
                title: '<img src="styles/legend/_33_22.png" /> Чусовский берег_33'
            });
var format__32_23 = new ol.format.GeoJSON();
var features__32_23 = format__32_23.readFeatures(json__32_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__32_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__32_23.addFeatures(features__32_23);
var lyr__32_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__32_23, 
                style: style__32_23,
                interactive: true,
                title: '<img src="styles/legend/_32_23.png" /> Колпаковская_32'
            });
var format__31_24 = new ol.format.GeoJSON();
var features__31_24 = format__31_24.readFeatures(json__31_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__31_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__31_24.addFeatures(features__31_24);
var lyr__31_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__31_24, 
                style: style__31_24,
                interactive: true,
                title: '<img src="styles/legend/_31_24.png" /> Омутной треугольник_31'
            });
var format__30_25 = new ol.format.GeoJSON();
var features__30_25 = format__30_25.readFeatures(json__30_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__30_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__30_25.addFeatures(features__30_25);
var lyr__30_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__30_25, 
                style: style__30_25,
                interactive: true,
                title: '<img src="styles/legend/_30_25.png" /> Дождевая петля_30'
            });
var format__29_26 = new ol.format.GeoJSON();
var features__29_26 = format__29_26.readFeatures(json__29_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__29_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__29_26.addFeatures(features__29_26);
var lyr__29_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__29_26, 
                style: style__29_26,
                interactive: true,
                title: '<img src="styles/legend/_29_26.png" /> На Омутной_29'
            });
var format__28_27 = new ol.format.GeoJSON();
var features__28_27 = format__28_27.readFeatures(json__28_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__28_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__28_27.addFeatures(features__28_27);
var lyr__28_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__28_27, 
                style: style__28_27,
                interactive: true,
                title: '<img src="styles/legend/_28_27.png" /> Старуха_28'
            });
var format__27_28 = new ol.format.GeoJSON();
var features__27_28 = format__27_28.readFeatures(json__27_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__27_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__27_28.addFeatures(features__27_28);
var lyr__27_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__27_28, 
                style: style__27_28,
                interactive: true,
                title: '<img src="styles/legend/_27_28.png" /> Далекая_27'
            });
var format_A_26_29 = new ol.format.GeoJSON();
var features_A_26_29 = format_A_26_29.readFeatures(json_A_26_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_26_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_26_29.addFeatures(features_A_26_29);
var lyr_A_26_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_26_29, 
                style: style_A_26_29,
                interactive: true,
                title: '<img src="styles/legend/A_26_29.png" /> Aфонина тропа_26'
            });
var format__25_30 = new ol.format.GeoJSON();
var features__25_30 = format__25_30.readFeatures(json__25_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__25_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__25_30.addFeatures(features__25_30);
var lyr__25_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__25_30, 
                style: style__25_30,
                interactive: true,
                title: '<img src="styles/legend/_25_30.png" /> Скороход_25'
            });
var format__24_31 = new ol.format.GeoJSON();
var features__24_31 = format__24_31.readFeatures(json__24_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__24_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__24_31.addFeatures(features__24_31);
var lyr__24_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__24_31, 
                style: style__24_31,
                interactive: true,
                title: '<img src="styles/legend/_24_31.png" /> Романовская_24'
            });
var format__23_32 = new ol.format.GeoJSON();
var features__23_32 = format__23_32.readFeatures(json__23_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__23_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__23_32.addFeatures(features__23_32);
var lyr__23_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__23_32, 
                style: style__23_32,
                interactive: true,
                title: '<img src="styles/legend/_23_32.png" /> Схожу погляжу_23'
            });
var format_22_33 = new ol.format.GeoJSON();
var features_22_33 = format_22_33.readFeatures(json_22_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_33.addFeatures(features_22_33);
var lyr_22_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_22_33, 
                style: style_22_33,
                interactive: true,
                title: '<img src="styles/legend/22_33.png" /> Счастливое долголетие 22'
            });
var format__21_34 = new ol.format.GeoJSON();
var features__21_34 = format__21_34.readFeatures(json__21_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__21_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__21_34.addFeatures(features__21_34);
var lyr__21_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__21_34, 
                style: style__21_34,
                interactive: true,
                title: '<img src="styles/legend/_21_34.png" /> Баронская петля_21'
            });
var format__20_35 = new ol.format.GeoJSON();
var features__20_35 = format__20_35.readFeatures(json__20_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__20_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__20_35.addFeatures(features__20_35);
var lyr__20_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__20_35, 
                style: style__20_35,
                interactive: true,
                title: '<img src="styles/legend/_20_35.png" /> По Демидовским землям_20'
            });
var format__19_36 = new ol.format.GeoJSON();
var features__19_36 = format__19_36.readFeatures(json__19_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__19_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__19_36.addFeatures(features__19_36);
var lyr__19_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__19_36, 
                style: style__19_36,
                interactive: true,
                title: '<img src="styles/legend/_19_36.png" /> Баронский луг_19'
            });
var format__18_37 = new ol.format.GeoJSON();
var features__18_37 = format__18_37.readFeatures(json__18_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18_37.addFeatures(features__18_37);
var lyr__18_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__18_37, 
                style: style__18_37,
                interactive: true,
                title: '<img src="styles/legend/_18_37.png" /> Тропами предков_18'
            });
var format__17_38 = new ol.format.GeoJSON();
var features__17_38 = format__17_38.readFeatures(json__17_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17_38.addFeatures(features__17_38);
var lyr__17_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__17_38, 
                style: style__17_38,
                interactive: true,
                title: '<img src="styles/legend/_17_38.png" /> Боровая_17'
            });
var format__16_39 = new ol.format.GeoJSON();
var features__16_39 = format__16_39.readFeatures(json__16_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16_39.addFeatures(features__16_39);
var lyr__16_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__16_39, 
                style: style__16_39,
                interactive: true,
                title: '<img src="styles/legend/_16_39.png" /> Старый демидовский тракт_16'
            });
var format__15_40 = new ol.format.GeoJSON();
var features__15_40 = format__15_40.readFeatures(json__15_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15_40.addFeatures(features__15_40);
var lyr__15_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__15_40, 
                style: style__15_40,
                interactive: true,
                title: '<img src="styles/legend/_15_40.png" /> Утиная_15'
            });
var format__14_41 = new ol.format.GeoJSON();
var features__14_41 = format__14_41.readFeatures(json__14_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14_41.addFeatures(features__14_41);
var lyr__14_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14_41, 
                style: style__14_41,
                interactive: true,
                title: '<img src="styles/legend/_14_41.png" /> Верховая_14'
            });
var format__13_42 = new ol.format.GeoJSON();
var features__13_42 = format__13_42.readFeatures(json__13_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13_42.addFeatures(features__13_42);
var lyr__13_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13_42, 
                style: style__13_42,
                interactive: true,
                title: '<img src="styles/legend/_13_42.png" /> Песчаная_13'
            });
var format__12_43 = new ol.format.GeoJSON();
var features__12_43 = format__12_43.readFeatures(json__12_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12_43.addFeatures(features__12_43);
var lyr__12_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12_43, 
                style: style__12_43,
                interactive: true,
                title: '<img src="styles/legend/_12_43.png" /> Тропы болотного парка_12'
            });
var format__10_44 = new ol.format.GeoJSON();
var features__10_44 = format__10_44.readFeatures(json__10_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10_44.addFeatures(features__10_44);
var lyr__10_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10_44, 
                style: style__10_44,
                interactive: true,
                title: '<img src="styles/legend/_10_44.png" /> Смородинская_10'
            });
var format__11_45 = new ol.format.GeoJSON();
var features__11_45 = format__11_45.readFeatures(json__11_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11_45.addFeatures(features__11_45);
var lyr__11_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11_45, 
                style: style__11_45,
                interactive: true,
                title: '<img src="styles/legend/_11_45.png" /> Смородинская_11'
            });
var format__9_46 = new ol.format.GeoJSON();
var features__9_46 = format__9_46.readFeatures(json__9_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9_46.addFeatures(features__9_46);
var lyr__9_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9_46, 
                style: style__9_46,
                interactive: true,
                title: '<img src="styles/legend/_9_46.png" /> Шайтанка_9'
            });
var format__8_47 = new ol.format.GeoJSON();
var features__8_47 = format__8_47.readFeatures(json__8_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8_47.addFeatures(features__8_47);
var lyr__8_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8_47, 
                style: style__8_47,
                interactive: true,
                title: '<img src="styles/legend/_8_47.png" /> Заповедная_8'
            });
var format__7_48 = new ol.format.GeoJSON();
var features__7_48 = format__7_48.readFeatures(json__7_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7_48.addFeatures(features__7_48);
var lyr__7_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7_48, 
                style: style__7_48,
                interactive: true,
                title: '<img src="styles/legend/_7_48.png" /> Синегорская_7'
            });
var format_6_49 = new ol.format.GeoJSON();
var features_6_49 = format_6_49.readFeatures(json_6_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_49.addFeatures(features_6_49);
var lyr_6_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6_49, 
                style: style_6_49,
                interactive: true,
                title: '<img src="styles/legend/6_49.png" /> Белая тропа 6'
            });
var format____5_50 = new ol.format.GeoJSON();
var features____5_50 = format____5_50.readFeatures(json____5_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____5_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____5_50.addFeatures(features____5_50);
var lyr____5_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____5_50, 
                style: style____5_50,
                interactive: true,
                title: '<img src="styles/legend/___5_50.png" /> Земли_старателей_квадроцикл_5'
            });
var format___4_51 = new ol.format.GeoJSON();
var features___4_51 = format___4_51.readFeatures(json___4_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4_51.addFeatures(features___4_51);
var lyr___4_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___4_51, 
                style: style___4_51,
                interactive: true,
                title: '<img src="styles/legend/__4_51.png" /> Земли_старателей_4'
            });
var format__3_52 = new ol.format.GeoJSON();
var features__3_52 = format__3_52.readFeatures(json__3_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3_52.addFeatures(features__3_52);
var lyr__3_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3_52, 
                style: style__3_52,
                interactive: true,
                title: '<img src="styles/legend/_3_52.png" /> Трактовая_3'
            });
var format__2_53 = new ol.format.GeoJSON();
var features__2_53 = format__2_53.readFeatures(json__2_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2_53.addFeatures(features__2_53);
var lyr__2_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2_53, 
                style: style__2_53,
                interactive: true,
                title: '<img src="styles/legend/_2_53.png" /> Заводская_2'
            });
var format__1_54 = new ol.format.GeoJSON();
var features__1_54 = format__1_54.readFeatures(json__1_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_54.addFeatures(features__1_54);
var lyr__1_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1_54, 
                style: style__1_54,
                interactive: true,
                title: '<img src="styles/legend/_1_54.png" /> Кукушка_1'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr__55_1.setVisible(true);lyr__54_2.setVisible(true);lyr__53_3.setVisible(true);lyr__52_4.setVisible(true);lyr__51_5.setVisible(true);lyr_49_6.setVisible(true);lyr_48_7.setVisible(true);lyr_47_8.setVisible(true);lyr_46_9.setVisible(true);lyr_45_10.setVisible(true);lyr__44_11.setVisible(true);lyr__43_12.setVisible(true);lyr_42_13.setVisible(true);lyr__41_14.setVisible(true);lyr__40_15.setVisible(true);lyr__39_16.setVisible(true);lyr__38_17.setVisible(true);lyr__37_18.setVisible(true);lyr__36_19.setVisible(true);lyr__35_20.setVisible(true);lyr__34_21.setVisible(true);lyr__33_22.setVisible(true);lyr__32_23.setVisible(true);lyr__31_24.setVisible(true);lyr__30_25.setVisible(true);lyr__29_26.setVisible(true);lyr__28_27.setVisible(true);lyr__27_28.setVisible(true);lyr_A_26_29.setVisible(true);lyr__25_30.setVisible(true);lyr__24_31.setVisible(true);lyr__23_32.setVisible(true);lyr_22_33.setVisible(true);lyr__21_34.setVisible(true);lyr__20_35.setVisible(true);lyr__19_36.setVisible(true);lyr__18_37.setVisible(true);lyr__17_38.setVisible(true);lyr__16_39.setVisible(true);lyr__15_40.setVisible(true);lyr__14_41.setVisible(true);lyr__13_42.setVisible(true);lyr__12_43.setVisible(true);lyr__10_44.setVisible(true);lyr__11_45.setVisible(true);lyr__9_46.setVisible(true);lyr__8_47.setVisible(true);lyr__7_48.setVisible(true);lyr_6_49.setVisible(true);lyr____5_50.setVisible(true);lyr___4_51.setVisible(true);lyr__3_52.setVisible(true);lyr__2_53.setVisible(true);lyr__1_54.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr__55_1,lyr__54_2,lyr__53_3,lyr__52_4,lyr__51_5,lyr_49_6,lyr_48_7,lyr_47_8,lyr_46_9,lyr_45_10,lyr__44_11,lyr__43_12,lyr_42_13,lyr__41_14,lyr__40_15,lyr__39_16,lyr__38_17,lyr__37_18,lyr__36_19,lyr__35_20,lyr__34_21,lyr__33_22,lyr__32_23,lyr__31_24,lyr__30_25,lyr__29_26,lyr__28_27,lyr__27_28,lyr_A_26_29,lyr__25_30,lyr__24_31,lyr__23_32,lyr_22_33,lyr__21_34,lyr__20_35,lyr__19_36,lyr__18_37,lyr__17_38,lyr__16_39,lyr__15_40,lyr__14_41,lyr__13_42,lyr__12_43,lyr__10_44,lyr__11_45,lyr__9_46,lyr__8_47,lyr__7_48,lyr_6_49,lyr____5_50,lyr___4_51,lyr__3_52,lyr__2_53,lyr__1_54];
lyr__55_1.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__54_2.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__53_3.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__52_4.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__51_5.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_49_6.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_48_7.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_47_8.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_46_9.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_45_10.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__44_11.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__43_12.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_42_13.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__41_14.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__40_15.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__39_16.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__38_17.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__37_18.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__36_19.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__35_20.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__34_21.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__33_22.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__32_23.set('fieldAliases', {'Длина': 'Длина', 'Имя': 'Имя', });
lyr__31_24.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__30_25.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__29_26.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__28_27.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__27_28.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_A_26_29.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__25_30.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__24_31.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__23_32.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr_22_33.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__21_34.set('fieldAliases', {'Длина': 'Длина', 'Имя': 'Имя', });
lyr__20_35.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__19_36.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__18_37.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__17_38.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__16_39.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__15_40.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__14_41.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__13_42.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__12_43.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__10_44.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__11_45.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__9_46.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__8_47.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__7_48.set('fieldAliases', {'Длина': 'Длина', 'Имя': 'Имя', });
lyr_6_49.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr____5_50.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr___4_51.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__3_52.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__2_53.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__1_54.set('fieldAliases', {'Имя': 'Имя', 'Длина': 'Длина', });
lyr__55_1.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__54_2.set('fieldImages', {'Имя': 'TextEdit', 'Длина': '', });
lyr__53_3.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__52_4.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__51_5.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_49_6.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_48_7.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_47_8.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_46_9.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_45_10.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__44_11.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__43_12.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_42_13.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__41_14.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__40_15.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__39_16.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__38_17.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__37_18.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__36_19.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__35_20.set('fieldImages', {'Имя': 'TextEdit', 'Длина': '', });
lyr__34_21.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__33_22.set('fieldImages', {'Имя': 'TextEdit', 'Длина': '', });
lyr__32_23.set('fieldImages', {'Длина': 'TextEdit', 'Имя': 'TextEdit', });
lyr__31_24.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__30_25.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__29_26.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__28_27.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__27_28.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr_A_26_29.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__25_30.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__24_31.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__23_32.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr_22_33.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__21_34.set('fieldImages', {'Длина': 'TextEdit', 'Имя': 'TextEdit', });
lyr__20_35.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__19_36.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__18_37.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__17_38.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__16_39.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__15_40.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__14_41.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__13_42.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__12_43.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__10_44.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__11_45.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__9_46.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr__8_47.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr__7_48.set('fieldImages', {'Длина': '', 'Имя': '', });
lyr_6_49.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr____5_50.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr___4_51.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr__3_52.set('fieldImages', {'Имя': '', 'Длина': '', });
lyr__2_53.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__1_54.set('fieldImages', {'Имя': 'TextEdit', 'Длина': 'TextEdit', });
lyr__55_1.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__54_2.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__53_3.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__52_4.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__51_5.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_49_6.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_48_7.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_47_8.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_46_9.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_45_10.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__44_11.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__43_12.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_42_13.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__41_14.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__40_15.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__39_16.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__38_17.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__37_18.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__36_19.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__35_20.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__34_21.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__33_22.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__32_23.set('fieldLabels', {'Длина': 'no label', 'Имя': 'inline label', });
lyr__31_24.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__30_25.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__29_26.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__28_27.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__27_28.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_A_26_29.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__25_30.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__24_31.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__23_32.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr_22_33.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__21_34.set('fieldLabels', {'Длина': 'no label', 'Имя': 'inline label', });
lyr__20_35.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__19_36.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__18_37.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__17_38.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__16_39.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__15_40.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__14_41.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__13_42.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__12_43.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__10_44.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__11_45.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__9_46.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__8_47.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__7_48.set('fieldLabels', {'Длина': 'inline label', 'Имя': 'no label', });
lyr_6_49.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr____5_50.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr___4_51.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__3_52.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__2_53.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__1_54.set('fieldLabels', {'Имя': 'no label', 'Длина': 'inline label', });
lyr__1_54.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});