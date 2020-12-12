// Reads in json from data.js and uses d3.js to create table and append data.
// Takes user inputs and filters data.js.


// Import json from data.js.
var reports = data;

// Select element from index.html where table components will be appended.
var tbody = d3.select("tbody");

// Loop over json, converting it to array of objects.
reports.forEach
(
    report =>
    {
        // Append blank row to body of table.
        row = tbody.append("tr");

        // Extract array of values from "report" object.
        // Loop through the new array:
        //     1. Assign each value to a variable called "value"
        //     2. For each value, append blank cell to table and append value to cell.
        Object.values(report).forEach
        (
            value => 
            {
                var cell = row.append("td");
                cell.text(value);
            }
        )
    }
);



// Select button tag to add functionality.
var submitButton = d3.select("button");

// Click handler
submitButton.on
(
    "click", function()
    {
        // Prevent automatic page refresh.
        d3.event.preventDefault();

        // Get user inputs.
        var userDate = d3.select("#datetime").property("value");
        var userCity = d3.select("#city").property("value");
        var userState = d3.select("#state").property("value");
        var userCountry = d3.select("#country").property("value");
        var userShape = d3.select("#shape").property("value");

        // Get filtered array based on user input.
        var filteredReports = reports.filter
        (
            report => report.datetime === userDate
                    
        );
        console.log(filteredReports)

        // Build table from filtered array.

    }
)

// && report.city === userCity
//                     && report.state === userState
//                     && report.country === userCountry
//                     && report.shape === userShape