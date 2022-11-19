import { estados } from "../../../dataBase"

export default function estado(req, res) {
    res.status(200).json({ estados })
}