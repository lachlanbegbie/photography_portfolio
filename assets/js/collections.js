async function getCollections() {
    // declare a variable for json data path
    const jsonData = "assets/data/hughdata.json";
    const jsonColl = "assets/data/collections.json";

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
        addCollections(collData, imagesData);

        return imagesData;
    } catch (error) {
        console.error(error.message);
    }
}

getCollections();



async function addCollections(colls, data) {
    // get container where all cards are places
    const container = document.getElementById("collections-container");

    // console.log(data);

    // loop through each item to fill a card
    for (let i = 0; i < colls.length; i++) {
        let s = colls[i];

        // console.log(s);

        // create card element and give it a class
        let collItem = document.createElement("div");
        collItem.className = "collection-item left";

        collItem.innerHTML = `
            <div class="collection-cover ${s.cover}"></div>

            <div class="collection-details">
                <h2>${s.title}</h2>

                <p>
                    ${s.description}
                </p>

                <a class="coll-button"><h6>View Collection</h6></a>
            </div>
        `

        collItem.setAttribute('onClick', `getCollection(${s.id - 1})`);

        // add the current iteration to the end of the container's child list
        container.appendChild(collItem);
    }
}