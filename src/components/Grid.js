import styled from "styled-components";

//전체 큰 배경 및 틀
const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  overflow: hidden;
`;

//좌우를 뺀 중앙
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 15.625%;
  margin-right: 15.625%;
`;

const Column = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: column;
`;

const ColumnRev = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: column-reverse;
  position: relative;
  /* flex-wrap: wrap; */
`;

const Row = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export { Container, Contents, Column, ColumnRev, Row };
