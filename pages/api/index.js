import Cors from 'cors'
const cors = Cors({origin: "*",
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"]})

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
