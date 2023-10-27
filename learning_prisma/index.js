const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

// Ler dados
async function mainLer() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
}

// Escrever dados
async function mainEscrever() {
    await prisma.user.create({
        data: {
            name: "Ricieri",
            email: "ricieri@prisma.io",
            post: {
                create: { title: "Hello, World!" },
            },
            profile: {
                create: { bio: "I like dragons" },
            },
        },
    });
}

// Ler dados junto com as outras tabelas relacionadas
async function mainLerRelacionados() {
    const allUsers = await prisma.user.findMany({
        include: {
            post: true,
            profile: true,
        },
    });
}

// Atualizar dado
async function mainAtualizar() {
    const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: true },
    });
    console.log(post);
}

// Chama a função main() para realizar as queries e desconecta do db
mainAtualizar()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
