import React from 'react';

import FlashlightEffect from '../components/Flashlight';
import MainLayout from '../components/MainLayout';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Add any header, navbar or other components here */}

      <MainLayout>
        <FlashlightEffect />
      </MainLayout>

      {/* Add other content specific to the landing page here */}
    </div>
  );
};

export default LandingPage;
