import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

function App() {
  const cards = data.map(card => <Card
    key={card.id}
    title={card.title}
    description={card.description}
    price={card.price}
    coverImg={card.coverImg}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    location={card.location}
    openSpots={card.openSpots}
  />)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
