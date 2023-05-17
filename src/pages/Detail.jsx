import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getDetailList } from '../apis/stayList';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [detailcards, setdetailCards] = useState([]);

  useEffect(() => {
    async function detailList() {
      try {
        const res = await getDetailList(id);
        setdetailCards(res);
      } catch (error) {
        console.log('Detailpage detailList error => ', error);
      }
    }
    detailList();
  }, []);
  console.log(detailcards);
  return (
    <>
      <StDetailContainer>
        <StDetailnameimgContainer>
          <StDetailnameContainer>
            <StDetailname>The Granary, 소박한 현대 헛간 전환</StDetailname>
            <StDetailetc>★ 4.95 . Lindfield, 잉글랜드, 영국</StDetailetc>
          </StDetailnameContainer>

          <StDetailimgContainer>
            <StDetailLimg>
              <StLimg src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=1200" />
            </StDetailLimg>
            <StDetailMimgContainer>
              <StDetailMimgMContainer>
                <StDetailMimg>
                  <StMimg src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e80ace7e-c494-49b9-9595-08ab76ef4365.jpeg?im_w=720" />
                </StDetailMimg>
                <StDetailMimg>
                  <StMimg src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/55b0263c-756d-466b-b050-39b031398a1d.jpeg?im_w=720" />
                </StDetailMimg>
              </StDetailMimgMContainer>
              <StDetailMimgMContainer1>
                <StDetailMimg>
                  <StMimg src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/b779ec9c-080a-4788-9391-512f7d247aa0.jpeg?im_w=720" />
                </StDetailMimg>
                <StDetailMimg>
                  <StMimg src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/60b99416-8264-4a29-b486-cd6721117423.jpeg?im_w=720" />
                </StDetailMimg>
              </StDetailMimgMContainer1>
            </StDetailMimgContainer>
          </StDetailimgContainer>
        </StDetailnameimgContainer>

        <StDetailimpobarContainer>
          <StDetailimpoContainer>
            <StDetailnametagContainer>
              <StDetailimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</StDetailimponame>
              <StDetailimpotagContainer>
                <StDetailimpotag1>더블 침대 1개</StDetailimpotag1>
                <StDetailimpotag2>
                  침실에 딸린 전용 <br /> 욕실
                </StDetailimpotag2>
                <StDetailimpotag3>
                  호스트가 가족과 함께 <br /> 거주하고 있습니다
                </StDetailimpotag3>
              </StDetailimpotagContainer>
            </StDetailnametagContainer>

            <Stline></Stline>

            <StDetailtagnaexContainer>
              <StDetailtagnameexplain>
                <StDetailtagname>헛간의 방</StDetailtagname>
                <StDetailtagexplain>
                  단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.
                </StDetailtagexplain>
              </StDetailtagnameexplain>
              <StDetailtagnameexplain>
                <StDetailtagname>초고속 와이파이</StDetailtagname>
                <StDetailtagexplain>
                  속도가 155Mbps이므로, 일행 전체가 영상 통화나 동영상 스트리밍을 즐길 수 있습니다.
                </StDetailtagexplain>
              </StDetailtagnameexplain>
              <StDetailtagname1>6월 20일 전까지 무료로 취소하실 수 있습니다.</StDetailtagname1>
            </StDetailtagnaexContainer>

            <Stline></Stline>

            <StDetailSynameimpo>
              <StDetailSyname>숙소 정보</StDetailSyname>
              <StDetailSyimpo>
                숙소는 1600년경 2등급에 등재된 건물입니다. 개성이 넘치고 정원이 아름답습니다. 최근에
                새롭게 단장한 공간과 매력적인 인테리어가 돋보이는 이 객실은 시골에서 휴식을 취하고
                긴장을 풀 수 있는 완벽한 휴양지입니다.
              </StDetailSyimpo>
            </StDetailSynameimpo>

            <Stline></Stline>

            <StDetailtagContainer>
              <StDetailtagna>숙소 편의시설</StDetailtagna>
              <StDetailtaglist>
                <StDetailtaglistnameContainer>
                  <StDetailtaglistname>침실문 잠금장치</StDetailtaglistname>
                  <StDetailtaglistname>건물 내 무료 주차</StDetailtaglistname>
                  <StDetailtaglistname>전기차 충전시설</StDetailtaglistname>
                  <StDetailtaglistname>건조기</StDetailtaglistname>
                  <StDetailtaglistname>전용 뒷마당 - 울타리 완비</StDetailtaglistname>
                </StDetailtaglistnameContainer>
                <StDetailtaglistnameContainer>
                  <StDetailtaglistname>초고속 와이파이 - 155Mbps</StDetailtaglistname>
                  <StDetailtaglistname>22인치 TV + 크롬캐스트</StDetailtaglistname>
                  <StDetailtaglistname>세탁기 - 건물 내</StDetailtaglistname>
                  <StDetailtaglistname>전용 파티오 또는 발코니</StDetailtaglistname>
                  <StDetailtaglistname>숙소 내 보안 카메라</StDetailtaglistname>
                </StDetailtaglistnameContainer>
              </StDetailtaglist>
              <button>편의시설 46개 모두 보기</button>
            </StDetailtagContainer>
          </StDetailimpoContainer>

          <StDetailbarContainer>
            <StDetailbarContainer1>
              <StDetailbarDataContainer>
                <StDetailbarcostar>
                  <StDetailbarcost>
                    <StDetailbarcost1>₩167,155</StDetailbarcost1>
                    <StDetailbarcost2>&nbsp;/박</StDetailbarcost2>
                  </StDetailbarcost>
                  <StDetailbarstar>★ 4.95</StDetailbarstar>
                </StDetailbarcostar>
                <StDetailbarDataimpoContainer>
                  <StDetailbarDatacheck>
                    <StDetailbarDatacheckin>체크인</StDetailbarDatacheckin>
                    <StDetailbarDatacheckout>체크아웃</StDetailbarDatacheckout>
                  </StDetailbarDatacheck>
                  <StDetailbarDataperson>인원</StDetailbarDataperson>
                </StDetailbarDataimpoContainer>
                <StDetailbarreservat>예약하기</StDetailbarreservat>
                <StDetailbarment>예약 확정 전에는 요금이 청구되지 않습니다.</StDetailbarment>
              </StDetailbarDataContainer>

              <StDetailbarcostContainer>
                <StDetailbarcostday>
                  <StDetailbarday>₩167,155 x 1박</StDetailbarday>
                  <StDetailbardcost>₩167,155</StDetailbardcost>
                </StDetailbarcostday>
                <StDetailbarcleancost>
                  <StDetailbarclean>청소비</StDetailbarclean>
                  <StDetailbarclcost>₩25,073</StDetailbarclcost>
                </StDetailbarcleancost>
                <StDetailbarservice>
                  <StDetailbarservicename>에어비앤비 서비스 수수료</StDetailbarservicename>
                  <StDetailbarservicecost>₩27,146</StDetailbarservicecost>
                </StDetailbarservice>

                <Stline></Stline>

                <StDetailbarallcostContainer>
                  <StDetailbarallcostna>총 합계</StDetailbarallcostna>
                  <StDetailbarallcost>₩219,374</StDetailbarallcost>
                </StDetailbarallcostContainer>
              </StDetailbarcostContainer>
            </StDetailbarContainer1>
          </StDetailbarContainer>
        </StDetailimpobarContainer>
      </StDetailContainer>
    </>
  );
};

