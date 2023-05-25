import prisma from '../../../lib/prisma';
import axios from 'axios';
import { useEffect, useState } from 'react';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

export const getServerSideProps = async () => {
    const keywords = await prisma.Keyword.findMany({
        orderBy: { count: 'desc' },
        take: 1000
    });
    return {
        props: { keywords },
    }
  };



export default function Tweets({keywords}) {
    const [data, setData] = useState(keywords)
    const [currColumn, setColumn] = useState('count')
    const [currDirection, setDirection] = useState('desc')


    useEffect(() => {
        getData()

    }, [currColumn, currDirection])

    const getData = async () => {
        const params = '?column=' + currColumn + '&direction=' + currDirection
        const res = await axios.get('/api/keywords' + params)
        setData(res.data)
        window.scrollTo(0, 0);
        
    }
    const changeColumn = (column) => {
        if (currColumn === column) {
            setDirection(currDirection === 'asc' ? 'desc' : 'asc')
        }
        else {
            setColumn(column)
            setDirection('asc')
        }
    }

    const iterateColumns = () => {
        return Object.keys(data[0]).map((x,i) => {
            if (currColumn === x) {
                return (
                    <th onClick={() => changeColumn(x)} className='bg-slate-100 px-4 py-2 text-sm whitespace-normal' key={i}>{capitalizeFirstLetter(x)}
                    {currDirection === 'asc' ? <span className='text-xs'> &#9650;</span> : <span className='text-xs'> &#9660;</span>}
                    </th>
                )
            }
            return (    
                <th onClick={() => changeColumn(x)} className='bg-slate-100 border px-4 py-2 text-sm whitespace-normal' key={i}>{capitalizeFirstLetter(x)}</th>
            )
        })
    }
    
    const iterateRows = () => {
        const colName = Object.keys(data[0])

        return data.map((row) => {
            return (
                <tr key={row.id + 29}>
                    {colName.map((col) => {
                        return <td className='border px-4 py-2 text-xs whitespace-normal' key={row.id + col}>{row[col]}</td>
                    })}
                </tr>
            )
        })
    }

    
    
    return (
        <div className="overflow-x-auto" >
            <table className="w-full rounded-lg">
                <thead>
                    <tr>
                        {iterateColumns()}
                    </tr>
                </thead>
                <tbody>
                    {iterateRows()}
                </tbody>
            </table>
            
        </div>
    )
}