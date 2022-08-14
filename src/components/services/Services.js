import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import './service.css'

const Services = () => {
  return (
    <section id='expertise'>
        <h5>Innovate & Create</h5>
       
        <div className='container services-container'>
            <article className='service'>
              <div className='service-head'>
                  <h3>Expertise</h3>
              </div>
              <ul className='service-list'>
                  <li>
                      <AiOutlineCheck className='service-icons'></AiOutlineCheck>
                      <p>Technical Support</p>
                  </li>
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
                      <p>API Integration and Development</p>
                  </li>
              </ul>
            </article>
        </div>
    </section>
  )
}

export default Services
