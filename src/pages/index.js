import React from 'react'
import Layout from "../components/layout"
import Card from "../components/card"

const Index = () => {
  return(
    <Layout>
      <div className="Cards">
      <h2>How can we help</h2>
      <Card
        title="Web Design"
        text="Sub Title"/>
        <Card 
        title="Photographs"
        text="Sub Title"/>
      </div>
    </Layout>
  )
}

export default Index
