import React from 'react'
import Layout from "../components/layout"
import Card from "../components/card"
import "../components/index.css"

const Index = () => {
  return(
    <Layout>
      <div className="Cards">
      <h2>How can we help</h2>
      <div className='cardGroup'>
      <Card
        title="Web Design"
        text="Sub Title" />
        <Card 
        title="Photographs"
        text="Photo Location" />
        <Card 
        title="Ideas and Recommendations"
        text="Let us build your web presence" />
        </div>
      </div>
    </Layout>
  )
}

export default Index
