export default function handler(req, res) {
  if (req.method === `POST`) {
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(`Hello`)
  } else {
    res.send(`Hello`)
  }
}
