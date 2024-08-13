import './Home.css'

import {  GamingLibrary } from '../../components/indexComponent'
import { Hero , Most  } from '../../Sections/indexSections'

const Home = () => {
    return (
        <>
            {/* <h1>Home Page</h1> */}
            <Hero />
            <Most />
            <GamingLibrary /> 
        </>
    )
}

export default Home