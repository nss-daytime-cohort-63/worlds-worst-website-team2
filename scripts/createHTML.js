export const databasePopups = () => {
    // Invoke the function that you imported from the database module
    const database = getDatabase()

    // Start building a string filled with HTML syntax
    let htmlString = ""

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<div class="popup" onclick="myFunction()">Click me!
        <span class="popuptext" id="myPopup">Popup text...</span>
                    </div>
`
    }
    htmlString += `</article>`

    return htmlString
}