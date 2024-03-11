import { useState, useMemo } from 'react';
import { VaultForm } from 'types/VaultForm';
import Steps from 'components/Steps';

import AddAssets from '../../components/Create/AddAssets';
import Creation from '../../components/Create/Creation';
import PermissionsAndFees from 'components/Create/Permissions';
import VaultRoom from 'components/Create/VaultRoom';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<VaultForm>({
    vaultInfo: {
      name: '',
      symbol: '',
      favicon: '',
      creator_name: '',
      description: '',
    },
    assetsAndParams: {
      assets: [],
      params: {
        equalWeight: false,
        frequency: 'daily',
        marketCapWeight: false,
      },
    },
    permissionsAndFees: {
      fees: {
        managementFee: 0,
        performanceFee: 0,
        sharedFee: 0,
      },
      permissions: {
        vaultPrivacy: false,
        vaultModification: false,
        managers: [],
        strategists: [],
      },
    },
  });

  const handleDataChange = (section: keyof VaultForm) => (data: VaultForm[keyof VaultForm]) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: data,
    }));
  };

  const steps = [
    { label: 'Info' },
    { label: 'Assets & Parameters' },
    { label: 'Permissions and Fees' },
    { label: 'Vault Room' },
  ];

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const renderComponents = () => {
    switch (activeStep) {
      case 0:
        return (
          <Creation
            data={formData.vaultInfo}
            onDataChange={handleDataChange('vaultInfo')}
            handleNextStep={handleNextStep}
          />
        );

      case 1:
        return (
          <AddAssets
            data={formData.assetsAndParams}
            onDataChange={handleDataChange('assetsAndParams')}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );

      case 2:
        return (
          <PermissionsAndFees
            data={formData.permissionsAndFees}
            onDataChange={handleDataChange('permissionsAndFees')}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );

      case 3:
        return <VaultRoom data={formData} />;

      default:
        return undefined;
    }
  };

  return (
    <div className="page-container flex items-center">
      <div className="w-full">
        {activeStep !== 3 && <Steps activeStep={activeStep} steps={steps} />}
      </div>
      {renderComponents()}
    </div>
  );
};

export default Create;
