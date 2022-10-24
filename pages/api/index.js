import NextCors from 'nextjs-cors'

let name=[]

export default async function handler(req, res) {

    await NextCors(req, res, {

       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
       origin: '*',
       optionsSuccessStatus: 200, 
    });

    // if(!req.body.hasOwnProperty('projectId')) res.status(200).json(name)
    
    name=[...name, req.body]
    
    res.status(200).json(name)
}
