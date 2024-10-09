import React from 'react'

import Header from '../../components/Header/Header'
import Review from '../../components/Reviewss/Review'
import JoinUs from '../../components/Join/JoinUs'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'

import DoctorHero from './DoctorHero'
import DoctorsRole from './DoctorsRole'

const DoctorPage = () => {
  return (
    <div>
        <Header />
        <DoctorHero />
        <Review />
        <DoctorsRole />
        <JoinUs />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default DoctorPage