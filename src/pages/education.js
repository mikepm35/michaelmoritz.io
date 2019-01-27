import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Moritz - Education</title>
            <meta name="description" content="Michael Moritz education" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Education</h1>
                    </header>
                    <h2 id="content">University of Delaware - B.S. Chemical Engineering</h2>
                    <h4>Minors</h4>
                    <ul>
                      <li>Mathematics, Biochemical Engineering, and Chemistry</li>
                    </ul>
                    <h4>Research Assistant to Dr. Prasad Dhurjati</h4>
                    <ul>
                        <li>Converteda gene expression pattern simulator from Java to Matlab, and refined PDE models.</li>
                    </ul>
                    <h4>Research Assistant to Dr. Abraham Lenhoff</h4>
                    <ul>
                        <li>Designed and executed protein crystallization experiments to determine thermodynamically and kinetically driven phase boundariesfor glucose isomerase.</li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
