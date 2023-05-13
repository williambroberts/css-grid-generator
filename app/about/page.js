import Header from '@/components/header/header'
import Intro from '@/components/pageComponents/intro/intro'
import PageWrapper from '@/components/pageComponents/pageWrapper/pageWrapper'
import React from 'react'
import Title from '@/components/pageComponents/title/title'
import Footer from '@/components/footer/footer'
import { Inter } from 'next/font/google'
import IconArrowLeft from '@/components/icons/navigation/left'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const AboutPage = () => {
  return (
    <>
    <Header/>
    <main>
        <PageWrapper>
          <Link className={`${inter.className} light-button`} 
          href="/"
          > <IconArrowLeft/> Back</Link>
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