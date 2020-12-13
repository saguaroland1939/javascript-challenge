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



// Select submit button element to add functionality.
var submitButton = d3.select("#filter-btn");

// Click handler filters table based on user input.
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
        var userShape = d3.select("#shape").property("value");

        // Create blank array to hold filtered reports.
        var filteredReports = reports;

         // If user provides input, use it to filter. E.g., if user has entered a date, filter based on date.
        if(userDate !== "")
        {
            filteredReports = filteredReports.filter(report => report.datetime === userDate);
        }
        
        if(userCity !== "")
        {
            filteredReports = filteredReports.filter(report => report.city === userCity);

        }

        if(userState !== "")
        {
            filteredReports = filteredReports.filter(report => report.state === userState);

        }

        if(userShape !== "")
        {
            filteredReports = filteredReports.filter(report => report.shape === userShape);

        }

        console.log(filteredReports)

        // Delete all table rows.
        d3.selectAll("tr").remove()

        // Build new table from filtered array.
        // Loop over json, converting it to array of objects.
        filteredReports.forEach
        (
            filteredReport =>
            {
                // For each object in reports array, append a blank row to body of table.
                row = tbody.append("tr");

                // For each object in reports array, also extract its values and store in an array of values.
                // Loop through the array of values:
                //     1. Assign each value to a variable called "value"
                //     2. For each value in report object, append a blank cell to table and 
                //        append corresponding value from report object to that cell.
                Object.values(filteredReport).forEach
                (
                    value => 
                    {
                        var cell = row.append("td");
                        cell.text(value);
                    }
                ); // forEach over array of values in one object
            } // arrow function
        ); // forEach over list
    } // click handler
) // event listener


// Select reset button tag to add functionality.
var resetButton = d3.select("reset-btn");

// Click handler resets table to full dataset.
resetButton.on
(
    "click", function()
    {
        // Prevent automatic page refresh.
        d3.event.preventDefault();

        // Remove any rows present.
        d3.selectAll("tr").remove();

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
        )
    }
);