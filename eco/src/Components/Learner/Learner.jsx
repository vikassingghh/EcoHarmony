import React from 'react'

const Learner = () => {
  return (
    <>
        <div className='bg-gradient-to-r from-green-300 from-10% via-green-200 via-30% to-green-100 to-90%'>
        <div className='pt-10 pb-10'>
            <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000'>
                <h1 className='underline'>Learning</h1>
            </div>
            <div className='grid grid-cols-3 w-[92%] mx-auto gap-10 pt-10 pl-10'>
                <div className='hover:scale-105 duration-500'>
                <iframe height="200" src="https://www.youtube.com/embed/mpjKPz_I7pc?si=QvOlENxa3ItHvISL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='hover:scale-105 duration-500'>
                <iframe  height="200" src="https://www.youtube.com/embed/yFu8fhjx_xI?si=Di5nrr_DXsJpKxbf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='hover:scale-105 duration-500'>
                <iframe  height="200" src="https://www.youtube.com/embed/xEAOvFG1AmM?si=TElv7Z-GyB1BDnKH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Learner
