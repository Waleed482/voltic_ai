import CHeroSection from '@/components/contactUs/CHeroSection'
import FrequentQuestions from '@/components/contactUs/FrequentQuestions'
import MainBranches from '@/components/contactUs/MainBranches'
import MarqureeBar from '@/components/home/MarqureeBar'
import ContactNow from "@/components/home/ContactNow"
import React from 'react'

const page = () => {
  return (
    <>
    <CHeroSection/>
    <MarqureeBar/>
    <MainBranches/>
    <FrequentQuestions/>
    <ContactNow/>
    
    </>
  )
}

export default page