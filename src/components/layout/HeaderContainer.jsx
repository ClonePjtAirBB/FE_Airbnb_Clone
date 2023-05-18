import { useEffect, useState } from 'react';
import Header from './Header';
import { throttle } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../constants';

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

  // 상단 버튼 클릭 시 필터 폼 표시 조건
  const onClickButtonHandler = () => {
    setIsButtonClicked(true);
  };

  // 스크롤 인식
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
    </>
  );
};

export default React.memo(HeaderContainer);
