import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import JoinUs from '../../components/Join/JoinUs'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import UserStory from '../../components/User/UserStory'
import Review from '../../components/Reviewss/Review'

import FeatureHero from './FeatureHero'
import FeaturesList from './FeaturesList'

const FeaturePage = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        <Header />
        <FeatureHero />
        <Review />
        <FeaturesList />
        <UserStory />
        <JoinUs />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default FeaturePage