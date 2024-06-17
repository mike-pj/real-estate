import React from 'react'
import Top from '../About/Top'
import Services_about from '../About/Services_about'
import About_us from '../About/About_us'
import Client_about from '../About/Client_about'
import News_about from '../About/News_about'
import Teams_about from '../About/Teams_about'


function About() {
  return (
    <section>
      <Top />
      <About_us />
      <Services_about />
      <Teams_about />
      <Client_about />
      <News_about />
    </section>
  )
}

export default About