import { articles } from '../../../data'
//shown at localhost:3000/api/articles

export default function handler(req, res) {
    //200 means everything is good, and we're serving the articles
    res.status(200).json(articles)
}