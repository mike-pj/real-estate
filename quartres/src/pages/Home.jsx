import React from 'react'
import background from '../assets/pexels-pixabay.jpg'
import Top from '../Home/Top'
import Select from '../Home/Select'
import About_hm from '../Home/About_hm'
import OurAmenities_hm from '../Home/OurAmenities_hm'
import Client_hm from '../Home/Client_hm'
import Transparent_hm from '../Home/Transparent_hm'
import News_hm from '../Home/News_hm'
import SellsProperties_hm from '../Home/SellsProperties_hm'
import Services_hm from '../Home/Services_hm'
import Properties_hm from '../Home/Properties_hm'
import Apartments_hm from '../Home/Apartments_hm'


function Home() {
  return (
    <section>
      <img src={background} alt="" className='w-full h-[100svh] fixed z-[-1] left-0 top-0 brightness-75' />
      <Top />
      <Select />
      <About_hm />
      <SellsProperties_hm />
      <Services_hm />
      <Properties_hm />
      <Apartments_hm />
      <Transparent_hm />
      <OurAmenities_hm />
      <Client_hm />
      <News_hm />
    </section>
 
  )
}

export default Home