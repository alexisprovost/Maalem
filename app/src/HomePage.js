import { useState, useEffect } from 'react'
import { Navigation } from './components/Home/NavigationHome'
import { Header } from './components/Home/Header'
import { Features } from './components/Home/Features'
import { Team } from './components/Home/Team'
import { Contact } from './components/Home/Contact'
import JsonData from './components/Home/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App