// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import bookmark from "../../bookmark"

export default function handler(req, res) {
  res.status(200).json({
    "id":1,
    "title" :"javaScript Tutorial",
    "URL" :"javaScript.com",
    "Category" :"A",
  })
}
