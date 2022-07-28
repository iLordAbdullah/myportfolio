import React from 'react'
import './certificates.css'
import IMG1 from '../../assets/cer1.png'
import IMG2 from '../../assets/cer2.png'
import IMG3 from '../../assets/cer3.png'
import IMG4 from '../../assets/cer4.png'
import IMG5 from '../../assets/cer5.png'
import IMG6 from '../../assets/cer6.png'


const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>My Completed</h5>
      <h2>Certifications</h2>

      <div className="container certificates__container">
        <article className='certificates__item'>
          <div className="certificate__item-image">
          <img src={IMG1} alt="" />
          </div>
          <h3>Learning Oracle DB 12c</h3>
        </article>

        <article className='certificates__item'>
          <div className="certificate__item-image">
          <img src={IMG2} alt="" />
          </div>
          <h3>Oracle DB 12c: Basic SQL</h3>
        </article>

        <article className='certificates__item'>
          <div className="certificate__item-image">
          <img src={IMG3} alt="" />
          </div>
          <h3>Oracle DB 12c: Advanced SQL</h3>
        </article>

        <article className='certificates__item'>
          <div className="certificate__item-image">
          <img src={IMG4} alt="" />
          </div>
          <h3>Oracle DB 12c: Backup and Recovery</h3>
        </article>

        <article className='certificates__item'>
          <div className="certificate__item-image">
          <img src={IMG5} alt="" />
          </div>
          <h3>Oracle DB 12c: Administration</h3>
        </article>

        <article className='certificates__item'>
          <div className="certificate__item-image">
          <img src={IMG6} alt="" />
          </div>
          <h3>Oracle DB 12c: Basic SQL Security</h3>
        </article>

      </div>
    </section>
  )
}

export default Certificates