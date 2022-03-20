import { isArray } from 'lodash';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ExtendedEndPoints } from '../../models';
import { getCharacterExtendedDetailRequest } from '../../_redux/characters/actions';
import { Card, CardBody, CardHeader, CardFooter, Button } from '../ui-helpers';
import { camelCaseSplit } from '../../helpers';

type Props = {
  characterId: string | number;
};

export default function CharacterComics(props: Props) {
  const { characterId } = props;
  const dispatch = useAppDispatch();
  const { characterExtendedDetail } = useAppSelector((state) => state.app as any);

  useEffect(() => {
    if (characterId) {
      dispatch(getCharacterExtendedDetailRequest(+characterId, ExtendedEndPoints.comics));
    }
  }, [characterId, dispatch]);

  return (
    <div className="row justify-content-center text-center">
      <div className="text-center">
        <Button isLink href="/" color="secondary">
          Go back to home
        </Button>
      </div>

      {isArray(characterExtendedDetail) &&
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
