import { estados } from "../../dadosBase/dados"

export default function estado(req, res) {
    res.status(200).json({ estados })
}