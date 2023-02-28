import { getDatabase } from "./CGdatabase.js"

const database = getDatabase()

//Event Listener should pull random image from the database array
document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith('image')) {

            const [, imageId] = itemClicked.id.split('--')
            let selectedImage = null
            let randomImageId = Math.floor(Math.random()*database.length)
            for(let object of database) {
                if(parseInt(imageId) === randomImageId) {
                    selectedImage = object.link
                }
            }
        //insert window.alert(`html ${link} stuff`)
        }
    }
)