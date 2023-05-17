import React, { useState } from 'react';
import { styled } from 'styled-components';

function Count({ onSumChange, maxGroupNum, setIsOpen }) {
  const [counta, setCounta] = useState(0);
  const [countb, setCountb] = useState(0);
  const [countc, setCountc] = useState(0);
  const maxCount = maxGroupNum; // 최대값 설정

  const addhandlera = () => {
    if (counta + countb + countc < maxCount) {
      setCounta(counta + 1);
    }
  };
  const addhandlerb = () => {
    if (counta + countb + countc < maxCount) {
      setCountb(countb + 1);
    }
  };
  const addhandlerc = () => {
    if (counta + countb + countc < maxCount) {
      setCountc(countc + 1);
    }
  };

  const miunshandlera = () => {
    if (counta > 0) {
      setCounta(counta - 1);
    }
  };
  const miunshandlerb = () => {
    if (countb > 0) {
      setCountb(countb - 1);
    }
  };
  const miunshandlerc = () => {
    if (countc > 0) {
      setCountc(countc - 1);
    }
  };
  const sumhandler = () => {
    const newSum = counta + countb + countc;
    onSumChange(newSum);
    setCounta(0);
    setCountb(0);
    setCountc(0);
    setIsOpen(false);
  };
  return (
    <StCountContainer>
      <StCountaContainer>
        <StCountaname>성인</StCountaname>
        <StCountabuttonContainer>
          <StCountabutton onClick={miunshandlera}>-</StCountabutton>
          <StCounta>{counta}</StCounta>
          <StCountabutton onClick={addhandlera}>+</StCountabutton>
        </StCountabuttonContainer>
      </StCountaContainer>
      <StCountbContainer>
        <StCountbname>어린이</StCountbname>
        <StCountbbuttonContainer>
          <StCountbbutton onClick={miunshandlerb}>-</StCountbbutton>
          <StCountb>{countb}</StCountb>
          <StCountbbutton onClick={addhandlerb}>+</StCountbbutton>
        </StCountbbuttonContainer>
      </StCountbContainer>
      <StCountcContainer>
        <StCountcname>유아</StCountcname>
        <StCountcbuttonContainer>
          <StCountcbutton onClick={miunshandlerc}>-</StCountcbutton>
          <StCountc>{countc}</StCountc>
          <StCountcbutton onClick={addhandlerc}>+</StCountcbutton>
        </StCountcbuttonContainer>
      </StCountcContainer>
      <Stbutton onClick={sumhandler}>확인</Stbutton>
    </StCountContainer>
  );
}

export default Count;

const StCountContainer = styled.div`
  height: 200px;
  width: 320px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -10px;
  padding-right: 30px;
`;
const StCountaContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
const StCountaname = styled.div`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;
`;
const StCountabuttonContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;
const StCountabutton = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
`;
const StCounta = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;
  margin: 0px 10px 0px 10px;
`;
const StCountbContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
const StCountbname = styled.div`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;
`;
const StCountbbuttonContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;
const StCountbbutton = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
`;
const StCountb = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;
  margin: 0px 10px 0px 10px;
`;
const StCountcContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
const StCountcname = styled.div`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;
`;
const StCountcbuttonContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;
const StCountcbutton = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
`;
const StCountc = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;
  margin: 0px 10px 0px 10px;
`;
const Stbutton = styled.button`
  height: auto;
  width: auto;
  display: flex;
  font-size: 25px;
  border: 1px solid #000000;
  box-sizing: border-box;
  justify-content: center;
  margin: 20px 0px -20px 0px;
`;
