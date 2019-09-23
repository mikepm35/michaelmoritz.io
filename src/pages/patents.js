import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Moritz - Patents</title>
            <meta name="description" content="Michael Moritz patents" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Patents</h1>
                    </header>
                    <ul>
                      <li><b>US9597458</b> - Fluoropolymer Barrier Materials for Containers</li>
                      <li><b>US9539394</b> - Method of Reducing Friction Between Syringe Components</li>
                      <li><b>US8722178</b> - Prefilled Syringe for Low Protein Aggregation</li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
