import React, { useEffect } from 'react'
import LeftComponent from '../component/leftcomponent'
import MainContent from '../component/mainContent'
import RighComponent from '../component/RighComponent'

const HomePage = () => {


    const getdata = async () => {
        const data = await fetch('https://fakestoreapi.com/products/')
        const newdata = await data.json();
        console.log(newdata);
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <div className='homepage'>
            <LeftComponent />
            <MainContent />

            <RighComponent />




        </div>
    )
}

export default HomePage
