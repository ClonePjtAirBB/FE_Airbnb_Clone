import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { PATH_URL } from '../constants';
// import { getAllList } from '../apis/stayList';
import Filter from '../components/header/filter/Filter';
import { getFilteredList } from '../apis/stayList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getFilteredList, __getList } from '../modules/staylistSlice';
import { getAllList } from '../apis/stayList';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let list = useSelector(state => {
    return state.staylistSlice.filteredData.length !== 0
      ? state.staylistSlice.filteredData
      : state.staylistSlice.list;
  });

  let filteredData = [];
  filteredData = useSelector(state => state.staylistSlice.filteredData);

  // 필터링 데이터
  useEffect(() => {
    dispatch(__getFilteredList());
    if (filteredData.length !== 0) {
      list = filteredData;
    }
  }, [dispatch]);

  // thunk 전체 데이터 호출
  useEffect(() => {
    dispatch(__getList());
  }, []);

  // useEffect(() => {
  //   async function fetchAllData() {
  //     try {
  //       const serverData = await getAllList();
  //       setCards(serverData);
  //       console.log(cards);
  //     } catch (error) {
  //       console.log('Mainpage mainList error => ', error);
  //     }
  //   }
  //   fetchAllData();
  // }, []);

  const getStayTypeFilteredHandler = async queryString => {
    try {
      const res = await getFilteredList(queryString);
      // setCards(res);
    } catch (error) {
      console.log('Mainpage getStayTypeFilteredHandler error => ', error);
    }
  };

  return (
    <>
      <Filter getStayTypeFilteredHandler={getStayTypeFilteredHandler} />
      <StmainContainer>
        <StlistContainer>
          <StcardContainer>
            {list?.map(item => (
              <Stcard key={item.stayId}>
                <Stcardpic Stcardpic onClick={() => navigate(`${PATH_URL.DETAIL}/${item.stayId}`)}>
                  <Stpic src={item.img} />
                  <Stcardpic1></Stcardpic1>
                  <Stcardpic2></Stcardpic2>
                </Stcardpic>
                <StcardimpoContainer>
                  <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                    <div>
                      <Stcardimpocountystar>
                        <Stcardimpocounty>
                          {item.country}, {item.city}
                        </Stcardimpocounty>
                        <Stcardimpostar>★ 4.95</Stcardimpostar>
                      </Stcardimpocountystar>
                      <Stcardimponame>
                        {item.hostNickname} 님이 호스팅하는 {item.stayType}
                      </Stcardimponame>
                      <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                    </div>
                    <Stcardimpocosday>
                      <Stcardimpocos>₩{item.costPerDay.toLocaleString('ko-KR')}</Stcardimpocos>
                      <div>&nbsp;/박</div>
                    </Stcardimpocosday>
                  </Stcardimpo>
                </StcardimpoContainer>
              </Stcard>
            ))}
          </StcardContainer>
        </StlistContainer>
      </StmainContainer>
    </>
  );
};

export default Main;

const StmainContainer = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  display: flex;
  box-sizing: border-box;
  margin: 100px 10px 10px 10px;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const StlistContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  flex-wrap: wrap;
`;
const StcardContainer = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const Stcard = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px 5px 10px 5px;
`;
const Stcardpic = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
`;
const Stpic = styled.img`
  height: 310px;
  width: 310px;
  object-fit: cover;
  border-radius: 15px;
`;
const Stcardpic1 = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
`;
const Stcardpic2 = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
`;
const StcardimpoContainer = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0px 10px 0px;
  line-height: 130%;
`;
const Stcardimpo = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: baseline; */
`;
const Stcardimpocountystar = styled.div`
  height: auto;
  width: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
const Stcardimpocounty = styled.div`
  display: flex;
  font-size: 16px;
`;
const Stcardimpostar = styled.div`
  display: flex;
  font-size: 16px;
  margin-right: 10px;
`;
const Stcardimponame = styled.div`
  display: flex;
  font-size: 15px;
  color: #949494;
  line-height: 140%;
`;
const Stcardimpodays = styled.div`
  display: flex;
  font-size: 15px;
  color: #949494;
  line-height: 140%;
`;
const Stcardimpocosday = styled.div`
  display: flex;
  line-height: 220%;
  margin-top: 5px;
`;
const Stcardimpocos = styled.div`
  display: flex;
  line-height: 220%;
  font-weight: 600;
`;
