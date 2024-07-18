import React, { useEffect, useState } from 'react';

// import navigation bar and footer components
import Navbar from './components/NavBar';
import Footer from './components/Footer';

// import the sections
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// import the weather service
import weatherService from './services/weather';
import { WeatherContext } from './context/WeatherContext';

const App: React.FC = () => {
  const [weather, setWeather] = useState<weatherType | null>(null);

  type weatherType = {
    name: string,
    temp: string,
    description: string,
    humidity: string,
    wind: string,
    imgUrl: string
  };

  useEffect(() => {
    weatherService.getWeather().then((data: weatherType) => {
      setWeather(data);
    });
  }, []);

  return (
    <main>
      <WeatherContext.Provider value={weather}>
        <Navbar />
      </WeatherContext.Provider>
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;
