import React from 'react'
import { Metadata } from 'next'
// import Blogs from '@/components/blogs'
import Hero from '@/components/Home/Hero'
import BasicInfo from '@/components/Home/BasicInfo'
import OurCourses from '@/components/courses/OurCourses'
import Testimonial from '@/components/Home/Testimonial'
import OurFocus from '@/components/Home/OurFocus'
import CourseForYou from '@/components/courses/CourseForYou'
import OnlineEnglishTest from '@/components/Test/OnlineEnglishTest'
import Faqs from '@/components/Home/Faqs'
import UpComingBatches from '@/components/Batches/UpComingBatches'
import PersonalityDevelop from '@/components/Home/PersonalityDevelop'
import BentoGallery from '@/components/Home/BentoGallery'

export const metadata: Metadata = {
  title: "Crystal Pathshala: Learn Spoken English & Professional Skills in Noida, Delhi NCR",
  description: "Crystal Pathshala offers top-tier training in Spoken English, Public Speaking, Personality Development, and Corporate Training in Noida, Delhi NCR. Elevate your skills today!",
  keywords: "Crystal Pathshala, Spoken English, Public Speaking, Personality Development, Professional English, Corporate Training, Noida, Delhi NCR, skills training",
  openGraph: {
    title: "Crystal Pathshala: Learn Spoken English & Professional Skills in Noida, Delhi NCR",
    description: "Crystal Pathshala offers top-tier training in Spoken English, Public Speaking, Personality Development, and Corporate Training in Noida, Delhi NCR. Elevate your skills today!",
    type: "website",
    url: "https://crystalpathshala.com/",
    images: "https://crystalpathshala.com/images/rahul-p-dev.png",
  },
  twitter: {
    site: "twitter",
    title: "Crystal Pathshala: Learn Spoken English & Professional Skills in Noida, Delhi NCR",
    description: "Crystal Pathshala offers top-tier training in Spoken English, Public Speaking, Personality Development, and Corporate Training in Noida, Delhi NCR. Elevate your skills today!",
  },
};

const Home = () => {
  return (
    <div className='bg-gray-50 text-gray-900'>
      <Hero />
      <CourseForYou />
      <BasicInfo />
      <PersonalityDevelop />
      <OurCourses />
      <Testimonial />
      <OnlineEnglishTest />
      <BentoGallery />
      <Faqs isPage={false} />
      <UpComingBatches />
      {/* <OurFocus /> */}
      {/* <Blogs /> */}
    </div>
  )
}

export default Home