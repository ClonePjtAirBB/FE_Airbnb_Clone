import { useEffect, useState } from 'react';
import Header from './Header';
import { throttle } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../constants';
import Filter from '../header/Filter';

const HeaderContainer = () => {
  const [isscrolltop, setIsScrollTop] = useState(window.scrollY < 40);
  const [isbuttonnclicked, setIsButtonClicked] = useState(false);
  const [initanimation, setInitAnimation] = useState(false);
  const navigate = useNavigate();

  const onScrollHandler = e => {
    setIsScrollTop(e && window.scrollY < 40);
    setIsButtonClicked(false);
  };

  const onClickLogoHandler = e => {
    e.preventDefault();
    navigate(PATH_URL.MAIN);
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
    <>
      <Header
        isscrolltop={isscrolltop}
        isbuttonnclicked={isbuttonnclicked}
        initanimation={initanimation}
        onClickLogoHandler={onClickLogoHandler}
        onClickButtonHandler={onClickButtonHandler}
      />
      <Filter />
    </>
  );
};

export default React.memo(HeaderContainer);
