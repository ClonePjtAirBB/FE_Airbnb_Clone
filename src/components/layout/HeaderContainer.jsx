import { useEffect, useState } from 'react';
import Header from './Header';
import { throttle } from 'lodash';
import React from 'react';

const HeaderContainer = () => {
  const [isscrolltop, setIsScrollTop] = useState(window.scrollY < 40);
  const [isbuttonnclicked, setIsButtonClicked] = useState(false);
  const [initanimation, setInitAnimation] = useState(false);

  const onScrollHandler = e => {
    setIsScrollTop(e && window.scrollY < 40);
    setIsButtonClicked(false);
  };

  const onClickLogoHandler = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onClickButtonHandler = () => {
    setIsButtonClicked(true);
  };

  useEffect(() => {
    if (!initanimation && window.scrollY > 40) {
      setInitAnimation(true);
    }
    window.addEventListener('scroll', throttle(onScrollHandler, 150));
    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, [onScrollHandler, initanimation]);

  return (
    <Header
      isscrolltop={isscrolltop}
      isbuttonnclicked={isbuttonnclicked}
      initanimation={initanimation}
      onClickLogoHandler={onClickLogoHandler}
      onClickButtonHandler={onClickButtonHandler}
    />
  );
};

export default React.memo(HeaderContainer);
