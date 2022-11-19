import { profissionais } from "../../dataBase"
import { estados } from "../../dataBase"
import { cidades } from "../../dataBase"
import { especialidades } from "../../dataBase"

export default function dados(req, res) {
  res.status(200).json({
    profissionais,
    especialidades,
    estados,
    cidades
  })
}