import { cidades } from "../dados"

export default function cidade(req, res) {
    res.status(200).json({ cidades })
}