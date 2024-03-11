import InnerLayoutHeader from 'components/Create/InnerLayoutHeader';
import InputField from 'components/UI/InputField/InputField';
import TextArea from 'components/UI/TextArea';
import { Button } from 'components/UI/Button/Button';

interface Props {
  formik: any;
}

function VaultInfo({ formik }: Props) {
  return (
    <div className="flex flex-col self-center desktop:w-10/12 mobile:w-full mt-14">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <InnerLayoutHeader
            heading="Vault Info"
            caption={
              <p>
                One vault to rule them all.
                <br />
                Using DutchX's no-code DeFi platform, you can build any type of market following a
                few simple steps.
              </p>
            }
          />
          <div className="flex desktop:flex-row mobile:flex-col items-center justify-between desktop:gap-20">
            <InputField
              label="Vault Name"
              placeholder="Enter vault name ..."
              name="vault-name"
              id="name"
              value={formik.values.name}
              onChange={(value) => formik.setFieldValue('name', value.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
            />
            <InputField
              label="Vault Symbol"
              placeholder="Enter vault symbol ..."
              name="vault-symbol"
              id="symbol"
              value={formik.values.symbol}
              onChange={(value) => formik.setFieldValue('symbol', value.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.symbol && formik.errors.symbol ? formik.errors.symbol : null}
            />
            <InputField
              label="Choose Favicon"
              placeholder="Select vault favicon ..."
              name="vault-favicon"
              id="symbol"
              value={formik.values.favicon}
              onChange={(value) => formik.setFieldValue('favicon', value.target.value)}
              onBlur={formik.handleBlur}
              error={formik.touched.favicon && formik.errors.favicon ? formik.errors.favicon : null}
            />
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col mobile:w-full">
              <InputField
                placeholder="Enter creator name ..."
                label="Creator Name"
                name="creator-name"
                id="creator_name"
                value={formik.values.creator_name}
                onChange={(value) => formik.setFieldValue('creator_name', value.target.value)}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.creator_name && formik.errors.creator_name
                    ? formik.errors.creator_name
                    : null
                }
              />
              <TextArea
                placeholder="Please describe here what your Vault is aimed for..."
                label="Vault Description"
                name="description"
                id="description"
                value={formik.values.description}
                onChange={(value: any) => formik.setFieldValue('description', value.target.value)}
                error={
                  formik.touched.description && formik.errors.description
                    ? formik.errors.description
                    : null
                }
              />
            </div>
            <div className="desktop:w-full mobile:hidden desktop:block" />
            <div className="desktop:w-full mobile:hidden desktop:block" />
          </div>
        </div>
        <div className="flex my-10 desktop:w-full mobile:w-full desktop:justify-end mobile:justify-between">
          <Button variant="next-btn" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VaultInfo;
