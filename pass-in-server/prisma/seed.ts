import { prisma } from '../src/lib/prisma'

async function seed(){
  await prisma.event.create({
    data: {
      id: '5dbec886-470b-492e-a43f-07d93086589a',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados(as) por código!',
      maximumAttendees: 120,

    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})