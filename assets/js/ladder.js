// RO'Lyfe Option & Stock Ladder™
// Loads AI ranked opportunities from data/ladder.json


document.addEventListener("DOMContentLoaded", function () {

loadLadder();

});



async function loadLadder() {

try {


const response = await fetch("../../data/ladder.json");


const data = await response.json();


const ladder = data.ladder;


const container = document.getElementById("ladder-results");


if (!container) return;



container.innerHTML = "";



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
