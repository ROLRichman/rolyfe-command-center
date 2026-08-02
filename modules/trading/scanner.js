// RO'Lyfe AI Market Scanner™
// Scoring Engine Version 1
// Calculates setup strength from trading conditions


function calculateROLyfeScore(stock) {


let score = 0;



// Trend Direction
if(stock.trend === "Bullish"){
    score += 20;
}



// 205 EMA Alignment
if(stock.ema205 === true){
    score += 20;
}



// MACD Momentum
if(stock.macd === true){
    score += 15;
}



// Volume Confirmation
if(stock.volume === true){
    score += 10;
}



// RSI / Momentum
if(stock.rsi === true){
    score += 10;
}



// Sector Strength
if(stock.sector === true){
    score += 10;
}



// Market Condition
if(stock.market === true){
    score += 10;
}



// VIX Risk Filter
if(stock.vix === true){
    score += 5;
}



return score;

}





function getROLyfeStatus(score){


if(score >= 90){

return "🟢 READY";

}


if(score >= 75){

return "🟡 WATCH";

}


if(score >= 60){

return "🔵 BUILDING";

}


return "🔴 AVOID";


}






// Example AI Analysis Generator

function generateAIExplanation(stock, score){


let message = "";


if(score >= 90){

message =
"Strong RO'Lyfe setup. Trend, momentum, and risk conditions are aligned.";

}

else if(score >=75){

message =
"Good setup forming. Waiting for stronger confirmation.";

}

else if(score >=60){

message =
"Early setup. Monitor before entering.";

}

else{

message =
"Conditions are weak. Avoid until improvement.";

}



return message;


}




// Export for other modules

window.ROLyfeScanner = {

calculateROLyfeScore,

getROLyfeStatus,

generateAIExplanation

};
