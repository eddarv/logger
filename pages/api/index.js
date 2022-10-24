import NextCors from 'nextjs-cors'

let name=[]
let auxObj={projectId: false}

export default async function handler(req, res) {

    await NextCors(req, res, {

       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
       origin: '*',
       optionsSuccessStatus: 200, 
    });


    if(req.body[0]==null) return res.status(200).json(name)

    auxObj={...req.body[0]}

    if (auxObj.projectId!=="prj_Uneqt4CLqAh6YprTsAUfBqhfuHLs") return res.status(200).json(name)
    
    name=[...name, req.body[0]]
    
    res.status(200).json(name)
    
    
}
