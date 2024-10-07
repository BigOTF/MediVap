import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import FeatureHero from './FeatureHero'
import FeatureSubHero from './FeatureSubHero'

const FeaturePage = () => {
  return (
    <div>
        <Header />
        <FeatureHero />
        <FeatureSubHero />
        <Footer />
    </div>
  )
}

export default FeaturePage