async function doGalleryStuff() {
    // declare a variable for json data path
    const jsonData = "./assets/data/hughdata.json";

    try {
        // fetch data and store in variable "imagesData"
        const response = await fetch(jsonData);

        const imagesData = await response.json();
        // console.log(imagesData);

        // run function "addDataCard", which adds cards to the webpage for each item in json file
        homeGallery(imagesData);
    } catch (error) {
        console.error(error.message);
    }


}

doGalleryStuff();



async function homeGallery(data) {
    // get container where all cards are places
    const container = document.getElementById("home-gallery");

    // console.log(data);

    let numbers = [];
    let range = Array.from({length: 54}, (_, i) => i);
    
    // Shuffle and pick the first 8 numbers
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * range.length);

        numbers.push(range[randomIndex]);
        range.splice(randomIndex, 1); // Remove the chosen number from the range
    }

    // console.log(numbers);

    // loop through each item to fill a card
    for (let i = 0; i < numbers.length; i++) {
        let s = data[numbers[i]];

        // console.log(s);

        // create card element and give it a class
        let picture = document.createElement("img");
        picture.className = "portrait";
        picture.src = `assets/img/images/${s.address}`;

        // add the current iteration to the end of the container's child list
        container.appendChild(picture);
    }
}