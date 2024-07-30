import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default page