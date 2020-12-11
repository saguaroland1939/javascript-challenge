// Part 1 reads in json from data.js and uses d3.js to create table and append data.
// Part 2 takes user inputs and filters data.js.


// Part 1
// Import json from data.js.
var reports = data;
// Select tag where table components will be appended.
var tbody = d3.select("tbody");

// Loop over json to control how many rows will be created. Convert json to array of objects, each assigned to an object called "report".
reports.forEach(report =>
{
     // Append blank row to tbody.
    row = tbody.append("tr");

    // Extract array of values from "report" object and loop through the new array to determine how many cells to create.
    // Assign each value to a variable called "value".
    Object.values(report).forEach(function(value) {
        var cell = row.append("td");
        cell.text(value);
    })
});

// Loop over elements in data array.
// data.forEach(element => {
//     // Append blank row to tbody tag. Store the row as an object that will be used to create cells.
//     var row = tbody.append("tr");
// });

    // // Convert each json object to array of values which will be plugged into the blank rows. Loop over array.
    // Object.values(row).forEach(function (values) {

    //     // Add a blank cell to row and store as a variable that will be used to append text.
    //     var cell = tbody.append("td");

    //     // Append text to cell.
    //     cell.text(value);
    //     });
    // });




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

// For each key/value pair in each object, append a cell to table body.

// Loop through objects in data.
// data.forEach
// (
//     // Function to rename "data" to "report" and loop through objects in report.
//     function(report)
//     {
//         // Convert report into array of key/value pairs and loop through.
//         Object.entries(report).forEach
//             (   
//                 // Nested function to append a cell for each key/value pair.
//                 function([key, value])
//                     {
//                         tbody.append("td");
//                     } // inner function
//             ) // inner loop
//     } // outer function
// ); // outer loop

// // Original syntax from video.
// data.forEach(function(object)
// {
//     var row = tbody.append("tr");

//     Object.entries(weatherReport).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = tbody.append("td");
//         cell.text(value);
//     });
// });