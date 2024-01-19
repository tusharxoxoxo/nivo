// src/pages/InventoryPage.tsx
import React, { useEffect, useState } from 'react';
import { getModels } from '../../api/getModels';
import ModelCard from '../../components/ModelCard';

const InventoryPage: React.FC = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await getModels();
        setModels(response.data); // Assuming the response has a "data" property with an array of models
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };

    fetchModels();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Models Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => (
          <ModelCard
            key={model.id} // Assuming each model has a unique identifier
            modelName={model.name}
            modelType={model.type}
          />
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;

