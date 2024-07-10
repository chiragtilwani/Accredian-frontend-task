import {useState} from 'react'

import './App.css'
import HeroSection from './components/hero/Hero';
import ReferralFormModal from './components/referralFormModal/ReferralFormModal';
import Carousels from './components/carousels/Carousels'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferNow = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
    handleCloseModal();
  };

  return (
    <div className="container">
      <Carousels/>
      <HeroSection onReferNow={handleReferNow} />
      <ReferralFormModal open={modalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
