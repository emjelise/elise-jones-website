import React from 'react'
import Layout from "../components/layout"
import Card from "../components/card"
import "../components/index.css"
import { Link } from "gatsby"

const Index = () => {
  return(
    <Layout>
      <div className="Cards">
      <h2>How can we help</h2>
      <div className='cardGroup'>
        <div className="cardOne">
          <Link to= "/services">
          <Card
            title="Web Design"
            text="Websites" 
          />
          </Link>
         </div>
         <div className='cardTwo'>
         <Link to= "/gallery">
          <Card
            title="Photographs"
            text="Images" 
            />
            </Link>
         </div>
         <div className='cardThree'>
         <Link to= "/contact">
         <Card 
          title="Ideas and Recommendations"
          text="Let us build your web presence" 
          />
          </Link>
         </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
