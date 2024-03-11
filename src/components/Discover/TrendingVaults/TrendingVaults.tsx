// App
import { useState, useEffect } from 'react';

// Components
import { useBoundStore } from 'state/store';
import Left from 'assets/icons/left-circle-gradient.svg';
import Right from 'assets/icons/right-circle-gradient.svg';
import { motion } from 'framer-motion';
import { arbitrum } from 'wagmi/chains';

import { useMediaQuery } from 'usehooks-ts';
import { supportedChains } from 'lib/constants';

const TrendingVaults = () => {
  const isMobileView = useMediaQuery('(max-width: 768px)');
  const trendingVaults = useBoundStore((state) => state.trendingVaults);
  const chain = window.CHAIN_ID;

  const chainId = supportedChains[chain as number] || arbitrum;

  const [currentGroup, setCurrentGroup] = useState<{ id: string; vaults: any[] }>({
    id: '',
    vaults: [],
  });

  const handleNext = () => {
    const currentCategories = trendingVaults[chainId.id]?.categories;
    if (currentCategories) {
      const currentIndex = currentCategories.indexOf(currentGroup);
      const isLast = currentIndex === currentCategories.length - 1;

      const nextGroup = isLast ? currentCategories[0] : currentCategories[currentIndex + 1];
      setCurrentGroup(nextGroup);
    }
  };

  const handlePrev = () => {
    const currentCategories = trendingVaults[chainId.id]?.categories;
    if (currentCategories) {
      const currentIndex = currentCategories.indexOf(currentGroup);
      const isFirst = currentIndex === 0;

      const prevGroup = isFirst
        ? currentCategories[currentCategories.length - 1]
        : currentCategories[currentIndex - 1];
      setCurrentGroup(prevGroup);
    }
  };

  useEffect(() => {
    setCurrentGroup(trendingVaults[chainId.id]?.categories[0]);
  }, [chain, trendingVaults]);

  // Animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInFromRight = {
    hidden: { x: '100vw' },
    visible: { x: 0 },
  };

  const slideInFromLeft = {
    hidden: { x: '-100vw' },
    visible: { x: 0 },
  };

  return (
    <motion.div
      className="flex flex-col my-4 gap-6 w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.h1
        className="heading ml-2"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
      >
        Trending Vaults by {currentGroup?.id}{' '}
      </motion.h1>
      <div className="flex flex-row w-full">
        {!isMobileView && (
          <motion.img
            src={Left}
            alt=""
            className="cursor-pointer"
            data-carousel-prev
            onClick={() => handlePrev()}
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            style={{
              maxWidth: '50px',
            }}
          />
        )}
        <div
          id="default-carousel"
          data-carousel="slide"
          className="flex flex-col flex-wrap justify-around items-center w-full gap-4 m-1 desktop:m-4 desktop:flex-row "
        >
          {isMobileView && (
            <div className="flex flex-row gap-8 mt-4">
              <motion.img
                src={Left}
                alt=""
                className="cursor-pointer"
                data-carousel-prev
                onClick={() => handlePrev()}
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft}
                style={{
                  maxWidth: '50px',
                }}
              />
              <motion.img
                src={Right}
                className="cursor-pointer"
                alt=""
                data-carousel-next
                onClick={() => handleNext()}
                initial="hidden"
                animate="visible"
                variants={slideInFromRight}
                style={{
                  maxWidth: '50px',
                }}
              />
            </div>
          )}
        </div>
        {!isMobileView && (
          <motion.img
            src={Right}
            className="cursor-pointer"
            alt=""
            data-carousel-next
            onClick={() => handleNext()}
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
            style={{
              maxWidth: '50px',
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default TrendingVaults;
