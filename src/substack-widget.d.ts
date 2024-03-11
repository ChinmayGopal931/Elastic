interface CustomSubstackWidgetConfig {
  substackUrl: string;
  placeholder: string;
  buttonText: string;
  theme: string;
}

declare global {
  interface Window {
    SubstackWidget: {
      init: (config: CustomSubstackWidgetConfig) => void;
    };
    CustomSubstackWidget: CustomSubstackWidgetConfig;
  }
}

export {};
