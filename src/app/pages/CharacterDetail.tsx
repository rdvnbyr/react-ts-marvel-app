import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCharacterRequest } from '../_redux/characters/actions';
import styled from 'styled-components';
import { Button } from '../components/ui-helpers';

function CharacterDetail() {
  const { characterId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { character } = useAppSelector((state) => state.app as any);

  useEffect(() => {
    if (characterId) {
      dispatch(getCharacterRequest(+characterId));
    }
  }, [characterId, dispatch]);

  const characterExtendedHandler = (extend: string) => {
    navigate(`/${characterId}/character-detail/${extend}`);
  };

  return (
    <div>
      {!characterId && <h1>No character selected</h1>}
      {character && (
        <StyledDiv>
          <StyledImageWrapper>
            <img
              src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`}
              alt={character.name}
              style={{ width: '100%' }}
            />
          </StyledImageWrapper>
          <StyledDetailWrapper>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </StyledDetailWrapper>
          <StyledExtendedMenu>
            <Button color="primary" onClick={() => characterExtendedHandler('series')}>
              Series
            </Button>
            <Button color="secondary" onClick={() => characterExtendedHandler('comics')}>
              Comics
            </Button>
            <Button color="info" onClick={() => characterExtendedHandler('stories')}>
              Stories
            </Button>
            <Button color="success" onClick={() => characterExtendedHandler('events')}>
              Events
            </Button>
          </StyledExtendedMenu>
        </StyledDiv>
      )}
    </div>
  );
}

export default CharacterDetail;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImageWrapper = styled(StyledDiv)`
  max-height: 100%;
  width: min(100%, 600px);
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledDetailWrapper = styled(StyledDiv)`
  width: min(100%, 600px);
  max-width: 100%;
  margin: 1rem 0;
  h1 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;
const StyledExtendedMenu = styled.div`
  width: min(100%, 600px);
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
  button {
    margin: 0.5rem 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
