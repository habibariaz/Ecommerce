import React from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <>
        <div >
        <Header/>
            {/* <Layout> */}
                <h1 style={{ minHeight: "70vh" }}className='text-center'>Home Page</h1>
            {/* </Layout> */}
        <Footer/>
        </div>
        
        </>
    )
}

export default Home