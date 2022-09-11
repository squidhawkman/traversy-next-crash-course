import { articles } from '../../../data'


//getting the data from a specific id with req.data.id, we can destructure this
export default function handler({query: { id } }, res) {
    //filtering out, the article id is equal to that passed in by the request
    const filtered = articles.filter(article => article.id === id)

    if (filtered.length > 0) {
        //this will give us the single filtered article
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Article with ${id} is not found.`})
    }
}