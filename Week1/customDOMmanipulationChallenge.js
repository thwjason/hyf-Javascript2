"use strict";

(function () {

    /*1. Open a new js file and start by declaring an array that contains 10 strings. 
    These strings should be of book titles you have read (or made up) and be lowercase 
    without spaces or special characters so that you can use these later as Id's. 
    (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).*/

    const bookList = [
        "never_let_me_go1",
        "stalingrad2",
        "berlin3",
        "dune4",
        "chitty_on_contracts5",
        "stap3_schaak6",
        "theory_and_practice_on_echr7",
        "napoleon8",
        "mein_kampf9",
        "war_and_peace10"
    ];

    /*2 Create a basic html file called index.html and use it to load the js file, 
    confirm the console.log show the array. (This is for debugging and making sure 
    everything is in order. Delete it later when you're done :))*/

    console.log(bookList);

    /*3.Make a function (or functions) that generate a ul with li elements for each book ID 
    in the array using a for loop.*/

    /* Function is commented out because I am making a new one for step 5
    
    function renderHtml() {
        const root = document.getElementById("root");
        root.innerHTML = "";
        const unorderedList = document.createElement("ul");
        root.appendChild(unorderedList);

        for (let idx = bookList[0]; idx < bookList.length; idx++) {
            const li = document.createElement('li');
            unorderedList.appendChild(li);
            li.innerHTML = bookList[idx];
            console.log(bookList[idx]);
        }
    
        

    //* This is an alternative way of coding (it reduces the change of screwing up things like 
        idx <= bookList.length, where "<=" is wrong):
    
    for (const book of bookList) {
    
        const li = document.createElement('li');
        unorderedList.appendChild(li);
        li.innerHTML = book;
    }
}
    renderHtml()
        */

    /*4.Make an object containing information for each book. Each item(object) in this object
    should have the book ID you thought up in point 1 as a key, and it should have at least 
    the following fields: title, language and author.*/

    const bookDetails = {
        never_let_me_go1: {
            title: "Never Let Me Go",
            language: "English",
            author: "Kazuo Ishiguro",
        },

        stalingrad2: {
            title: "Stalingrad",
            language: "English",
            author: "Anthony Beevor",
        },

        berlin3: {
            title: "Berlin",
            language: "English",
            author: "Anthony Beevor",
        },

        dune4: {
            title: "Dune",
            language: "English",
            author: "Frank Herbert",
        },

        chitty_on_contracts5: {
            title: "Chitty on Contracts",
            language: "English",
            author: "Chitty et al",
        },

        stap3_schaak6: {
            title: "Stap 3 extra: Schaak",
            language: "Dutch",
            author: "Cor van Wijgerden",
        },

        theory_and_practice_on_echr7: {
            title: "Theory and Practice on the European Convention on Human Rights",
            language: "English",
            author: "van Dijk et al",
        },

        napoleon8: {
            title: "Napoleon Bonaparte",
            language: "English",
            author: "Luke Grayson",
        },

        mein_kampf9: {
            title: "Mein Kampf",
            language: "German",
            author: "Adolf Hitler",
        },

        war_and_peace10: {
            title: "War and Peace",
            language: "Russian",
            author: "Leo Tolstoy",
        }

    }



    /*5.Now change the function you used to display the book ID's in a list to take the
    actual information about the book from the object and display that. 
    Make sure you choose the right html elements for each piece of info, 
    for instance, a heading for the title.*/

    /*
    function(bookIntricate){ 
        for (const book of bookList) {
            const bookDetail = bookDetails[book];
            const bookTitle = bookDetail.title;
            const bookLanguage = bookDetail.language;
            const bookAuthor = bookDetail.author;
        } 
    }*/



    function fullDisplay() {
        const root = document.getElementById("root");
        root.innerHTML = "";
        const title = document.createElement("h1");
        root.appendChild(title);
        title.innerHTML = "This is short list of 10 books, comrade.";
        const unorderedList = document.createElement("ul");
        root.appendChild(unorderedList);
        
        let keys = bookList;


        for (let j = 0; j < bookList.length; j++) {
            const key = bookList[j];
            const details = bookDetails[key];
            const li = document.createElement("li");
            unorderedList.appendChild(li);


            console.log(bookList[j]);

            // let title = bookDetails[key].title;
            // let language = bookDetails[j].language;
            // let author = bookDetails[j].author;
            const h1 = document.createElement("h1");
            const h2 = document.createElement("h2");
            const h3 = document.createElement("h3");


            h1.innerHTML = "Title : " + details.title;
            h2.innerHTML = "Language : " + details.language;
            h3.innerHTML = "Author : " + details.author;

            li.setAttribute('id', key);

            li.appendChild(h1);
            li.appendChild(h2);
            li.appendChild(h3);

        }
    }
    let images = {
        never_let_me_go1: 'pictures/neverLetMeGo.jpeg',
        stalingrad2: 'pictures/stalingrad.jpeg',
        berlin3: 'pictures/berlin.jpeg',
        dune4: 'pictures/dune.jpeg',
        chitty_on_contracts5: 'pictures/chittyOnContracts.jpeg',
        stap3_schaak6: 'pictures/stap3extra.jpg',
        theory_and_practice_on_echr7: 'pictures/',
        napoleon8: 'pictures/napoleon.jpeg',
        mein_kampf9: 'pictures/meinKampf.jpeg',
        war_and_peace10: 'pictures/warAndPeace.jpeg'
    };

    function displayImages(keys) {
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            const li = document.getElementById(key);
            const img = document.createElement("img");
            img.setAttribute("src", images[key]);
            li.appendChild(img);
        }
    }
    const keys = Object.keys(bookDetails); // this is an array
    fullDisplay();
    displayImages(keys);  // calls the function and sending keys as its argument
    

    /*6. Beautify your html page with css, add sources and alts to each of the images.*/

    /*7. Download book covers for each book, construct a new Object which has as keys 
    the bookId's again, and as value the path to the image source 
    (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). 
    Now loop over these entries (hint: Object.keys(objectName) gives you an array containing 
    the keys). Then write a function which places an image at the corresponding li element. 
    Remember that Objects are not ordered, so you cannot guarantee that the first key is
    the first li element. (Hint: you could give each li item an id tag by modifying the 
    function you made before)*/
   /* let images = {
        never_let_me_go1: 'pictures/neverLetMeGo.jpeg',
        stalingrad2: 'pictures/stalingrad.jpeg',
        berlin3: 'pictures/berlin.jpeg',
        dune4: 'pictures/dune.jpeg',
        chitty_on_contracts5: 'pictures/chittyOnContracts.jpeg',
        stap3_schaak6: 'pictures/stap3extra.jpg',
        theory_and_practice_on_echr7: 'pictures/',
        napoleon8: 'pictures/napoleon.jpeg',
        mein_kampf9: 'pictures/meinKampf.jpeg',
        war_and_peace10: 'pictures/warAndPeace.jpeg'
    };*/
    console.log("This is the keys of bookDetails:", keys); // ["never_let_me_go1", "stalingrad2", "berlin3", "dune4", "chitty_on_contracts5", "stap3_schaak6", "theory_and_practice_on_echr7", "napoleon8", "mein_kampf9", "war_and_peace10"]
    console.log("typeof keyes:", typeof keys); // typeof keyes: object
})();