import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getDetailList } from '../apis/stayList';
import { useNavigate, useParams } from 'react-router-dom';
import Select from '../detail/Select';
import { PATH_URL } from '../constants';
import { getDateList, postStaydata } from '../apis/staybookList';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailcards, setdetailCards] = useState([]);
  const [sum, setSum] = useState(0);
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState([]);

  const reshandler = async () => {
    try {
      const response = await postStaydata(id, sum, startDate, endDate);
      alert('예약이 완료되었습니다!');
      navigate(PATH_URL.MAIN);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        alert(error.response.data.msg);
      } else {
        alert('예약에 실패하였습니다. 다시 시도해 주세요.');
      }
    }
  };

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

  useEffect(() => {
    async function dateList() {
      try {
        const res = await getDateList(id);
        setDate(res);
      } catch (error) {
        console.log('Detailpage dateList error => ', error);
      }
    }
    dateList();
  }, []);

  const handleSumChange = newSum => {
    setSum(newSum);
  };

  const showModal = () => {
    setModal(!modal);
  };

  let today = new Date();
  let startDate = '';
  let endDate = '';

  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = year + '-' + month + '-' + day;

  const startDateArray = date.map(item => item.startDate);

  // 2. 겹치지 않는 날짜 필터링
  const nonOverlappingDates = startDateArray
    .filter(item => item !== dateString)
    .map(dateString => new Date(dateString).getTime());

  // 3. 가장 작은 날짜 선택
  const minDate =
    nonOverlappingDates.length > 0
      ? new Date(Math.min(...nonOverlappingDates)).toISOString().split('T')[0]
      : dateString;

  startDate = minDate;

  let laterday = ('0' + (new Date(minDate).getDate() + 5)).slice(-2);
  let laterdateString = year + '-' + month + '-' + laterday;
  endDate = laterdateString;
  // console.log('겹치지 않는 가장 작은 날짜:', minDate);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(dateString);
  // console.log(laterdateString);
  // console.log(detailcards);
  // console.log(date);
  return (
    <>
      <StDetailContainer>
        <StDetailnameimgContainer>
          <StDetailnameContainer>
            <StDetailname>{detailcards.stayTitle}</StDetailname>
            <StDetailetc>
              ★ 4.95 . {detailcards.city}, {detailcards.country}
            </StDetailetc>
          </StDetailnameContainer>

          <StDetailimgContainer>
            <StDetailLimg>
              <StLimg src={detailcards.imgUrlList?.[0]} />
            </StDetailLimg>
            <StDetailMimgContainer>
              <StDetailMimgMContainer>
                <StDetailMimg>
                  <StMimg src={detailcards.imgUrlList?.[1]} />
                </StDetailMimg>
                <StDetailMimg>
                  <StMimg src={detailcards.imgUrlList?.[2]} />
                </StDetailMimg>
              </StDetailMimgMContainer>
              <StDetailMimgMContainer1>
                <StDetailMimg>
                  <StMimg src={detailcards.imgUrlList?.[3]} />
                </StDetailMimg>
                <StDetailMimg>
                  <StMimg src={detailcards.imgUrlList?.[4]} />
                </StDetailMimg>
              </StDetailMimgMContainer1>
            </StDetailMimgContainer>
          </StDetailimgContainer>
        </StDetailnameimgContainer>

        <StDetailimpobarContainer>
          <StDetailimpoContainer>
            <StDetailnametagContainer>
              <StDetailimponame>
                {detailcards.hostNickname} 님이 호스팅하는 {detailcards.stayType}
              </StDetailimponame>
              <StDetailimpotagContainer>
                <StDetailimpotag1>
                  {detailcards.bedType} {detailcards.numBed}개
                </StDetailimpotag1>
                <StDetailimpotag2>
                  침실에 딸린 전용 <br /> 욕실
                </StDetailimpotag2>
                <StDetailimpotag3>
                  {detailcards.isGuest
                    ? '호스트가 \n 거주하고 있습니다.'
                    : '다른 게스트가 \n 숙소에 있을 수 있습니다.'}
                </StDetailimpotag3>
              </StDetailimpotagContainer>
            </StDetailnametagContainer>

            <Stline></Stline>

            <StDetailtagnaexContainer>
              <StDetailtagnameexplain>
                <StDetailtagname>{detailcards.stayType}</StDetailtagname>
                <StDetailtagexplain>{detailcards.descTag}</StDetailtagexplain>
              </StDetailtagnameexplain>
              <StDetailtagnameexplain>
                <StDetailtagname>{detailcards.stayType}</StDetailtagname>
                <StDetailtagexplain>{detailcards.descTag}</StDetailtagexplain>
              </StDetailtagnameexplain>
              <StDetailtagname1>{detailcards.stayType}</StDetailtagname1>
            </StDetailtagnaexContainer>

            <Stline></Stline>

            <StDetailSynameimpo>
              <StDetailSyname>숙소 정보</StDetailSyname>
              <StDetailSyimpo>{detailcards.stayContent}</StDetailSyimpo>
            </StDetailSynameimpo>

            <Stline></Stline>

            <StDetailtagContainer>
              <StDetailtagna>숙소 편의시설</StDetailtagna>
              <StDetailtaglist>
                <StDetailtaglistnameContainer>
                  <StDetailtaglistname>{detailcards.convenienceList?.[0]}</StDetailtaglistname>
                  <StDetailtaglistname>{detailcards.convenienceList?.[1]}</StDetailtaglistname>
                  <StDetailtaglistname>{detailcards.convenienceList?.[2]}</StDetailtaglistname>
                </StDetailtaglistnameContainer>
                <StDetailtaglistnameContainer>
                  <StDetailtaglistname>{detailcards.convenienceList?.[3]}</StDetailtaglistname>
                  <StDetailtaglistname>{detailcards.convenienceList?.[4]}</StDetailtaglistname>
                  <StDetailtaglistname>{detailcards.convenienceList?.[5]}</StDetailtaglistname>
                </StDetailtaglistnameContainer>
              </StDetailtaglist>
            </StDetailtagContainer>
          </StDetailimpoContainer>

          <StDetailbarContainer>
            <StDetailbarContainer1>
              <StDetailbarDataContainer>
                <StDetailbarcostar>
                  <StDetailbarcost>
                    <StDetailbarcost1>₩{detailcards.costPerDay}</StDetailbarcost1>
                    <StDetailbarcost2>&nbsp;/박</StDetailbarcost2>
                  </StDetailbarcost>
                  <StDetailbarstar>★ 4.95</StDetailbarstar>
                </StDetailbarcostar>
                <StDetailbarDataimpoContainer>
                  <StDetailbarDatacheck>
                    <StDetailbarDatacheckin>{startDate}</StDetailbarDatacheckin>
                    <StDetailbarDatacheckout>{endDate}</StDetailbarDatacheckout>
                  </StDetailbarDatacheck>
                  <StDetailbarDataperson>
                    <Select onSumChange={handleSumChange} maxGroupNum={detailcards.maxGroupNum} />
                  </StDetailbarDataperson>
                </StDetailbarDataimpoContainer>

                <StDetailbarreservat onClick={showModal}>예약하기</StDetailbarreservat>
                {modal && (
                  <div>
                    <Background onClick={showModal} />
                    <StModal>
                      <StContainer>
                        <Stempty></Stempty>

                        <StbodyContainer>
                          <Stbodyempty></Stbodyempty>
                          <Stbodybody>
                            <StsignupHeader>
                              <StsignupHeaderName bdColor="#ffffff">예약하기</StsignupHeaderName>
                            </StsignupHeader>

                            <StsignupHeaderimpo>다음과 같이 예약하시겠습니까?</StsignupHeaderimpo>

                            <StsignupBody>
                              <StsignupNicknameContainer>
                                <Stsignupdiv bdColor="#f2f2f2">{startDate}</Stsignupdiv>
                              </StsignupNicknameContainer>

                              <StsignupIdContainer>
                                <Stsignupdiv bdColor="#f2f2f2">{endDate}</Stsignupdiv>
                              </StsignupIdContainer>

                              <StsignupPwContainer>
                                <Stsignupdiv bdColor="#f2f2f2">{sum}</Stsignupdiv>
                              </StsignupPwContainer>
                            </StsignupBody>

                            <StsignupBtnContainer>
                              <StsignupButton onClick={reshandler}>예약</StsignupButton>
                            </StsignupBtnContainer>
                          </Stbodybody>
                          <Stbodyempty1></Stbodyempty1>
                        </StbodyContainer>
                        <Stempty1></Stempty1>
                      </StContainer>
                      <div>
                        <ModalBtn onClick={showModal}>취소</ModalBtn>
                      </div>
                    </StModal>
                  </div>
                )}

                <StDetailbarment>예약 확정 전에는 요금이 청구되지 않습니다.</StDetailbarment>
              </StDetailbarDataContainer>

              <StDetailbarcostContainer>
                <StDetailbarcostday>
                  <StDetailbarday>₩{detailcards.costPerDay} x 1박</StDetailbarday>
                  <StDetailbardcost>₩{detailcards.costPerDay * 1}</StDetailbardcost>
                </StDetailbarcostday>
                <StDetailbarcleancost>
                  <StDetailbarclean>청소비</StDetailbarclean>
                  <StDetailbarclcost>₩25073</StDetailbarclcost>
                </StDetailbarcleancost>
                <StDetailbarservice>
                  <StDetailbarservicename>에어비앤비 서비스 수수료</StDetailbarservicename>
                  <StDetailbarservicecost>₩27146</StDetailbarservicecost>
                </StDetailbarservice>

                <Stline></Stline>

                <StDetailbarallcostContainer>
                  <StDetailbarallcostna>총 합계</StDetailbarallcostna>
                  <StDetailbarallcost>₩{detailcards.costPerDay + 25073 + 27146}</StDetailbarallcost>
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
  justify-content: space-between;
  flex-direction: row;
`;
const StDetailimpoContainer = styled.div`
  height: auto;
  width: 600px;
  /* border: 2px solid #4436df; */
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
  padding: 20px 30px 25px 30px;
`;
const StDetailimpotag2 = styled.div`
  height: auto;
  width: auto;
  font-size: 15px;
  border: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 17.5px 30px 17.5px 30px;
`;
const StDetailimpotag3 = styled.div`
  height: auto;
  width: auto;
  font-size: 15px;
  border: 1px solid #c8c8c8;
  display: flex;
  box-sizing: border-box;
  white-space: pre-line;
  border-radius: 8px;
  padding: 17.5px 30px 17.5px 30px;
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
  padding-right: 70px;
`;
const StDetailbarContainer = styled.div`
  height: auto;
  width: 500px;
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
  justify-content: center;
  align-items: center;
`;
const StDetailbarDatacheckout = styled.div`
  height: 56px;
  width: 160.56px;
  /* border: 2px solid #ffb6b6; */
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
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
// const ModalButton = styled.div`
//   border: none;
//   height: 50px;
//   border-radius: 10px;
//   width: 300px;
//   color: #000000;
//   font-weight: 600;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 10px;
//   gap: 7px;
//   &:active {
//     background-color: #c7c7c7;
//   }
// `;
const StModal = styled.div`
  top: 130%;
  left: 50%;
  width: 500px;
  height: 700px;
  padding: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 12px;
`;
const Background = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  opacity: 80%;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalBtn = styled.button`
  top: 100px;
  right: 15px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid #ddd;
  :hover {
    border: 1px solid #000000;
  }
`;
const StContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 50px;
`;
const Stempty = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const StbodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Stbodyempty = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
const Stbodybody = styled.div`
  width: 100%;
  height: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.19) 0px 8px 15px, rgba(0, 0, 0, 0.23) 0px 5px 5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StsignupHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StsignupHeaderName = styled.div`
  width: 100%;
  height: 80%;
  font-size: 30px;
  border: 2px solid ${props => props.bdColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StsignupHeaderimpo = styled.div`
  width: 100%;
  height: auto;
  font-size: 20px;
  padding: 15px 0px 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StsignupBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 60px 0px;
`;
const StsignupNicknameContainer = styled.div`
  width: 70%;
  height: 25%;
  border-radius: 12px;
  border: 1px solid ${props => props.bdColor};
  display: flex;
  overflow: hidden;
`;
const Stsignupdiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  outline: none;
  border: 2px solid ${props => props.bdColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StsignupIdContainer = styled.div`
  width: 70%;
  height: 25%;
  border-radius: 12px;
  border: 1px solid ${props => props.bdColor};
  display: flex;
  margin: 30px 0px 30px 0px;
  overflow: hidden;
`;
const StsignupPwContainer = styled.div`
  width: 70%;
  height: 25%;
  border-radius: 12px;
  border: 1px solid ${props => props.bdColor};
  display: flex;
  overflow: hidden;
`;
const StsignupBtnContainer = styled.div`
  width: 70%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const StsignupButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 20px;
  border-radius: 12px;
  font-weight: 800;
  color: #ffffff;
  background: #ee1372;
  border: 2px solid ${props => props.bdColor};
  cursor: pointer;
`;
const Stbodyempty1 = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`;
const Stempty1 = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
