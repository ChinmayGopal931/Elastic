import React from 'react';

interface OutputWithLabelProps {
  label: string;
  value: any;
}

const OutputWithLabel = (props: OutputWithLabelProps) => {
  return (
    <div>
      <div className="rounded-xl flex flex-col box-border my-4">
        <p className="pb-3 text-body_light_dark">{props.label}</p>
        <div className="flex flex-row items-center justify-between h-full shadow-xl dark:shadow-sm bg-white dark:bg-ui_surface_opc p-4 rounded-xl text-[.875rem] heading tracking-wider ">
          {props.value}
        </div>
      </div>
    </div>
  );
};

export default OutputWithLabel;