export default Detail;

const StDetailContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  margin: 10px 190px 10px 190px;
  flex-direction: column;
`;
const StDetailnameimgContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const StDetailnameContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const StDetailimgContainer = styled.div`
  height: auto;
  width: auto;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
`;
const StDetailname = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  font-size: 27px;
  font-weight: 500;
  display: flex;
  box-sizing: border-box;
  padding: 15px 0px 15px 0px;
`;
const StDetailetc = styled.div`
  height: auto;
  width: auto;
  font-size: 15px;
  /* border: 2px solid #ffffff; */
  font-weight: 600;
  display: flex;
  box-sizing: border-box;
  padding: 0px 0px 27px 0px;
`;
const StDetailLimg = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
`;
const StLimg = styled.img`
  height: 455px;
  width: 560px;
  object-fit: cover;
`;
const StDetailMimgContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const StDetailMimgMContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  margin: 0px 0px 7px 0px;
`;
const StDetailMimgMContainer1 = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
`;
const StDetailMimg = styled.div`
  height: auto;
  width: auto;
  display: flex;
  box-sizing: border-box;
  margin: 0px 0px 0px 7px;
`;
const StMimg = styled.img`
  height: 224px;
  width: 272px;
  object-fit: cover;
`;
const StDetailimpobarContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
`;
const StDetailimpoContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const StDetailnametagContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 60px 0px 23px 0px;
`;
const StDetailimponame = styled.div`
  height: auto;
  width: auto;
  font-size: 21px;
  font-weight: 500;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailimpotagContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 22px 0px 0px 0px;
`;
const StDetailimpotag1 = styled.div`
  height: auto;
  width: auto;
  font-size: 15px;
  border: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 25px 85px 25px 20px;
