import styled from 'styled-components';
import CardLine from './CardLine';

const dbDown = [
  { id: 1, name: 'малая бронная', mpColor: 'red' },
  { id: 2, name: 'арбат', mpColor: 'red' },
  { id: 3, name: 'житная', mpColor: 'red' },
  { id: 4, name: 'мытная', mpColor: 'green' },
  { id: 5, name: 'ЖД' },
  { id: 6, name: 'рублевское шосссе', mpColor: 'green' },
  { id: 7, name: 'вавилова', mpColor: 'green' },
  { id: 8, name: 'русская', mpColor: 'yellow' },
  { id: 9, name: 'эльбрусская', mpColor: 'yellow' },
];
const dbLeft = [
  { id: 10, name: 'Start', isCorner: true },
  { id: 11, name: 'малая бронная', mpColor: 'red' },
  { id: 12, name: 'арбат', mpColor: 'red' },
  { id: 13, name: 'житная', mpColor: 'red' },
  { id: 14, name: 'мытная', mpColor: 'green' },
  { id: 15, name: 'ЖД' },
  { id: 16, name: 'рублевское шосссе', mpColor: 'green' },
  { id: 17, name: 'вавилова', mpColor: 'green' },
  { id: 18, name: 'русская', mpColor: 'yellow' },
  { id: 19, name: 'эльбрусская', mpColor: 'yellow' },
  { id: 20, name: 'Start', isCorner: true },
];
const dbUp = [
  { id: 21, name: 'малая бронная', mpColor: 'red' },
  { id: 22, name: 'арбат', mpColor: 'red' },
  { id: 23, name: 'житная', mpColor: 'red' },
  { id: 24, name: 'мытная', mpColor: 'green' },
  { id: 25, name: 'ЖД' },
  { id: 26, name: 'рублевское шосссе', mpColor: 'green' },
  { id: 27, name: 'вавилова', mpColor: 'green' },
  { id: 28, name: 'русская', mpColor: 'yellow' },
  { id: 29, name: 'эльбрусская', mpColor: 'yellow' },
];
const dbRight = [
  { id: 30, name: 'Start', isCorner: true },
  { id: 31, name: 'малая бронная', mpColor: 'red' },
  { id: 32, name: 'арбат', mpColor: 'red' },
  { id: 33, name: 'житная', mpColor: 'red' },
  { id: 34, name: 'мытная', mpColor: 'green' },
  { id: 35, name: 'ЖД' },
  { id: 36, name: 'рублевское шосссе', mpColor: 'green' },
  { id: 37, name: 'вавилова', mpColor: 'green' },
  { id: 38, name: 'русская', mpColor: 'yellow' },
  { id: 39, name: 'эльбрусская', mpColor: 'yellow' },
  { id: 0, name: 'Start', isCorner: true },
];

const BoardWrapper = styled('div')`
  display: flex;
`;
const Row = styled('div')`
  //   display: flex;
  // flex-direction:column
`;

const Center = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35pt;
  height: 550px;
  width: 550px;
  background-color: rgba(98, 142, 180, 0.486);
`;

function CardBoard() {
  
  return (
    <BoardWrapper>
      <CardLine position={'left'} db={dbLeft} />

      <Row>
        <CardLine position={'up'} db={dbUp} />
        <Center>моно поли я</Center>
        <CardLine position={'down'} db={dbDown} />
      </Row>

      <CardLine position={'right'} db={dbRight} />
    </BoardWrapper>
  );
}

export default CardBoard;
