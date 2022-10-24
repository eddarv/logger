import NextCors from 'nextjs-cors'

let name=[]

export default async function handler(req, res) {

    await NextCors(req, res, {

       methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
       origin: '*',
       optionsSuccessStatus: 200, 
    });

    name=[...name,`${Math.random()*10}`]
    
    res.status(200).json(name)
}