`;
const StDetailimpotag2 = styled.div`
  height: auto;
  width: auto;
  font-size: 15px;
  border: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 17.5px 65px 17.5px 20px;
`;
const StDetailimpotag3 = styled.div`
  height: auto;
  width: auto;
  font-size: 15px;
  border: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 17.5px 65px 17.5px 20px;
`;
const StDetailtagnaexContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px 0px 0px 0px;
`;
const StDetailtagnameexplain = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  line-height: 160%;
  padding: 0px 0px 18px 0px;
`;
const StDetailtagname = styled.div`
  height: auto;
  width: auto;
  font-size: 17px;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailtagname1 = styled.div`
  height: auto;
  width: auto;
  font-size: 17px;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  padding: 10px 0px 25px 0px;
`;
const StDetailtagexplain = styled.div`
  height: auto;
  width: auto;
  color: #949494;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailSynameimpo = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const StDetailSyname = styled.div`
  height: auto;
  width: auto;
  font-size: 22px;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  padding: 35px 0px 20px 0px;
`;
const StDetailSyimpo = styled.div`
  height: auto;
  width: auto;
  color: #434343;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  padding: 0px 0px 35px 0px;
  line-height: 150%;
`;
const StDetailtagContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 35px 0px 0px 0px;
`;
const StDetailtagna = styled.div`
  height: auto;
  width: auto;
  font-size: 20px;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
  padding: 0px 0px 20px 0px;
`;
const StDetailtaglist = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailtaglistnameContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 1px solid #e9e8e8; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 0px 100px 0px 0px;
  line-height: 250%;
`;
const StDetailtaglistname = styled.div`
  height: auto;
  width: auto;
  color: #434343;
  /* border: 2px solid #ffffff; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarContainer = styled.div`
  height: auto;
  width: 800px;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  padding-left: 90px;
`;
const StDetailbarContainer1 = styled.div`
  height: 496.5px;
  width: 372.33px;
  border: 1px solid #c8c8c8;
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 50px 0px 0px 0px;
  padding: 25px 25px 0px 25px;
`;
const StDetailbarDataContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;
const StDetailbarcostar = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #f97878; */
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const StDetailbarcost = styled.div`
  height: auto;
  width: auto;
  font-size: 21px;
  font-weight: 500;
  /* border: 2px solid #f97878; */
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;
const StDetailbarcost1 = styled.div`
  height: auto;
  width: auto;
  font-size: 23px;
  font-weight: 500;
  /* border: 2px solid #f97878; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarcost2 = styled.div`
  height: auto;
  width: auto;
  font-size: 16px;
  color: #5d5d5d;
  /* border: 2px solid #f97878; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarstar = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #f97878; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarDataimpoContainer = styled.div`
  height: auto;
  width: auto;
  border: 1px solid #c8c8c8;
  border-radius: 8px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 20px 0px 4px 0px;
`;
const StDetailbarDatacheck = styled.div`
  height: auto;
  width: auto;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarDatacheckin = styled.div`
  height: 56px;
  width: 160.56px;
  /* border: 2px solid #ffb6b6; */
  border-right: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarDatacheckout = styled.div`
  height: 56px;
  width: 160.56px;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarDataperson = styled.div`
  height: 56px;
  width: 322.33px;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarreservat = styled.div`
  height: auto;
  width: auto;
  color: #ffffff;
  border-radius: 8px;
  background-color: #ee1372;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  padding: 13px 0px 13px 0px;
  margin: 13px 0px 18px 0px;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;
const StDetailbarment = styled.div`
  height: auto;
  width: auto;
  color: #3e3d3d;
  font-size: 14px;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  padding: 0px 0px 20px 0px;
  box-sizing: border-box;
  justify-content: center;
`;
const StDetailbarcostContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  line-height: 240%;
`;
const StDetailbarcostday = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;
const StDetailbarday = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  text-decoration: underline;
`;
const StDetailbardcost = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarcleancost = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;
const StDetailbarclean = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  text-decoration: underline;
`;
const StDetailbarclcost = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarservice = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0px 0px 13px 0px;
`;
const StDetailbarservicename = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  text-decoration: underline;
`;
const StDetailbarservicecost = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarallcostContainer = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 15px 0px 0px 0px;
`;
const StDetailbarallcostna = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const StDetailbarallcost = styled.div`
  height: auto;
  width: auto;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
`;
const Stline = styled.div`
  border: 1px solid #e8e8e8;
  display: flex;
  box-sizing: border-box;
`;
