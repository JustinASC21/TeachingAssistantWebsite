const dreamCars = [
    {img:"Assets/2023HondaCivic.png",
    name:"2023 Honda Civic",
    price:"24,650",
    numOfSeats:"5",
    MPG:"35"},
    {img:"Assets/2020HondaPilot.jpeg",
    name:"2020 Honda Pilot",
    price:"30,000",
    numOfSeats:"8",
    MPG:"27"},
    {img:"Assets/2020HondaCivicSi.jpeg",
    name:"2020 Honda Civic SI",
    price:"25,200",
    numOfSeats:"5",
    MPG:"30"},
    {img:"Assets/2021HondaCivicTypeR.jpeg",
    name:"2021 Honda Civic Type R",
    price:"40,000",
    numOfSeats:"4",
    MPG:"22"},
    {img:"Assets/2023HondaOdyssey.png",
    name:"2023 Honda Odyssey",
    price:"39,000",
    numOfSeats:"8",
    MPG:"28"},
]


function generateFutureCar() {
    const container =  document.getElementById('dreamcarContainer')
    container.innerHTML = "";

    // will generate a random car and display image to the user from the list of car images / objects
    let randCar = Math.floor(Math.random() * 5);
    randomCar = dreamCars[randCar];
    // given an object from which to extract data and information
    // create card to display information of dream car
    let card = document.createElement("div");
    let img = document.createElement("img");
    let desc = document.createElement("div");

    img.setAttribute('src',randomCar.img)
    
    let descriptionText = `Name: ${randomCar.name}<br><br> Seats ${randomCar.numOfSeats} people`;
    descriptionText += `<br>Average Mile Per Gallon Ratio: ${randomCar.MPG} MPG`
    descriptionText += `<br>Price Starting at $${randomCar.price}`

    desc.innerHTML = descriptionText;
    desc.style.textAlign = "center";
    card.appendChild(img);
    card.appendChild(desc);
    card.style.textAlign = "center";
    
    container.appendChild(card);
}