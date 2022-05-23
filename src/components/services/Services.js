import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import './service.css'

const Services = () => {
  return (
    <section id='expertise'>
        <h5>Innovate & Create</h5>
        <h2>Expertise</h2>
        <div className='container services-container'>
            <article className='service'>
              <div className='service-head'>
                  <h3>Services</h3>
              </div>
              <ul className='service-list'>
                  <li>
                      <AiOutlineCheck className='service-icons'></AiOutlineCheck>
                      <p>Smart Contract Development</p>
                  </li>
                  <li>
                      <AiOutlineCheck className='service-icons'></AiOutlineCheck>
                      <p>Web3 Integration</p>
                  </li>
                  <li>
                      <AiOutlineCheck className='service-icons'></AiOutlineCheck>
                      <p>Dapp Development</p>
                  </li>
                  <li>
                      <AiOutlineCheck className='service-icons'></AiOutlineCheck>
                      <p>Dapp middleware Development i.e. APIs</p>
                  </li>
                  <li>
                      <AiOutlineCheck className='service-icons'></AiOutlineCheck>
                      <p>Chainlink Integration</p>
                  </li>
              </ul>
            </article>
        </div>
    </section>
  )
}

export default Services
