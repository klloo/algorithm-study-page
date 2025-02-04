import styled from '@emotion/styled';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MAX_WIDTH = '610px';

export const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  & span {
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgb(168, 168, 168);
  height: 30px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 0;
  border-radius: 7px;
  padding: 3rem 3rem 5rem 3rem;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  height: 30rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 50px;
  & div {
    display: flex;
    align-items: center;
    text-align: start;
    & span {
      margin-right: 8px;
      color: var(--color-textgrey);
      font-size: 0.9rem;
    }
  }
  @media all and (max-width: ${MAX_WIDTH}) {
    flex-direction: column;
    align-items: start;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text-gray);
  font-size: 0.8rem;
  font-weight: 500;
  & div {
    margin-right: 7px;
  }
  .switch {
    margin-right: 20px;
  }
  @media all and (max-width: ${MAX_WIDTH}) {
    margin-top: 15px;
    align-self: start;
  }
`;

export const SettingWrapper = styled.div`
  @media all and (max-width: ${MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Slider = styled(RcSlider)`
  margin-top: 15px;
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  .form-item {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  & div {
    margin-bottom: 10px;
  }
`;

export const ErrorMsg = styled.div`
  height: 10px;
  margin-top: 8px;
  & div {
    color: var(--color-error);
    font-size: 0.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  > button {
    border: none;
    padding: 0.8rem 0.7rem;
    background-color: var(--color-primary);
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    font-weight: 400;
    font-size: 0.9rem;
    box-sizing: border-box;
    width: 8rem;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export const ProblemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  border-radius: 50px;
  padding: 7px 10px;
  font-size: 0.8rem;
  border: none;
  background-color: var(--color-button-gray);
  margin: 0px 5px 10px 5px;
  text-overflow: 'ellipsis';
`;
