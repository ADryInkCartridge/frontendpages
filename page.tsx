import prisma from '../../../lib/prisma';




async function getTweets() {
    const tagged = await prisma.tweet.findMany({
        where:{tag_overall: {not: null}},
    });
    return tagged
}






export default async function Tweets() {
    const tweets = await getTweets()
    let num = 0;

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Num</th>
                        <th className="px-4 py-2">Username</th>
                        <th className="px-4 py-2">Content</th>
                        <th className="px-4 py-2">Tag</th>
                    </tr>
                </thead>
                <tbody>
                    {tweets.map((tweet) => (
                        num = num + 1,
                        <tr key={tweet.id}>
                            <td className="border px-4 py-2">{num}</td>
                            <td className="border px-4 py-2">{tweet.username}</td>
                            <td className="border px-4 py-2 whitespace-normal">{tweet.content}</td>
                            <td className="border px-4 py-2">{tweet.tag_overall}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );   
}