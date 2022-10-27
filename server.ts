import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const post = await prisma.log.create({
        data:{
            logId: "sdsadasdasd",
            message: "asdasd",
            timestamp: 11354154,
            type: "asdas",
            source:"asdasd",
            projectId:"sdasd",
            deploymentId:"asdasd",
            buildId:"ddlashdasd",
            host:"asdasdasdd",
            entrypoint:"asdasdasdasd"

        }
    })
    console.log(post)
}

main()
    .catch(e=> {
        console.log(e.message)
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })