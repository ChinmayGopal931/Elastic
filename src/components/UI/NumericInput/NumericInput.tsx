import { escapeRegExp, inputRegex } from 'lib/utils/inputRegex';

export type NumericProps = Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'as'> & {
  value: string;
  onUserInput?: (input: string) => void;
  error?: boolean;
  fontSize?: string;
  align?: 'right' | 'left';
  variant?: 'default' | 'unstyled';
  maxDecimals?: number;
};

export function NumericInput({ onUserInput, maxDecimals, ...rest }: NumericProps) {
  function handleInput(value: string) {
    if (value === '' || inputRegex.test(escapeRegExp(value))) {
      if (onUserInput) {
        if (maxDecimals && value?.includes('.')) {
          const [, decimals] = value.split('.');
          if (decimals.length <= maxDecimals) {
            onUserInput(value);
          }
        } else {
          onUserInput(value);
        }
      }
    }
  }

  return (
    <input
      type="number"
      placeholder="0"
      onChange={(e) => handleInput(e.target.value.replace(/,/g, '.'))}
      {...rest}
    />
  );
}
