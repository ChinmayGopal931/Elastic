import Arrow from 'assets/arrow-right.svg';

interface Props {
  direction: string;
}

const Divider = ({ direction }: Props) => {
  const getRotationClass = () => {
    switch (direction) {
      case 'up':
        return '-rotate-90';
      case 'right':
        return 'rotate-0';
      case 'down':
        return 'rotate-90';
      case 'left':
        return 'rotate-180';
      default:
        return '';
    }
  };

  const rotationClass = getRotationClass();

  return <img src={Arrow} alt="" className={`mixer-divider h-8 w-4 ${rotationClass} flex`} />;
};

export default Divider;
