import React from "react";
import { Permissions, Fees } from "types/VaultForm";

// Components
import CustomSwitch from "components/UI/CustomSwitch/CustomSwitch";
import LayoutHeader from "components/UI/LayoutHeader/LayoutHeader";

interface VaultPermissionsProps {
  data: {
    permissions: Permissions;
    fees: Fees;
  };
  onDataChange: (updatedData: { permissions: Permissions; fees: Fees }) => void;
}

const VaultPermissions: React.FC<VaultPermissionsProps> = ({
  data,
  onDataChange,
}) => {
  const handlePermissionsChange = (
    permissionName: keyof Permissions,
    checked: boolean
  ) => {
    onDataChange({
      ...data,
      permissions: { ...data.permissions, [permissionName]: checked },
    });
  };

  const handleFeesChange = (updatedFees: Fees) => {
    onDataChange({ ...data, fees: updatedFees });
  };

  return (
    <>
      <LayoutHeader title="Permissions and Fees" />
      <div>
        <label className="text-base heading">Vault Privacy</label>
        <CustomSwitch
          checked={data.permissions.vaultPrivacy}
          onChange={(checked) =>
            handlePermissionsChange("vaultPrivacy", checked)
          }
        />
      </div>
      <div>
        <label>Vault Modification</label>
        <CustomSwitch
          checked={data.permissions.vaultModification}
          onChange={(checked) =>
            handlePermissionsChange("vaultModification", checked)
          }
        />
      </div>
      {/* Render InputField components for managers and strategists, if needed */}
      {/* Render InputField components for fees, as before */}
    </>
  );
};

export default VaultPermissions;
