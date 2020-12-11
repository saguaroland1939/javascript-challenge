// Reads in json from data.js and uses d3.js to create table and append data.
// Takes user inputs and filters data.js.


// Import json from data.js.
var reports = data;

// Select tag where table components will be appended.
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





var arrayToDisplay = [];

// function selectByDate(sighting, date) {
//    if (sighting.datetime === date)
//      {
//          return sighting object;
//      };
// }

// for (var i: 0, var i: tableData.length, i++)
//   {
//      sighting object = selectByDate(tableData[i], date);
//       arrayToDisplay.append(sighting object);
//   }