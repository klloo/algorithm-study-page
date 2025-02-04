import styled from '@emotion/styled';
import { CommonCard } from 'style/commonStyle';
export const Card = styled(CommonCard)`
  position: relative;
  flex-wrap: nowrap;
  padding: 20px 0 20px 0;
`;

export const UserWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
`;

export const User = styled.div`
  width: 130px;
  display: flex;
  flex: 0 0 auto;
  padding: 10px 0 10px 0;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font: 0.9rem;
  & div {
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-weight: bold;
  margin-bottom: 25px;
  padding-left: 25px;
`;

export const ScrollButton = styled.button`
  border: none;
  position: absolute;
  background: transparent;
  text-align: center;
  cursor: pointer;
  z-index: 999;
  right: ${(props) => (props.type == 'next' ? '0' : '')};
  left: ${(props) => (props.type == 'prev' ? '0' : '')};
  height: 120px;
  & div {
    color: #b6b6b6;
  }
`;

export const LastLoginDate = styled.div`
  font-size: 12px;
  white-space: pre-line;
  text-align: center;
`;
