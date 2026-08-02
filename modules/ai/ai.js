/* ==========================================
   RO'LYFE AI INTELLIGENCE ENGINE™
   Command Center Assistant
========================================== */


const explanationURL = "../../data/explanations.json";


let aiKnowledge = [];





/*
 LOAD AI KNOWLEDGE DATABASE
*/


async function loadAIKnowledge(){


    try {


        const response = await fetch(explanationURL);


        const data = await response.json();


        aiKnowledge = data.explanations || data;



        console.log(
            "RO'Lyfe AI Knowledge Loaded:",
            aiKnowledge
        );



    } catch(error){


        console.log(
            "AI Knowledge Error:",
            error
        );


    }


}





/*
 AI QUESTION ENGINE
*/


function askAI(){


    const category =
    document.getElementById(
        "ai-category"
    ).value;



    const question =
    document.getElementById(
        "ai-question"
    ).value.toLowerCase();



    const responseBox =
    document.getElementById(
        "ai-response"
    );



    let answer =
    "RO'Lyfe AI is analyzing your request...";




    const match =
    aiKnowledge.find(item => {


        return (

            item.category === category

            ||

            item.keyword &&
            question.includes(
                item.keyword.toLowerCase()
            )

        );


    });





    if(match){


        answer = match.description;


    }

    else if(category==="funding"){


        answer =
        `
        RO'Lyfe Funding Assistant:

        I can help explain:
        • Fix & Flip Loans
        • DSCR Loans
        • Commercial Funding
        • Business Capital
        • Lender Programs

        Add your deal details and the system will guide the next step.
        `;


    }


    else if(category==="trading"){


        answer =
        `
        RO'Lyfe Trading Assistant:

        I analyze:
        • Trend
        • Momentum
        • Risk
        • Entry Planning
        • Stop Loss
        • Target Levels

        Use the Option & Stock Ladder for ranked setups.
        `;


    }


    else if(category==="realestate"){


        answer =
        `
        RO'Lyfe Real Estate Assistant:

        I can help analyze:
        • Property Deals
        • ARV
        • Rehab
        • MAO
        • Wholesale Strategy
        • Financing Options
        `;


    }


    else{


        answer =
        `
        RO'Lyfe AI Command Center:

        Your assistant for:
        Real Estate
        Funding
        Trading
        Calculators
        Business Systems

        Ask a specific question and I will guide the workflow.
        `;


    }




    responseBox.innerHTML = answer;



}







document.addEventListener(

"DOMContentLoaded",

()=>{


    loadAIKnowledge();


}

);
