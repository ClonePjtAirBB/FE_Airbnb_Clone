import { styled } from 'styled-components';
import useAuthInput from '../../../hooks/useAuthInput';
import { auth } from '../../../apis/auth';
import { PATH_URL } from '../../../constants';

const SignupModal = ({ closeModalHandler, setShowSignupModal, setShowSigninModal }) => {
  const { inputData: email, inputChangeHandler: emailChangeHandler } = useAuthInput();
  const { inputData: password, inputChangeHandler: passwordChangeHandler } = useAuthInput();
  const { inputData: nickname, inputChangeHandler: nicknameChangeHandler } = useAuthInput();

  const inputDataSubmitHandler = async e => {
    e.preventDefault();
    try {
      const res = await auth({ email, password }, PATH_URL.SIGNUP);
      alert(res.msg);
      closeModalHandler();
    } catch (error) {}
  };

  const signipButtonClickHandler = e => {
    e.preventDefault();
    setShowSignupModal(false);
    setShowSigninModal(true);
  };

  return (
    <Container onClick={e => e.stopPropagation()}>
      <LabelWrapper>
        <Label>회원 가입</Label>
      </LabelWrapper>

      <AuthWrapper>
        <H3Label>에어비앤비에 오신 것을 환영합니다.</H3Label>
        <Form onSubmit={inputDataSubmitHandler}>
          <Input
            placeholder="닉네임"
            type="text"
            value={nickname}
            onChange={nicknameChangeHandler}
          />
          <Input placeholder="이메일" type="email" value={email} onChange={emailChangeHandler} />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />

          <LoginButton>회원 가입</LoginButton>
          <DivisionLine>또는</DivisionLine>
        </Form>
        <SigninButton onClick={signipButtonClickHandler}>로그인</SigninButton>
      </AuthWrapper>
    </Container>
  );
};

export default SignupModal;

const Container = styled.div`
  width: 568px;
  height: 550px;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ebebeb;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const AuthWrapper = styled.div`
  padding: 0 24px;
`;

const H3Label = styled.h3`
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  padding: 30px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  padding: 0 10px;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    transition: 0.5s;
    border: 1.5px solid black;
  }
`;

const LoginButton = styled.button`
  height: 48px;
  border-radius: 9px;
  color: #ffffff;
  background: #ee1372;
  cursor: pointer;
`;

const DivisionLine = styled.div`
  overflow: hidden;
  text-align: center;
  padding: 10px 0;

  &::before,
  &::after {
    background-color: #dddddd;
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &::before {
    right: 0.5em;
    margin-left: -50%;
  }
  &::after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

const SigninButton = styled.button`
  height: 48px;
  border-radius: 9px;
  border: 1px solid #222222;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin-top: 7px;
`;
