import { getDatabase } from "./CGdatabase.js"

const database = getDatabase()

//Event Listener should pull random image from the database array
export const stringClickEvent = () => {
    document.addEventListener(
        'click',
        (clickEvent) => {
            const itemClicked = clickEvent.target
            //may need to update class name once it is defined in html/css
            if (itemClicked.id.startsWith('phrase')) {
                //popupId could change based on class name input
                const [, phraseId] = itemClicked.id.split('--')
                let selectedString = null
                let randomStringId = Math.floor(Math.random() * database.length)
                for (let object of database) {
                    if (parseInt(phraseId) === randomStringId) {
                        //may need to update the object key once database is complete
                        selectedString = object.phrase
                    }
                }
                window.alert(`${selectedString}`)
            }
        }
    )
}