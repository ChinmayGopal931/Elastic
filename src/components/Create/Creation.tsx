import { useFormik } from 'formik';
import React from 'react';
import { VaultInfo as VaultInfoType } from 'types/VaultForm';
import * as Yup from 'yup';
import VaultInfo from './VaultInfo';
interface Props {
  data: VaultInfoType;
  onDataChange: (data: VaultInfoType) => void;
  handleNextStep: () => void;
}
const Creation = ({ data, onDataChange, handleNextStep }: Props) => {
  const formik = useFormik({
    initialValues: data,
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter name of your vault'),
      symbol: Yup.string().required('Please enter symbol of your vault'),
      favicon: Yup.string().required('Please enter favicon of your vault'),
      creator_name: Yup.string().required('Please enter creator name'),
      description: Yup.string().required('Please enter description of your vault'),
    }),
    onSubmit: (values) => {
      onDataChange(values);
      handleNextStep();
    },
  });

  return <VaultInfo formik={formik} />;
};

export default Creation;
