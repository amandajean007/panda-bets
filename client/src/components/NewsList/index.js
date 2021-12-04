import React from 'react';
import './style.css';


import '../../App.css';
import 'antd/dist/antd.css';


// Where the info is going to be displayed
var tableBody = document.getElementById('news-table');

let APIKey = "c8c151ef5d554390b08b821e62264b1f"

function todaysNews() {
    let queryURL = "https://api.sportsdata.io/v3/nfl/news-rotoballer/json/RotoBallerPremiumNews?key=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            if(response.status !== 200){
                console.log(response);
            } else {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data);
            
          
            document.getElementById("news")= data;
    
            // Appending the link to the tabledata and then appending the tabledata to the tablerow
            // The tablerow then gets appended to the tablebody
            tableData.appendChild(newsData);
            createTableRow.appendChild(tableData);
            tableBody.appendChild(createTableRow);
              
        });
}

todaysNews();


const News = (news) => {
  if (!news.length) {
    return <h3>No News</h3>;
  }
    return (
      <header className="text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div id="news">heres goes the news</div>
        </div>
      </header>
    );
};

export default News;