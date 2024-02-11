// Star Wars Character Search that makes API Calls to SWAPI
//      Uses fetch(), .json(), async, await, .then() & .catch()

const form = document.querySelector("#searchForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Use search term to make API Call
    //      Async function search(), uses fetch(), async & await
    const searchTerm = form.elements.character.value;
    const data = await search(searchTerm);
    console.log(data)

    // Get name and birth_year from data attributes
    document.querySelector("#character").innerHTML = `<b>Name:</b> ${data.name}`
    document.querySelector("#birth_year").innerHTML = `<b>Birth Year:</b> ${data.birth_year}`

    // Get homeworld, new API Call with .then() & .catch()
    fetch(data.homeworld)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        document.querySelector("#homeworld").innerHTML = `<b>Homeworld:</b> ${data.name}`
    })
    .catch((e) => {
        console.log(e);
    })

    // Clear search box
    form.elements.character.value = "";
})


// Async Function that makes API Call and returns the data
//      Uses fetch(), async & await
const search = async (name) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const data = await res.json();
        return data.results[0];
    } catch (e) {
        console.log(e);
    }
}
