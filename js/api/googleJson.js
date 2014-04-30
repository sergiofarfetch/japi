try {
   
jQuery.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/1PGUSst1qyFw-qrqRcWrIMcO16l7yUUonJtrG9xoWIfg/od6/public/values?alt=json", function(data) {
  //first row "title" column
    console.log(data);
    //console.log(data.feed.entry[0]['gsx$semanas']['$t']);
    var lwsls = parseInt(data.feed.entry[0]['gsx$qtyofstylesactive']['$t']);

    var lwsls1 = parseInt(data.feed.entry[1]['gsx$qtyofstylesactive']['$t']);


nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })    //Specify the data accessors.
      .y(function(d) { return d.value })
      .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
      .tooltips(false)        //Don't show tooltips
      .showValues(true)       //...instead, show the bar value right on top of each bar.
      .transitionDuration(350)
      ;

  d3.select('#legendCanvas svg')
      .datum(exampleData())
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

//Each bar represents a single discrete quantity.
function exampleData() {
 return  [ 
    {
      key: "Cumulative Return",
      values: [
        { 
          "label" : "A Label" ,
          "value" : lwsls
        } , 
        { 
          "label" : "B Label" , 
          "value" : lwsls1
        } 
      ]
    }
  ]

}



/*
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
        $('#legendCanvas').hide().html('lwsls - ' +lwsls).fadeIn();
        $('#legendCanvas1').hide().html('lwsls1 - ' +lwsls1).fadeIn();
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
*/
});


} catch (e) {
    try {
        if (window.debug) {
            console.log(e)
        }
    } catch (ex) {
    }
};
