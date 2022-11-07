const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(8080, () => { console.log("Listening on port 8080"); });

// app.get("/", function(request, response) {
//     console.log("get request?");

//     const html = `
//         <h1>Hello, World! New web page, who is this?</h1>

//         <img src="bulldog_logo.jpg" width="100" alt="logo">
//             <!--reminder; no method attribute specified (meaning it submits to itself) so it si GET-->
//             <form action="submission.html">
//                 <!--first name submission-->
//                 <p>
//                     <label for="first">First Name</label>
//                     <input type="text" id="first" name="first" placeholder="First Name ONLY">
//                     <!--name and id do NOT have to be the same-->
//                     <!--don't forget to use "name" attribute!!-->
//                 </p>

//                 <!--last name submission-->
//                 <p>
//                     <label for="last">Last Name</label>
//                     <input type="text" id="last" name="last" placeholder="Last Name ONLY">
//                 </p>

//                 <!--text area submission-->
//                 <p>
//                     <label for="area">Tell me a story...</label>
//                     <textarea id="area" name="area" placeholder="Enter story here" type="textarea" rows="3" cols="20"></textarea>
//                 </p>
                
//                 <!--radio selection submission-->
//                 <p>
//                     Please choose your favorite dog from the options below:
//                     <br>
//                     <input type="radio" id="dogs" name="favDog" value="Rottweiler">
//                     <label for="dogs">Rottweiler</label><br>
//                     <input type="radio" id="dogs" name="favDog" value="German Sheperd">
//                     <label for="dogs">German Sheperd</label><br>
//                     <input type="radio" id="dogs" name="favDog" value="Golden Retriever">
//                     <label for="dogs">Golden Retriever</label><br>
//                     <input type="radio" id="dogs" name="favDog" value="Poodle">
//                     <label for="dogs">Poodle</label><br>
//                 </p>

//                 <!--checkbox submission-->
//                 <p>
//                     Do you see what I did there?
//                     <input type="checkbox" id="checkbox" name="checkbox" value="Yes">
//                     <label for="checkbox">Yes</label><br>
//                     <input type="checkbox" id="checkbox2" name="checkbox2" value="No">
//                     <label for="checkbox2">No</label>
//                 </p>

//                 <!--dropdown submission-->
//                 <p>
//                     <label for="cars">Choose a car:</label>

//                     <select name="cars" id="cars">
//                     <option value="volvo">Volvo</option>
//                     <option value="saab">Saab</option>
//                     <option value="mercedes">Mercedes</option>
//                     <option value="audi">Audi</option>
//                     </select>
//                 </p>


//                 <input type="submit" value="Submit Data">

//                 <p> <a href="../../">Click here</a> to go back to the index! </p>

//             </form>
//             `
// });

app.post("/submission.html", (req, res) => {
    // const html =
    // `
    //     <!DOCTYPE html>
    //     <html lang="en">

    //     <head>
    //         <meta charset="utf-8">
    //         <title>Submission Page</title>
    //         <!-- <link rel="icon" href="favicon.png"> -->

    //         <style>
    //             table,
    //             th {
    //                 border: 1px solid black;

    //             }

    //             td {
    //                 border: 1px dotted black;
    //             }
    //         </style>
    //         <script>
    //             /*
    //                 This script segment is intended to simulate a form
    //                 getting data from a form post on the referring page.
    //                 We are only doing this for now until we go over a 
    //                 web server implementation that contains a server side
    //                 presence.
    //             */
    //             window.onload = function () {
    //                 //(GET method) get your query string values by field
    //                 var firstName = GetURLParameterValue("first");
    //                 var lastName = GetURLParameterValue("last");
    //                 var basketballPlayer = GetURLParameterValue("basketballPlayer");
    //                 //populate desired HTML elements with desired values
    //                 //we pass in the id name of the HTML element we want
    //                 //to populate with the query string text
    //                 // (e.g., id="fname" is found on the HTML element we
    //                 // want to populate with text)
    //                 document.getElementById("first").textContent = firstName;
    //                 document.getElementById("last").textContent = lastName;
    //                 document.getElementById("basketballPlayer").textContent = basketballPlayer;
    //             };

    //             //Function retrieves the requested GET parameter value from
    //             //the query string. Input is the field name for the 
    //             //field-value pair in the query string,
    //             //e.g., field=value -> first=bob
    //             function GetURLParameterValue(searchParameter) {
    //                 var queryString = window.location.search.substring(1);
    //                 var URLFieldValues = queryString.split('&');
    //                 for (var i = 0; i < URLFieldValues.length; i++) {
    //                     var parameterValues = URLFieldValues[i].split('=');
    //                     if (parameterValues[0] == searchParameter) {
    //                         return parameterValues[1];
    //                     }
    //                 }
    //             };
    //         </script>

    //     </head>

    //     <body>
    //         <h1>Submission Results Page</h1>
    //         <table>
    //             <caption>First and Last Name Submitted on the Previous Page</caption>
    //             <tr>
    //                 <th>First Name</th>
    //                 <th>Last Name</th>
    //                 <th>Favorite Basketball Player</th>
    //             </tr>
    //             <tr>
    //                 <td id="first">${req.body.first}</td>
    //                 <td id="last">${req.body.last}</td>
    //                 <td id="basketballPlayer"></td>
    //             </tr>
    //         </table>
    //     </body>

    //     </html>
    // `;
    // res.send(html);

    let formResult = {
        first: req.body.first,
        last: req.body.last,
    };

    res.render("submission.ejs", formResult);

});