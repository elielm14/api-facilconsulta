import { profissionais } from "../../../dataBase"

export default function profissional(req, res) {
    res.status(200).json({ profissionais })
}