import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const detailData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=8ed493abe40fced7a86dfbabff806998`)
                setData(response.data)
            } catch (error) {
                setError(error.message)
            }
        }
        detailData()
    }, [id])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className='flex px-4'>
                <div className='w-1/2'>
                    <NavLink to={`/movies/${data.id}`}>
                        <div className='-slate-500'>
                            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='w-[44rem] h-[32rem] pl-8' alt={data.original_title} />
                        </div>
                    </NavLink>
                </div>
                <div className='w-1/2'>
                    <NavLink to={`/movies/${data.id}`}>
                        <p className='text-4xl text-white'>{data.original_title}</p>
                   
                    <p className='text-2xl text-white'>{data.overview}</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Detail
