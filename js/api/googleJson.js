try {
   
jQuery.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1PGUSst1qyFw-qrqRcWrIMcO16l7yUUonJtrG9xoWIfg/od6/public/values?alt=json", function(data) {
  //first row "title" column
  console.log(data);
  //console.log(data.feed.entry[0]['gsx$semanas']['$t']);
  var lwsls = parseInt(data.feed.entry[0]['gsx$qtyofstylesactive']['$t']);

var lwsls1 = parseInt(data.feed.entry[1]['gsx$qtyofstylesactive']['$t']);


var doughnutOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    
    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout : 50,
    
    //Boolean - Whether we should animate the chart 
    animation : true,
    
    //Number - Amount of animation steps
    animationSteps : 100,
    
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    
    //Function - Will fire on animation completion.
    onAnimationComplete : function(){
        alert("completed");
    }
}

  var doughnutData = [
                {
                    value: lwsls,
                    color:"#F7464A"
                },
                {
                    value: lwsls1,
                    color:"#949FB1"
                }
                  
            ];

    var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData,doughnutOptions);

});


} catch (e) {
    try {
        if (window.debug) {
            console.log(e)
        }
    } catch (ex) {
    }
};
