import Header from '@/components/header/header'
import Intro from '@/components/intro/intro'
import PageWrapper from '@/components/pageWrapper/pageWrapper'
import React from 'react'

const AboutPage = () => {
  return (
    <>
    <Header/>
    <main>
        <PageWrapper>
            <Title name={"About"}/>
            <Intro>
                About this project
            </Intro>
        </PageWrapper>
    </main>
    <Footer/>
    </>
  )
}

export default AboutPage