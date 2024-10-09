import React from 'react'
import Header from '../../components/Header/Header'
import UserStory from '../../components/User/UserStory'
import JoinUs from '../../components/Join/JoinUs'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'

import VaccineHero from './VaccineHero'
import Review from '../../components/Reviewss/Review'
import VaccineType from './VaccineType'

const VaccinePage = () => {
  return (
    <div>
        <Header />
        <VaccineHero />
        <Review />
        <VaccineType />
        <UserStory />
        <JoinUs />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default VaccinePage