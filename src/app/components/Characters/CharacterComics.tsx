import { isArray } from 'lodash';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ExtendedEndPoints } from '../../models';
import { getCharacterExtendedDetailRequest } from '../../_redux/characters/actions';
import { Card, CardBody, CardHeader, Button } from '../ui-helpers';
import { camelCaseSplit } from '../../helpers';
import { Spinner } from 'react-bootstrap';

type Props = {
  characterId: string | number;
};

export default function CharacterComics(props: Props) {
  const { characterId } = props;
  const dispatch = useAppDispatch();
  const { characterExtendedDetail, extendRequestLoading } = useAppSelector(
    (state) => state.app as any
  );

  useEffect(() => {
    if (characterId) {
      dispatch(getCharacterExtendedDetailRequest(+characterId, ExtendedEndPoints.comics));
    }
  }, [characterId, dispatch]);

  return (
    <div className="row justify-content-center text-center">
      <div className="text-center">
        <Button isLink href="/" color="warning">
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
        characterExtendedDetail.length === 0 && (
          <div className="text-center">
            <h1>No comics found</h1>
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
            <div className="d-flex flex-column justify-content-start px-3">
              {item.prices.map((price: { type: string; price: number }) => (
                <div key={price.type} className="d-flex flex-row justify-content-between">
                  <span>{camelCaseSplit(price.type)}</span>
                  <b className="text-primary">${price.price}</b>
                </div>
              ))}
            </div>
          </Card>
        ))}
    </div>
  );
}
