
var tableData = data;

tbody = d3.select("tbody")


function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)    
    })
})}

displayData(tableData)

var date_input = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
   
    d3.event.preventDefault();
    
    console.log(date_input.property("value"));
    
    var filtered_tbl = tableData.filter(sighting => sighting.datetime===date_input.property("value"))

    displayData(filtered_tbl);
}

date_input.on("change", clickSelect)
