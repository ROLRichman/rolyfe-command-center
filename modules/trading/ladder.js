/* ==========================================
   RO'LYFE OPTION & STOCK LADDER™
   Intelligence Display Engine
========================================== */


function loadLadder(){


    let data = localStorage.getItem(
        "rolyfeScanner"
    );


    let results =
    data
    ?
    JSON.parse(data)
    :
    [];



    displayLadder(results);


}



/*
 DISPLAY LADDER RESULTS
*/

function displayLadder(results){


    let table =
    document.getElementById(
    "ladder-results"
    );



    if(!table){

        return;

    }



    table.innerHTML="";



    results
    .sort(
        (a,b)=>
        b.score-a.score
    )
    .forEach(stock=>{


        table.innerHTML += `

        <tr>

        <td>
        ${stock.symbol}
        </td>


        <td>
        ${stock.direction}
        </td>


        <td>

        <span class="score">

        ${stock.score}

        </span>

        </td>


        <td>
        ${stock.trend}
        </td>


        <td>
        ${stock.setup}
        </td>


        <td>
        ${stock.risk}
        </td>


        <td>
        ${stock.status}
        </td>


        <td>

        <button onclick="showAI('${stock.symbol}')">

        🤖 AI

        </button>

        </td>


        </tr>

        `;


    });


}



/*
 AI POPUP
*/

function showAI(symbol){


    let results =
    JSON.parse(
        localStorage.getItem(
        "rolyfeScanner"
        )
    );



    let stock =
    results.find(
        item =>
        item.symbol === symbol
    );



    if(stock){


        alert(

        "RO'Lyfe AI Analysis\n\n"

        +

        stock.ai

        );

    }


}



/*
 START LADDER
*/

document.addEventListener(

"DOMContentLoaded",

()=>{

loadLadder();

}

);
ladder.forEach((stock, index) => {


let statusClass = "";


if(stock.status === "READY"){
statusClass = "ready";
}

else if(stock.status === "WATCH"){
statusClass = "watch";
}

else{
statusClass = "avoid";
}



const card = document.createElement("div");


card.className = "ladder-card";



card.innerHTML = `

<h3>
🥇 ${index + 1}. ${stock.symbol}
</h3>


<p>
<strong>Direction:</strong> ${stock.direction}
</p>


<p>
<strong>RO'Lyfe Score:</strong>
${stock.score}/100
</p>


<p>
<strong>Trend:</strong>
${stock.trend}
</p>


<p>
<strong>Setup:</strong>
${stock.setup}
</p>


<p>
<strong>Risk:</strong>
${stock.risk}
</p>


<p class="${statusClass}">
<strong>Status:</strong>
${stock.status}
</p>



<button onclick='showTradeDetails(${JSON.stringify(stock)})'>

View AI Analysis

</button>


`;



container.appendChild(card);



});



}

catch(error){

console.error(
"RO'Lyfe Ladder Error:",
error
);


document.getElementById("ladder-results").innerHTML =

"⚠️ Unable to load ladder data.";

}



}




function showTradeDetails(stock){


const details = document.getElementById("trade-details");


if(!details) return;



details.innerHTML = `


<h3>
${stock.symbol} ${stock.direction}
</h3>


<p>
🪜 RO'Lyfe Score:
<strong>${stock.score}/100</strong>
</p>


<p>
📈 Setup:
${stock.setup}
</p>


<p>
🟢 Trend:
${stock.trend}
</p>


<p>
⚠ Risk:
${stock.risk}
</p>


<hr>


<p>
🤖 AI Explanation:
</p>


<p>
${stock.ai}
</p>


<p>

Entry:
${stock.entry || "Waiting for setup"}

</p>


<p>

Stop:
${stock.stop || "Not set"}

</p>


<p>

Target 1:
${stock.target1 || "Not set"}

</p>


<p>

Target 2:
${stock.target2 || "Not set"}

</p>


<p>

Target 3:
${stock.target3 || "Not set"}

</p>


`;

}
