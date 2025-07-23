import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className='home-section'>
          <CompanionCard
    id="123"
    name="Neura the Brainy Explorer"
    topic="Neural Network of the Brain"
    subject="science"
    duration={45}
    color="#ffda6e"
  />
         <CompanionCard
    id="124"
    name="Scientia the Knowledge Seeker"
    topic="advanced AI in Science"
    subject="science"
    duration={35}
    color="#ffffff"
  />
          <CompanionCard
    id="125"
    name="Neuro the Neural Navigator"
    topic="brain-computer interface"
    subject="science"
    duration={15}
    color="#ccfff4" 
  />

      </section>
      <section className='home-section'>
        <CompanionsList/>
        <Cta/>
      </section>
    </main>
  )
}

export default Page