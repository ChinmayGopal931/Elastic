import { Button } from 'components/UI/Button/Button';
import Dropdown from 'components/UI/Dropdown/Dropdown';
import InputField from 'components/UI/InputField/InputField';
import LayoutHeader from 'components/UI/LayoutHeader/LayoutHeader';
import Loader from 'components/UI/Loader/Loader';
import { useFormik } from 'formik';
import { useState } from 'react';
import { dropdownAssets } from './mock';
import StatusBar from './StatusBar';

type Status = 'loading' | 'success' | 'error' | 'idle';

const Faucet = () => {
  const [status, setStatus] = useState<Status>('idle');
  const formik = useFormik({
    initialValues: {
      accountAddress: '',
      symbol: '',
    },
    onSubmit: async (values) => {
      setStatus('loading');
      try {
        const result = await fetch(``);
        const parsed: { message: string } = await result.json();
        if (!parsed.message.includes('Success')) {
          setStatus('error');
          formik.resetForm();
          return;
        }
        setStatus('success');
        formik.resetForm();
      } catch (e) {
        setStatus('error');
      }
    },
  });

  return (
    <>
      <div className="mb-6">
        <form onSubmit={formik.handleSubmit}>
          <LayoutHeader
            title={'Testnet Faucet'}
            description="The funds distributed here are strictly for testnet purposes.

            They carry no monetary value in the real-world market."
          />
          <InputField
            label="Account Address"
            placeholder="Input your address ..."
            name="address"
            id="symbol"
            value={formik.values.accountAddress}
            onChange={(value) => formik.setFieldValue('accountAddress', value.target.value)}
            onBlur={formik.handleBlur}
            error={
              formik.touched.accountAddress && formik.errors.accountAddress
                ? formik.errors.accountAddress
                : null
            }
          />
          <p className="mt-4 heading text-base">{'Asset'}</p>
          {/* <Dropdown
            bordered
            className="mt-2 min-h-[50px] min-w-full"
            placeHolder="Choose Asset"
            options={dropdownAssets}
            theme={{ type: "asset" }}
            selectedLabel={formik.values.symbol}
            setSelectedOption={(value: string) => {
              formik.setFieldValue("symbol", value);
            }}
          /> */}
          <select
            value={formik.values.symbol}
            onChange={(value) => formik.setFieldValue('symbol', value.target.value)}
            className="input-field mobile:w-full p-0 px-2"
          >
            {dropdownAssets.map((asset, index) => (
              <option key={`${asset.title} ${index}`}>{asset.title}</option>
            ))}
          </select>
          <div className="flex items-center justify-center">
            <Button className="w-1/3 mt-4" variant="next-btn" type="submit">
              {status === 'loading' ? <Loader height={30} /> : 'Submit'}
            </Button>
          </div>
          <StatusBar status={status} />
        </form>
      </div>
    </>
  );
};

export default Faucet;
