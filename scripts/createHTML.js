export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img  class="fishImage image--card" src="${fish.image}" alt="blue fish"/></div>
            <div class="fishName">${fish.name}</div>
            <div class="fishSpecies">${fish.species}</div>
            <div class="fishLength">${fish.length}</div>
            <div class="fishLocation">${fish.location}</div>
            <div class="fishDiet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}