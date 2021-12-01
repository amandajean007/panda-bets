import React from 'react';
import '../App.css';

// Where the info is going to be displayed
// var tableBody = document.getElementById('news-table');

// let APIKey = "c8c151ef5d554390b08b821e62264b1f"

// function todaysNews() {
//     let queryURL = "https://api.sportsdata.io/v3/nfl/news-rotoballer/json/RotoBallerPremiumNews?key=" + APIKey;
//     fetch(queryURL)
//         .then(function (response) {
//             if(response.status !== 200){
//                 console.log(response);
//             } else {
//                 return response.json();
//             }
//         })
//         .then(function (data) {
//             console.log(data);
            
          
//             // Creating elements, tablerow, tabledata, and anchor
//             var createTableRow = document.createElement('div');
//             var tableData = document.createElement('div');
//             var newsData = document.createElement('div');
    
//             // Setting the text of link and the href of the link
//             newsData.textContent = data;
    
//             // Appending the link to the tabledata and then appending the tabledata to the tablerow
//             // The tablerow then gets appended to the tablebody
//             tableData.appendChild(newsData);
//             createTableRow.appendChild(tableData);
//             tableBody.appendChild(createTableRow);
              
//         });
// }

// todaysNews();


const News = () => {
    return (
        <main>
            <div id="news-table">DOES THIS EVEN WORK</div>
        </main>
    );
};

export default News;