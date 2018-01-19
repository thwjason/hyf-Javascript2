"use strict";

(function () {

    /*1. Open a new js file and start by declaring an array that contains 10 strings. 
    These strings should be of book titles you have read (or made up) and be lowercase 
    without spaces or special characters so that you can use these later as Id's. 
    (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).*/
    let bookList = ["never_let_me_go1", "stalingrad2", "berlin3", "dune4",
        "chitty_on_contracts5", "stap3_schaak6", "theory_and_practice_on_echr7",
        "napoleon8", "mein_kampf9", "war_and_peace10"];

    /*2 Create a basic html file called index.html and use it to load the js file, 
    confirm the console.log show the array. (This is for debugging and making sure 
    everything is in order. Delete it later when you're done :))*/

    console.log(bookList);

    /*3.Make a function (or functions) that generate a ul with li elements for each book ID 
    in the array using a for loop.*/

    function renderHtml() {
        const root = document.getElementById("root");
        //root.innerHTML = "";
        const unorderedList = document.createElement("ul");
        root.appendChild("ul");

        for (let ul = bookList.length; ul <= 0; ul++) {
            const li = document.createElement('li');
            ul.appendChild("li");
            li.innerHTML = bookList;
        }
    }

    /*4.Make an object containing information for each book. Each item(object) in this object 
    should have the book ID you thought up in point 1 as a key, and it should have at least 
    the following fields: title, language and author.*/

    let never_let_me_go1 = {
        title: "Never Let Me Go",
        language: "English",
        author: "Kazuo Ishiguro"
    };

    let stalingrad2 = {
        title: "Stalingrad",
        language: "English",
        author: "Anthony Beevor"
    };

    let berlin3 = {
        title: "Berlin",
        language: "English",
        author: "Anthony Beevor"
    };

    let dune4 = {
        title: "Dune",
        language: "English",
        author: "Frank Herbert"
    };

    let chitty_on_contracts5 = {
        title: "Chitty on Contracts",
        language: "English",
        author: "Chitty et al"
    };

    let stap3_schaak6 = {
        title: "Stap 3 extra: Schaak",
        language: "Dutch",
        author: "Cor van Wijgerden"
    };

    let theory_and_practice_on_echr7 = {
        title: "Theory and Practice on the European Convention on Human Rights",
        language: "English",
        author: "van Dijk et al"
    };

    let napoleon8 = {
        title: "Napoleon Bonaparte",
        language: "English",
        author: "Luke Grayson"
    };

    let mein_kampf9 = {
        title: "Mein Kampf",
        language: "German",
        author: "Adolf Hitler"
    };

    let war_and_peace10 = {
        title: "War and Peace",
        language: "Russian",
        author: "Leo Tolstoy"
    };


    /*5.Now change the function you used to display the book ID's in a list to take the
    actual information about the book from the object and display that. 
    Make sure you choose the right html elements for each piece of info, 
    for instance, a heading for the title.*/

    /*6. Beautify your html page with css, add sources and alts to each of the images.*/

    /*7. Download book covers for each book, construct a new Object which has as keys 
    the bookId's again, and as value the path to the image source 
    (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). 
    Now loop over these entries (hint: Object.keys(objectName) gives you an array containing 
    the keys). Then write a function which places an image at the corresponding li element. 
    Remember that Objects are not ordered, so you cannot guarantee that the first key is
    the first li element. (Hint: you could give each li item an id tag by modifying the 
    function you made before)*/

})();