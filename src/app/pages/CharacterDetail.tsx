import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui-helpers';
import { ExtendedEndPoints } from '../models';
import { useAppDispatch } from '../hooks';
import { clearCharacterExtendedDetail } from '../_redux/characters/actions';

import CharacterSeries from '../components/Characters/CharacterSeries';
import CharacterComics from '../components/Characters/CharacterComics';
import CharacterEvents from '../components/Characters/CharacterEvents';
import CharacterStories from '../components/Characters/CharacterStories';

function CharacterDetail() {
  const { characterId, extendedType } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearCharacterExtendedDetail());
    };
  }, [dispatch]);

  return (
    <div>
      {!characterId && !extendedType && (
        <div className="d-flex flex-column justify-content-center">
          <h1>No character selected</h1>
          <Button color="info" onClick={() => navigate('/')}>
            Go back to home
          </Button>
        </div>
      )}
      {characterId && extendedType && (
        <>
          {extendedType === ExtendedEndPoints.series && (
            <CharacterSeries characterId={characterId} />
          )}
          {extendedType === ExtendedEndPoints.comics && (
            <CharacterComics characterId={characterId} />
          )}
          {extendedType === ExtendedEndPoints.stories && (
            <CharacterStories characterId={characterId} />
          )}
          {extendedType === ExtendedEndPoints.events && (
            <CharacterEvents characterId={characterId} />
          )}
        </>
      )}
    </div>
  );
}

export default CharacterDetail;
