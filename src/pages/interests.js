import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerInterests from '../components/BannerInterests'

import article from '../assets/images/article.png'
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
                    <img src={article} alt="" className="image"/>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Medium Articles</h3>
                            </header>
                            <p>
                            <ul>
                              <li><a href="https://medium.com/@mike.p.moritz/serverless-tensorflow-workflow-with-ec2-auto-training-495f47bd892d?sk=52282f09dc6dbffc9bdac6186850bf7a">Serverless TensorFlow workflow with EC2 auto-training</a></li>
                              <li><a href="https://medium.com/@mike.p.moritz/keras-hyperparameter-optimization-on-aws-cbd494a7ea15?source=friends_link&sk=fb831dda0c462c355f699ba4c68a0c17">Keras Hyperparameter Optimization in the Cloud</a></li>
                              <li><a href="https://medium.com/@mike.p.moritz/running-tensorflow-on-aws-lambda-using-serverless-5acf20e00033?source=friends_link&sk=53d2efa72acb277cddf5030362281796">Running TensorFlow on AWS Lambda using Serverless</a></li>
                              <li><a href="https://medium.com/@mike.p.moritz/using-docker-compose-to-deploy-a-lightweight-python-rest-api-with-a-job-queue-37e6072a209b?source=friends_link&sk=cb3f76a59c38f5c0919c40b0e5f011f2">Using Docker Compose to deploy a lightweight Python REST API with a job queue</a></li>
                              <li><a href="https://medium.com/@mike.p.moritz/using-apache-zeppelin-with-sql-server-d1964207ac5e?source=friends_link&sk=5db9a5d4ad3d2c0f4bed4f8ee2076f22">Using Apache Zeppelin with SQL Server</a></li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={rockclimbing} alt="" className="image"/>
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
                    <img src={cooking} alt="" className="image"/>
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
                    <img src={biking} alt="" className="image"/>
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
