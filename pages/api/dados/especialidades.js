import { especialidades } from "../../dadosBase/dados"

export default function cidade(req, res) {
    res.status(200).json({ especialidades })
}