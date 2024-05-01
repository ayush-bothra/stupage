document.getElementById("button").addEventListener('click', function(){
    var link = document.createElement("a");
    link.href = "https://www.notion.so/desktop";
    
    document.body.appendChild(link);
    console.log("done");

    link.click();
})


