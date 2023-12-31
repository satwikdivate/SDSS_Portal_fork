import React from 'react'
import NewsSection from '../../components/NewsSection/NewsSection'
import Header from '../../components/Header/Header'
import Banner from '../../components/BannerShakha/Banner'
import NewsUpdatesPost from '../../components/NewsUpdates/NewsUpdate'

const Landing = () => {
  return (
    <>
    <Header />
    <Banner />
    <NewsSection  />
    <NewsUpdatesPost />
    </>
  )
}

export default Landing