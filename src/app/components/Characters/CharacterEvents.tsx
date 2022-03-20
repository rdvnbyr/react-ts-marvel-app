import { isArray } from 'lodash';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ExtendedEndPoints } from '../../models';
import { getCharacterExtendedDetailRequest } from '../../_redux/characters/actions';
import { Card, CardBody, CardHeader, CardFooter, Button } from '../ui-helpers';

type Props = {
  characterId: string | number;
};

export default function CharacterEvents(props: Props) {
  const { characterId } = props;
  const dispatch = useAppDispatch();
  const { characterExtendedDetail, extendRequestLoading } = useAppSelector(
    (state) => state.app as any
  );

  useEffect(() => {
    if (characterId) {
      dispatch(getCharacterExtendedDetailRequest(+characterId, ExtendedEndPoints.events));
    }
  }, [characterId, dispatch]);

  return (
    <div className="row justify-content-center text-center">
      <div className="text-center">
        <Button isLink href="/" color="secondary">
          Go back to home
        </Button>
      </div>
      {extendRequestLoading && (
        <div className="text-center">
          <h1>Loading...</h1>
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {!extendRequestLoading &&
        isArray(characterExtendedDetail) &&
        characterExtendedDetail.length > 0 &&
        characterExtendedDetail.map((item) => (
          <Card key={item.id}>
            <CardHeader
              source={`${item.thumbnail.path}/landscape_incredible.${item.thumbnail.extension}`}
              title={item.title}
            />
            <CardBody title={item.title} description={item.description} />
            <CardFooter></CardFooter>
          </Card>
        ))}
    </div>
  );
}
