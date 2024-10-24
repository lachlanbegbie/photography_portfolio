async function getCollection(id) {
    // declare a variable for json data path
    const jsonData = "./assets/data/hughdata.json";
    const jsonColl = "./assets/data/collections.json";

    try {
        // fetch data and store in variable "imagesData"
        const response = await fetch(jsonData);
        const collResponse = await fetch(jsonColl);

        const imagesData = await response.json();
        const collData = await collResponse.json();
        // console.log(imagesData);

        allData = imagesData;
        allColls = collData;

        // run function "addDataCard", which adds cards to the webpage for each item in json file
        displayCollection(id, collData, imagesData);

        return imagesData;
    } catch (error) {
        console.error(error.message);
    }
}


async function displayCollection(id, coll, data) {
    const container = document.getElementById("collect");
    const base = document.getElementById("base");

    container.innerHTML = "";

    let collectionImages = [];

    let heading = document.createElement("div");
    heading.className = "coll-banner";
    heading.innerHTML = `
        <h1 class="">${coll[id].title}</h1>    
    
        <a>< Back</a> 
    `

    heading.setAttribute('onClick', "closeCollection()");
    container.appendChild(heading);

    let gall = document.createElement("div");
    gall.className = "gall-container";

    // get the right items for the collection
    for (let i = 0; i < data.length; i++) {
        if (data[i].collection == coll[id].title) {
            // create card element and give it a class
            let picture = document.createElement("img");
            picture.className = "coll-gallery-img";
            picture.src = `assets/img/images/${data[i].address}`;

            // add the current iteration to the end of the container's child list
            gall.appendChild(picture);
        }
    }

    container.appendChild(gall);

    base.classList.add("hidden");
    container.classList.remove("hidden");
}

async function closeCollection(params) {
    const container = document.getElementById("collect");
    const base = document.getElementById("base");

    base.classList.remove("hidden");
    container.classList.add("hidden");
}