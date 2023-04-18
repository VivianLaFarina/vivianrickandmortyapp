import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    Unknowm: "bg-yellow-500",
}

const ResidentCard = ({ resident }) => {

    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {
        axios.get(resident)
            .then((res) => setResidentInfo(res.data))
            .catch((err) => console.log(err))
    }, [])



    return (
        <article >
            <div className='relative border-green-800 border-[2px]'>
                <img className='w-full' src={residentInfo?.image} alt="" />
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/80 border-2 border-green-400  text-white p-1 px-2 flex grap-2 items-center rounded-sm'>
                  <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]} rounded-full `}></div>
                  <span>{residentInfo?.status}</span> 
                </div>
            </div>
            <section className='border-green-500 border-[2px] p-2 shadow-white shadow-lg'>
                <h3 className='text-center font-bold text-base'>{residentInfo?.name} </h3>
                <ul>
                    <li className='py-1 px-3 '>
                        <span className='text-white/50'>Species: </span>
                        <span>{residentInfo?.species}</span>
                    </li>

                    <li className='py-1 px-3 '>
                        <span className='text-white/50'>Origin: </span>
                        <span>{residentInfo?.origin.name}</span>
                    </li>

                    <li className='py-1 px-3 '>
                        <span  className='text-white/50'>Times appear: </span>
                        <span>{residentInfo?.episode.length}</span>

                    </li>
                </ul>

            </section>
        </article>
    )
}

export default ResidentCard