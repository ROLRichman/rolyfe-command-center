/* ==========================================
   RO'LYFE MARKET TICKER ENGINE™
   Trading Center Moving Market Strip
========================================== */


const tickerURL = "../../data/ticker.json";



async function loadTicker(){


    try {


        const response = await fetch(tickerURL);


        const data = await response.json();


        const ticker =
        data.ticker || data;



        displayTicker(ticker);



    } catch(error){


        console.log(
            "Ticker Loading Error:",
            error
        );


    }


}




function displayTicker(items){


    const container =
    document.getElementById(
        "market-ticker"
    );



    if(!container){

        return;

    }



    container.innerHTML = "";



    items.forEach(stock => {



        container.innerHTML += `


        <div class="ticker-item">


            <strong>
            ${stock.symbol}
            </strong>


            <span>
            ${stock.name}
            </span>


            <span>
            Price:
            ${stock.price || "--"}
            </span>


            <span>
            Change:
            ${stock.change || "--"}
            </span>


            <span>
            ${stock.direction}
            </span>


        </div>


        `;


    });


}




document.addEventListener(

"DOMContentLoaded",

()=>{


    loadTicker();


}

);
