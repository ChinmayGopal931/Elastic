import { motion } from 'framer-motion';
import Close from 'assets/close.svg';

interface Props {
  onClose: () => void;
}

const variants = {
  open: { opacity: 1, height: 'auto', y: 0 },
  closed: { opacity: 0, height: 'auto', y: '-100%' },
};

export const OnetimeBanner = ({ onClose }: Props) => {
  return (
    <motion.div
      className="flex flex-row items-center justify-center w-full bg-primary_brand_01 transition-all duration-200 ease-in-out"
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
    >
      <div className="flex-grow">
        <p className="text-white font-bold text-base py-2 cursor-pointer text-center">
          Currently only a preview for Testnet. Additional features will be available in v2.
        </p>
      </div>
      <img src={Close} alt="" className="h-4 w-4 cursor-pointer mr-4" onClick={onClose} />
    </motion.div>
  );
};
