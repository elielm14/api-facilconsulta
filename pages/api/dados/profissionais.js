import { profissionais } from "../../dadosBase/dados"

export default function profissional(req, res) {
    res.status(200).json({ profissionais })
}