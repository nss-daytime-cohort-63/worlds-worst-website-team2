export const databasePopups = () => {
    // Invoke the function that you imported from the database module
    const database = getDatabase()

    // Start building a string filled with HTML syntax
    let htmlString = ""

    // Create HTNL representations of each fish here
    for (const object of database) {
        
        // Why is there a backtick used for this string?
        htmlString += `<div class="popup" onclick="myFunction()">Click me!
        <span class="popuptext" id="myPopup">${object.phrase}</span>
        <img class="image" src=${object.image}>
                    </div>
`
    }

    return htmlString
}