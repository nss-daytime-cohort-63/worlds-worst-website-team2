import { getDatabase } from "./CGdatabase.js"

const database = getDatabase()

//Event Listener should pull random image from the database array
export const imageClickEvent = () => {
    document.addEventListener(
        'click',
        (clickEvent) => {
            const itemClicked = clickEvent.target

            if (itemClicked.id.startsWith('popup')) {

                const [, popupId] = itemClicked.id.split('--')
                let selectedImage = null
                let randomImageId = Math.floor(Math.random() * database.length)
                for (let object of database) {
                    if (parseInt(popupId) === randomImageId) {
                        selectedImage = object.link
                    }
                }
                //image link
            }
        }
    )
}