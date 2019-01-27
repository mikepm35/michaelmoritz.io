import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerInterests from '../components/BannerInterests'

import rockclimbing from '../assets/images/rockclimbing.jpg'
import cooking from '../assets/images/cooking.jpg'
import biking from '../assets/images/biking.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Michael Moritz - Interests</title>
            <meta name="description" content="Michael Moritz personal interests" />
        </Helmet>

        <BannerInterests />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img src={rockclimbing} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rock Climbing</h3>
                            </header>
                            <p>I have enjoyed rock climbing for many years because of the unique combination of physical and mental toughness and problem solving.
                            While I enjoy outdoor trips the most (e.g. Red River Gorge, Red Rocks), you can also find me in the nearest indoor climbing gym.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={cooking} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Plant-based Cooking</h3>
                            </header>
                            <p>Since my wife is a Cardiologist, I have become intimately familiar with the health effects of what you eat.
                            Starting a few years ago I transitioned to a fully plant-based diet, which also reinvigorated my love for cooking.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={biking} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Other Activities</h3>
                            </header>
                            <p>Besides the above I also enjoy road biking, mountain biking, strength training, and reading non-fiction.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
