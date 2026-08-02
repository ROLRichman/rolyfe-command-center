/* ==========================================
   RO'LYFE PRIMARY WATCHLIST ENGINE™
   Trading Center Watchlist Display
========================================== */


const watchlistFile = "../../data/watchlist.json";



async function loadPrimaryWatchlist(){


    try {


        const response = await fetch(watchlistFile);


        const data = await response.json();


        const stocks = data.watchlist || data;


        displayWatchlist(stocks);



    } catch(error){


        console.log(
            "Watchlist Loading Error:",
            error
        );


    }


}




function displayWatchlist(stocks){


    const container =
    document.getElementById(
    "watchlist"
    );



    if(!container){

        return;

    }



    container.innerHTML = "";



    stocks.forEach(stock => {



        container.innerHTML += `

        <div class="card">


            <h3>
            📈 ${stock.symbol}
            </h3>


            <p>
            ${stock.name}
            </p>


            <p>
            Sector:
            ${stock.sector}
            </p>


            <p>
            Type:
            ${stock.type}
            </p>


            <button onclick="openStock('${stock.symbol}')">

            View Setup

            </button>


        </div>


        `;



    });



}




function openStock(symbol){


    alert(

    "RO'Lyfe Trading View\n\n"

    +

    symbol

    +

    "\n\nChart integration coming next."

    );


}




document.addEventListener(

"DOMContentLoaded",

()=>{


    loadPrimaryWatchlist();


}

);
