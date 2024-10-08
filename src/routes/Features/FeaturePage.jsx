import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import JoinUs from '../../components/Join/JoinUs'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import UserStory from '../../components/User/UserStory'

import FeatureHero from './FeatureHero'
import FeatureSubHero from './FeatureSubHero'
import FeaturesList from './FeaturesList'

const FeaturePage = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        <Header />
        <FeatureHero />
        <FeatureSubHero />
        <FeaturesList />
        <UserStory />
        <JoinUs />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default FeaturePage