import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import education from '../assets/images/education.jpg'
import certsandexams from '../assets/images/certsandexams.jpg'
import projects from '../assets/images/projects.jpg'
import experience from '../assets/images/experience.jpg'
import inventions from '../assets/images/inventions.jpg'
import interests from '../assets/images/interests.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Michael Moritz"
                    meta={[
                        { name: 'description', content: 'Michael Moritz' },
                        { name: 'keywords', content: 'comcast, ip video, aws, program management, director, software' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${education})`}}>
                            <header className="major">
                                <h3>Education</h3>
                                <p>B.S. Chemical engineering</p>
                                <p>Minors: Math, Biochemical engineering</p>
                                <p>&nbsp;</p>
                            </header>
                            <Link to="/education" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${experience})`}}>
                            <header className="major">
                                <h3>Professsional Experience</h3>
                                <p>W.L. Gore PharmBIO</p>
                                <p>Danaher Medical Imaging</p>
                                <p>Comcast IP Video</p>
                            </header>
                            <Link to="/experience" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${inventions})`}}>
                            <header className="major">
                                <h3>Patents</h3>
                                <p>Prefilled Syringe for Low Protein Aggregation</p>
                                <p>Reducing Friction Between Syringe Components</p>
                                <p>Fluoropolymer Barrier Materials</p>
                            </header>
                            <Link to="/patents" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${certsandexams})`}}>
                            <header className="major">
                                <h3>Certifications and Exams</h3>
                                <p>AWS Certification</p>
                                <p>Fundamentals of Engineering Exam</p>
                                <p>CFA Level 1 Exam</p>
                            </header>
                            <Link to="/certsandexams" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${projects})`}}>
                            <header className="major">
                                <h3>Personal Projects</h3>
                                <p>Healthweb</p>
                                <p>LiftSmart</p>
                                <p>Wibsie</p>
                            </header>
                            <Link to="/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${interests})`}}>
                            <header className="major">
                                <h3>Interests</h3>
                                <p>Medium articles</p>
                                <p>Rock climbing</p>
                                <p>Plant-based cooking</p>
                            </header>
                            <Link to="/interests" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
