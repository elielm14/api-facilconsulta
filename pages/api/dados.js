import { profissionais } from "./dados/profissionais"
import { estados } from "./dados/estados"
import { cidades } from "./dados/cidades"

export default function dados(req, res) {
  res.status(200).json({
    name: 'John Doe',
    profissionais,
    estados,
    cidades
  })
}