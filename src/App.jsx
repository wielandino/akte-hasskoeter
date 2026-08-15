import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CharacterGallery from './components/CharacterGallery'
import CharacterModal from './components/CharacterModal'
import CaseFileSection from './components/CaseFileSection'
import CaseFileSideNav from './components/CaseFileSideNav'
import GameplaySection from './components/GameplaySection'
import Footer from './components/Footer'
import AccessibilityPanel from './components/AccessibilityPanel'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  return (
    <div className="min-h-screen bg-void">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <CharacterGallery onSelectCharacter={setSelectedCharacter} />
      <CaseFileSection />
      <CaseFileSideNav />
      <GameplaySection />
      <Footer />
      <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      <AccessibilityPanel />
      <ScrollToTopButton />
    </div>
  )
}

export default App
