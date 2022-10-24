import NextCors from 'nextjs-cors'

let name=[]

export default async function handler(req, res) {

    await NextCors(req, res, {

       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
       origin: '*',
       optionsSuccessStatus: 200, 
    });

    if(!req.hasOwnProperty('body')) res.status(200).json(name)
    // if(req.body.projectId !== "prj_Uneqt4CLqAh6YprTsAUfBqhfuHLs") return

    name=[...name, req.body]
    
    res.status(200).json(name)
}
