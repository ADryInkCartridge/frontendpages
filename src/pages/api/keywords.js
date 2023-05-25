import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const column = req.query.column;
    const direction = req.query.direction;
    const obj = {};
    obj[column] = direction;


    const tweets = await prisma.Keyword.findMany({
        orderBy: obj,
        take: 1000,
      });

    res.status(200).json(tweets)
  }

