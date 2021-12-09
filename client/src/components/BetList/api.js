// const router = require("express").Router();
// const Bet = require("../../../../server/models/Bet");

// router.post("/api/bet", ({body}, res) => {
//   Bet.create(body)
//     .then(dbBet => {
//       res.json(dbBet);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.post("/api/bet/bulk", ({body}, res) => {
//   Bet.insertMany(body)
//     .then(dbBet => {
//       res.json(dbBet);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.get("/api/bet", (req, res) => {
//   Bet.find({}).sort({date: -1})
//     .then(dbBet => {
//       res.json(dbBet);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// module.exports = router;


const APIKey = "1iZfRzGWmKP6CEHVDZYGyYQM6AZAkWKxiL4v5mdYqVItbbxl9tymg18pOzcMRvdj"
export default function getBets() {
    let queryURL = "https://data.mongodb-api.com/app/data-mnksa/endpoint/data/beta?key=" + APIKey;
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
            
          
            // document.getElementById("news")= data;
    
            // Appending the link to the tabledata and then appending the tabledata to the tablerow
            // The tablerow then gets appended to the tablebody
            tableData.appendChild(newsData);
            createTableRow.appendChild(tableData);
            tableBody.appendChild(createTableRow);
              
        });
}

