import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import JoinUs from '../../components/Join/JoinUs'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

import FeatureHero from './FeatureHero'
import FeatureSubHero from './FeatureSubHero'
import FeaturesList from './FeaturesList'

const FeaturePage = () => {
  return (
    <div>
        <Header />
        <div className='bg-[#F6F6F6]'>
            <FeatureHero />
            <FeatureSubHero />
            <FeaturesList />
        </div>
        <JoinUs />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default FeaturePage