import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useEventinhoData } from './hooks/useEventinhoData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useEventinhoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Eventinho</h1>
      <div className="card-grid">
        {data?.map(eventinhoData => 
          <Card
            price={eventinhoData.price} 
            title={eventinhoData.title} 
            image={eventinhoData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App