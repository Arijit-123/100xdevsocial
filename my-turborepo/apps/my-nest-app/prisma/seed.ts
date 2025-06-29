import { PrismaClient } from '../generated/prisma';
const prisma= new PrismaClient();


async function main(){
    // await prisma.user.createMany({
    //     data:[

    //  { username: 'Tilkul', email: 'tilkur@dev.com' },
    // { username: 'Balaji', email: 'Bala@dev.com' },

    //     ],
    // })

     await prisma.post.createMany({
        data:[

     { content: 'Building this startup from scratch using python', authorId: 5},
    
     { content: 'Ocaml is the new language', authorId: 4 },

        ],
    })
}

main().catch((e)=>{
    console.error(e)
    process.exit(1)
}).finally(async()=>{

    await prisma.$disconnect()
})