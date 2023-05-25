import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const column = req.query.column;
    const direction = req.query.direction;
    const obj = {};
    obj[column] = direction;


    const tweets = await prisma.Tweet.findMany({
        where: { tag_overall: {not:null} },
        orderBy: obj,
        take: 100,
      });

    res.status(200).json(tweets)
  }

