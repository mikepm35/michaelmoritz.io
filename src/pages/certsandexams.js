import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Moritz - Certifications and Exams</title>
            <meta name="description" content="Michael Moritz certifications and exams" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Certifications and Exams</h1>
                    </header>
                    <h4>Amazon Web Services</h4>
                    <ul>
                      <li>Certified Cloud Practitioner (2019)</li>
                    </ul>
                    <h4>GRE (2019): Math 167/170, Verbal 167/170</h4>
                    <h4>PE Fundamentals of Engineering Exam (Pass)</h4>
                    <h4>Certified Financial Analyst Level 1 Exam (Pass)</h4>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
