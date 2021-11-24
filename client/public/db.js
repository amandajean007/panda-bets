// Open/Create Database
let db;

const request = indexedDB.open("pandabets", 1);
console.log("pandabets");
request.onsuccess = function(event) {
    console.log('success');
    db = event.target.result;
    if (navigator.onLine) {
        console.log('Backend online.');
        checkDatabase();
    }
};

// Create an objectStore for this database
request.onupgradeneeded = function (event) {
    console.log('Upgrade needed in IndexDB');
    db = event.target.result;
    if (db.objectStoreNames.length === 0) {
        db.createObjectStore("bets", {
        autoIncrement: true
    });
};
}

request.onerror = (err) => {
    console.log(err.message);
};



// This function is called in index.js when the user creates a bet while offline.
const saveRecord = (record) => {
    console.log("save record invoked");
    // create a bet on the pending db with readwrite access
    const bet = db.bet(["bets"], "readwrite"); // ==> Object { stores inside }
    
    // access your pending object store
    const store = bet.objectStore("bets");
    
    // add record to your store with add method.
    store.add(record);
};

// called when user goes online to send bets stored in db to server
function checkDatabase() {
    console.log('checkDatabase function called');
    // open a bet on your pending db
    let bet = db.bet(["bets"], "readwrite");

    // access your pending object store
    const store = bet.objectStore("bets");

    // get all records from store and set to a variable
    const getAll = store.getAll();

    getAll.onsuccess = () => {
        if (getAll.result.length > 0) {
            fetch("/api/bet/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((response) => {
                // if successful, open a bet on your pending db
                if (response.length !== 0) {
                    bet = db.bet(["bets"], "readwrite");
                }
                // access your pending object store
                const store = bet.objectStore("bets");

                // clear all items in your store
                store.clear();
                console.log("clearing store");
            });
        }
    };
}

request.onsuccess = function (e) {
    console.log('success');
    db = e.target.result;
  
    if (navigator.onLine) {
      console.log('Backend online! 🗄️');
      checkDatabase();
    }
  };

// listen for app coming back online
window.addEventListener("online", checkDatabase);