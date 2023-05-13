import Header from '@/components/header/header'
import Intro from '@/components/pageComponents/intro/intro'
import PageWrapper from '@/components/pageComponents/pageWrapper/pageWrapper'
import React from 'react'
import Title from '@/components/pageComponents/title/title'
import Footer from '@/components/footer/footer'
import { Inter } from 'next/font/google'
import IconArrowLeft from '@/components/icons/navigation/left'
import Link from 'next/link'
import ContentBox from '@/components/pageComponents/contentBox/contentbox'
import Paragraph from '@/components/pageComponents/paragraph'
import FlexRow from '@/components/pageComponents/flexRow'
import IconSpan from '@/components/pageComponents/iconSPan'
import IconClear from '@/components/icons/clear'
import IconReset from '@/components/icons/reset'
import IconSettingsOutline from '@/components/icons/settings'
import IconSoftware_pencil from '@/components/icons/pencil'
import IconGitea from '@/components/icons/drink'
import IconBxLinkExternal from '@/components/icons/navigation/link'

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
              <Paragraph>
                Use the <span>settings panel</span> below the grid and the individual row and column <span>size inputs</span> on the grid panel to produce your custom Grid. <span>Click and drag</span> within the boxes in the grid panel to create grid areas within the grid.
              </Paragraph>
            
              <Intro>
                Instructions & Usage
              </Intro>
              <ContentBox>
                <FlexRow>
                  <IconSpan>
                    <IconClear/>
                  </IconSpan>
                  Clear Grid Button
                </FlexRow>
                <Paragraph>
                  This button clears all individual <span>Click and drag</span> selections from the grid. The rows and columns will be <span>unchanged</span>. The Html and Css code will update automatically.
                </Paragraph>
              </ContentBox>


              <ContentBox>
                <FlexRow>
                  <IconSpan>
                    <IconReset/>
                  </IconSpan>
                  Full Reset Button
                </FlexRow>
                <Paragraph>
                  This button removes <span>all</span> user inputs and the corresponding Html and Css code.
                </Paragraph>
              </ContentBox>


              <ContentBox>
                <FlexRow>
                  <IconSpan>
                    <IconSoftware_pencil/>
                  </IconSpan>
                  Generate Code Button
                </FlexRow>
                <Paragraph>
                  This button generates the <span>Html and Css </span> code for you grid which you can then <span>copy</span> into your own code.
                </Paragraph>
              </ContentBox>

              <ContentBox>
                <FlexRow>
                  <IconSpan>
                    <IconSettingsOutline/>
                  </IconSpan>
                  Settings Panel
                </FlexRow>
                <Paragraph>
                 This panel allows the user to adjust the number of <span>rows, columns</span> (the max is 12 for each) and the <span>row gap and column gap</span> (in px).
                </Paragraph>
              </ContentBox>
              <Paragraph>
                This Project was built with
                 <a href="https://nextjs.org/"
                 className='normal-anchor' target='_blank'> <span className='normal-anchor-text'>Next Js</span> <span><IconBxLinkExternal/></span> </a>.
                 View the code on  
                  <a href="https://github.com/williambroberts/grid.git"
                 className='normal-anchor' target='_blank'
                 > <span className='normal-anchor-text'>github here </span>
                 <span><IconBxLinkExternal/></span>
                 </a>.
                  Fork it if you wish. <FlexRow>Thanks<IconGitea style={{color:`var(--themecolor)`}}/></FlexRow>
              </Paragraph>
              <Link className={`${inter.className} light-button`} 
          href="/"
          > <IconArrowLeft/> Back</Link>
        </PageWrapper>
    </main>
    <Footer/>
    </>
  )
}

export default AboutPage