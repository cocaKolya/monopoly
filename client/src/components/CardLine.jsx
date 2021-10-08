import styled from 'styled-components';
import Card from './Card';

const POSITION_FACTORS = {
  down: 'none',
  left: 'rotate(90deg)',
  up: 'rotate(180deg)',
  right: 'rotate(-90deg)',
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  -webkit-transform: ${(prop) => POSITION_FACTORS[prop.position]};
`;

function CardLine({ position, db }) {
  

  return (
    <>
      <Wrapper position={position}>
        {db.map((el) => (
          <Card
            name={el.name}
            mpColor={el.mpColor}
            isCorner={el.isCorner}
            cardId={el.id}
          ></Card>
        ))}
      </Wrapper>
    </>
  );
}

export default CardLine;
