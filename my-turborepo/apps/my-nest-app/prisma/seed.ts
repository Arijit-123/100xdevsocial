import { PrismaClient } from '../generated/prisma';
const prisma= new PrismaClient();


async function main(){
    await prisma.user.createMany({
        data:[

     { username: 'alice', email: 'alice@dev.com' },
    { username: 'bob', email: 'bob@dev.com' },

        ],
    })
}

main().catch((e)=>{
    console.error(e)
    process.exit(1)
}).finally(async()=>{

    await prisma.$disconnect()
})