// src/components/ModelCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ModelCardProps {
  modelName: string;
  modelType: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ modelName, modelType }) => {
  return (
    <Link to={`/analysis/${modelName}`} className="w-full p-4 border border-transparent hover:border-blue-500">
      <div className="flex justify-between items-center">
        <span>{modelName}</span>
        <span>{modelType}</span>
      </div>
    </Link>
  );
};

export default ModelCard;
