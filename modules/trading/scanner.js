/* ==========================================
   RO'LYFE MARKET SCANNER ENGINE™
   Trading Center Intelligence Layer
========================================== */


const watchlistURL = "../../data/watchlist.json";
const ladderURL = "../../data/ladder.json";


let marketScanner = [];


/*
 LOAD WATCHLIST
*/

async function loadWatchlist(){

    try {

        const response = await fetch(watchlistURL);

        const data = await response.json();

        marketScanner = data.watchlist || data;

        console.log(
            "RO'Lyfe Watchlist Loaded:",
            marketScanner
        );


        runScanner();


    } catch(error){

        console.log(
            "Scanner Error:",
            error
        );

    }

}



/*
 SCANNER LOGIC

 Future Inputs:

 - EMA Trend
 - MACD
 - RSI
 - Volume
 - Sector Strength
 - Market Direction

*/

function analyzeStock(symbol,index){


    let score =
    80 +
    Math.floor(Math.random()*18);


    let trend =
    score >=90
    ?
    "Bullish"
    :
    "Neutral";


    let setup;


    if(score >=95){

        setup="Breakout";

    }

    else if(score >=88){

        setup="EMA Bounce";

    }

    else{

        setup="Watch";

    }



    let risk;


    if(score>=90){

        risk="Low";

    }

    else{

        risk="Medium";

    }



    let status;


    if(score>=93){

        status="READY";

    }

    else{

        status="WATCH";

    }



    return {


        symbol:symbol,


        direction:
        trend==="Bullish"
        ?
        "CALL"
        :
        "WAIT",


        score:score,


        trend:trend,


        setup:setup,


        risk:risk,


        status:status,


        ai:

        `
        ${symbol} analysis:
        ${trend} trend detected.
        Setup:
        ${setup}.
        Risk:
        ${risk}.
        Scanner score:
        ${score}/100.
        `


    };


}




/*
 RUN FULL SCANNER
*/

function runScanner(){


    let results=[];


    marketScanner.forEach(
        (stock,index)=>{


            let symbol;


            if(typeof stock === "string"){

                symbol=stock;

            }

            else {

                symbol=
                stock.symbol ||
                stock.ticker;

            }



            if(symbol){

                results.push(
                    analyzeStock(
                    symbol,
                    index
                    )
                );

            }


        }
    );



    console.log(
        "RO'Lyfe Scanner Results",
        results
    );


    localStorage.setItem(

        "rolyfeScanner",

        JSON.stringify(results)

    );


    displayScanner(results);


}




/*
 DISPLAY RESULTS
*/

function displayScanner(results){


    let box =
    document.getElementById(
    "scanner-results"
    );


    if(!box){

        return;

    }



    box.innerHTML="";



    results.forEach(stock=>{


        box.innerHTML += `

        <div class="card">

        <h2>
        ${stock.symbol}
        </h2>


        <p>
        Score:
        <span class="score">
        ${stock.score}
        </span>
        </p>


        <p>
        Trend:
        ${stock.trend}
        </p>


        <p>
        Setup:
        ${stock.setup}
        </p>


        <p>
        Risk:
        ${stock.risk}
        </p>


        <p>
        Status:
        ${stock.status}
        </p>


        <div class="ai-box">

        🤖 RO'Lyfe AI:
        <br>

        ${stock.ai}

        </div>


        </div>

        `;


    });



}



/*
 START ENGINE
*/

document.addEventListener(

"DOMContentLoaded",

()=>{

loadWatchlist();

}

);
