async function fetchData() {
    try
    {
        const res=await fetch ("https://animechan.vercel.app/api/random");
        const record=await res.json();
        
        document.getElementById("quote").innerHTML=record["quote"];
        //document.getElementById("character").innerHTML=record["character"];
        //document.getElementById("anime").innerHTML=record["anime"];

        document.getElementById("citeSource").innerHTML = record["character"] + ", " + record["anime"];
    }
    catch(err)
    {
        console.error("Unable to generate quote!",err);
    }
}
fetchData();

function copyQuoteText() {
    var text = document.getElementById("quote").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}