import fetch from "node-fetch"

export default async function handler(req,res){

const TOKEN = process.env.BOT_TOKEN

const {message}=req.body

let users=["123456","987654"]

for(let u of users){

await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
chat_id:u,
text:message
})
})

}

res.status(200).json({status:"ok"})

}
