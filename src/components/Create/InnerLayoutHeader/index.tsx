import React from 'react';

interface Props {
  heading: string;
  caption: any;
}

function InnerLayoutHeader({ heading, caption }: Props) {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <div className="divider w-4/12 my-5" />
      <p className="muted-text mb-10 body-medium-15">{caption}</p>
    </>
  );
}

export default InnerLayoutHeader;
