// from data.js
var tableData = data;

// define function for pushing table to html
function resultsPush(list) {
    var table = d3.select("tbody")
    list.map((instance) => {
        var tableRow = table.append("tr")
        tableRow.append("td").text(instance.datetime)
        tableRow.append("td").text(instance.city)
        tableRow.append("td").text(instance.state)
        tableRow.append("td").text(instance.country)
        tableRow.append("td").text(instance.shape)
        tableRow.append("td").text(instance.durationMinutes)
        tableRow.append("td").text(instance.comments)
        tableRow.append("td").text(instance.datetime)
    })
}

// push initial table w/o filter
resultsPush(tableData)

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("input");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// function to read input and filter table
function runEnter() {

    // initialize results array
    var results = []
    // removes initial table and all previous filters
    d3.selectAll("td").remove()

    // defines input element and value
    var inputElement = d3.select(".form-control")
    var inputValue = inputElement.property("value")

    // conditional if input element left blank
    if (inputValue === "") {
        results = tableData
    }

    // if filter inputed code looks through table to find matching dates
    else {
    tableData.map((instance2) => {
        if (instance2.datetime === inputValue) {
            // if dates match push to results array
            results.push(instance2)
        }
    })}
    // read results to log and push to html
    console.log(results)
    resultsPush(results)
}
