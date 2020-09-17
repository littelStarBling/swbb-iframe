document.getElementById("generate-button").onclick = (function(){
    document.getElementById("input").value = Math.floor(Math.random() * (9999999-1000000) + 1000000);
})

document.getElementById("start-button").onclick = (function(){
    document.getElementById("apprtcframe").style.display = "block";
    window.frames[0].location = "https://appr.tc/r/" + document.getElementById("input").value;
})
