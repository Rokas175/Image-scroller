
//const fetch = require("node-fetch"); //only needed to see if working in terminal to see what fetch gets
console.log("hello from node");

for (let i = 1; i < 4; i++) {
//Getting the list info page by page         //how many items to take from list, max is 100 from one page
    fetch(`https://picsum.photos/v2/list?page=`+i+`&limit=100`).then((response) => {

    return response.json();

    }).then((responseJson) => {
        //console.log(responseJson);

    
        for (let i = 0; i < responseJson.length; i++) {
            //console.log(responseJson[i]);
            listMembers(responseJson[i]);
        } 

    });


    //Function to use list data to create new div and imgs to display
    function listMembers(responseJson) {
        //console.log(responseJson);

        var img = new Image();
        var newImgDiv = document.createElement('div');
        img.src = responseJson.download_url;
        img.height = 200;
        img.width = 300;
        img_home.appendChild(newImgDiv).appendChild(img);
        
        var newDiv = document.createElement('div');
        newDiv.innerHTML = responseJson.author;
        author.appendChild(newDiv);
    }


}


