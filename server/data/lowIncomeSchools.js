'use strict'

var sodaUrl = "https://data.delaware.gov/resource/72wj-gmav.json";
var array = [];
var b = $.getJSON(sodaUrl, function(rawData) {
    for (var i=0; i<rawData.length; i+=2) {
        if (rawData[i+1] && rawData[i]) {
            if (rawData[i+1].schoolname!=rawData[i].schoolname) {
//                console.log ("YOU MESSED UP");
//                console.log (rawData[i+1].schoolname);
//                console.log (rawData[i].schoolname);
//                console.log ("----");
                i=i-1;
            } else {
                if (rawData[i+1].studentcount/rawData[i].studentcount > 0.5) {
                    //console.log(rawData[i+1].schoolname);
                    //console.log(rawData[i+1].studentcount/rawData[i].studentcount);
                    array.push(rawData[i+1]);
                }
            }
        }
    }
    console.log(array.length);
})


var directoryUrl = "https://data.delaware.gov/resource/2efz-9zk3.json";
var schools = $.getJSON(directoryUrl, function(school) {
//    console.log("AHAHHAHAHAHA");
//    console.log(school.length);
    for(var j=0; j<school.length; j++) {
        //console.log(j);
        //console.log(school[j].schoolname);
           for (let k=0; k<array.length;k++) {
               if (school[j].schoolname==array[k].schoolname) {
                   console.log("FOUND");
                   array[k].lat = school[j].geocoded_location;
                   console.log(school[j].geocoded_location);
               }
           }
    }
})

console.log(array);
