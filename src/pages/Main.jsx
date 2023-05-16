import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { PATH_URL } from '../constants';
import { getAllList } from '../apis/stayList';

const Main = () => {
  const navigate = useNavigate();

  const testHandler = async () => {
    try {
      const res = await getAllList();
      console.log('Mainpage res => ', res);
    } catch (error) {
      console.log('Mainpage testHandler error => ', error);
    }
  };

  return (
    <>
      <button
        onClick={testHandler}
        style={{ height: '100px', width: '300px', backgroundColor: 'lightgrey' }}
      >
        TEST
      </button>
      <StmainContainer>
        <StlistContainer>
          <StcardContainer>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
          </StcardContainer>

          <StcardContainer>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
            <Stcard>
              <Stcardpic onClick={() => navigate(PATH_URL.DETAIL)}>
                <Stpic src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720" />
                <Stcardpic1></Stcardpic1>
                <Stcardpic2></Stcardpic2>
              </Stcardpic>
              <StcardimpoContainer>
                <Stcardimpo onClick={() => navigate(PATH_URL.DETAIL)}>
                  <div>
                    <Stcardimpocountystar>
                      <Stcardimpocounty>Lindfield, 잉글랜드, 영국</Stcardimpocounty>
                      <Stcardimpostar>★ 4.95</Stcardimpostar>
                    </Stcardimpocountystar>
                    <Stcardimponame>Michelle & Michael 님이 호스팅하는 헛간의 방</Stcardimponame>
                    <Stcardimpodays>6월 20일~30일</Stcardimpodays>
                  </div>
                  <Stcardimpocosday>
                    <Stcardimpocos>₩158,506</Stcardimpocos>
                    <div>&nbsp;/박</div>
                  </Stcardimpocosday>
                </Stcardimpo>
              </StcardimpoContainer>
            </Stcard>
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
  margin: 10px 10px 10px 10px;
  justify-content: space-around;
`;
const StlistContainer = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
`;
const StcardContainer = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
const Stcard = styled.div`
  height: auto;
  width: auto;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 5px 10px 5px 10px;
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
  align-items: baseline;
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
  margin-left: 100px;
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
`;
const Stcardimpocos = styled.div`
  display: flex;
  line-height: 220%;
  font-weight: 600;
`;
