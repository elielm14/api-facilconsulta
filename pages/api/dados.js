import { profissionais } from "../dadosBase/dados"
import { estados } from "../dadosBase/dados"
import { cidades } from "../dadosBase/dados"
import { especialidades } from "../dadosBase/dados"

export default function dados(req, res) {
  res.status(200).json({
    profissionais,
    especialidades,
    estados,
    cidades
  })
}