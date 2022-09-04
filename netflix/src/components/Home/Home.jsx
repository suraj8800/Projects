import React from 'react'
import "./Home.scss"

const Card = ({ img }) => {
  <img src={img} alt="cover" />
}

const Row = ({ title }) => {
  <div>
    <h2>
      {title}
    </h2>

    <Card img={"https://www.denofgeek.com/wp-content/uploads/2018/04/infinity_war-1.jpg?resize=768%2C432"}/>
  </div>
}

function Home() {
  return (
    <section className='home'>
      <div className="banner">
        <Row title={"Popular On Netflix"} />
      </div>

    </section>
  )
}

export default Home