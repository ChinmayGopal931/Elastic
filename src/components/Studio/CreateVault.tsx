import React from 'react';
import { Link } from 'react-router-dom';

const CreateVault = () => {
  return (
    <Link to="/create" className="no-underline">
      <div className="flex flex-col items-center justify-center">
        <div className="gradiant-border cursor-pointer hover:opacity-80 hover:duration-200 text-center">
          <div className="bg-white dark:bg-background rounded-xl p-3">
            <p className="text-primary_brand_01 dark:text-white font-bold text-sm ">
              Create new vault
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CreateVault;
