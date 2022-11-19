import { profissionais } from "../../dados"
import { estados } from "../../dados"
import { cidades } from "../../dados"
import { especialidades } from "../../dados"

export default function dados(req, res) {
  res.status(200).json({
    profissionais,
    especialidades,
    estados,
    cidades
  })
}