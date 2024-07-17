import React from 'react'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import SolutionsCards from '../Solutions/SolutionsCards'
import Form from '../Form/Form'

function LandingPage() {
  return (
    <div>
        <section className='section-one'>
            <Hero />
        </section>
        <section className='section-two'>
            <Services />
        </section>
        <section className='section-three'>
            <SolutionsCards />
        </section>
        <section className='section-four'>
            <Form />
        </section>
    </div>
  )
}

export default LandingPage