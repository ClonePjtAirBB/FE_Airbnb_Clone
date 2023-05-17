import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { PATH_URL } from '../constants';
import { getAllList } from '../apis/stayList';
import Filter from '../components/header/filter/Filter';
import { getFilteredList } from '../apis/stayList';
import { useEffect, useState } from 'react';

const Main = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  const getStayTypeFilteredHandler = async queryString => {
    try {
      const res = await getFilteredList(queryString);
      setCards(res);
    } catch (error) {
      console.log('Mainpage getStayTypeFilteredHandler error => ', error);
    }
  };

  useEffect(() => {
    async function mainList() {
      try {
        const res = await getAllList();
        setCards(res);
      } catch (error) {
        console.log('Mainpage mainList error => ', error);
      }
    }
    mainList();
  }, []);

  return (
    <>
      <Filter getStayTypeFilteredHandler={getStayTypeFilteredHandler} />
      <StmainContainer>
        <StlistContainer>
          <StcardContainer>
            {cards?.map(item => (
              <Stcard key={item.stayId}>
                <Stcardpic Stcardpic onClick={() => navigate(`${PATH_URL.DETAIL}/${item.stayId}`)}>
                  <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720" />
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
                      <Stcardimpocos>₩{item.costPerDay}</Stcardimpocos>
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
