import { useEffect, useMemo } from 'react';
import { useAppContext } from '../context/app-context';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Character } from '../models';
import { getCharactersRequest } from '../_redux/characters/actions';
import { Card, CardBody, CardFooter, CardHeader, Button } from '../components/ui-helpers';

export default function Home() {
  const dispatch = useAppDispatch();
  const appCtx = useAppContext();
  const ctxProps = useMemo(
    () => ({
      queryParams: appCtx.queryParams,
    }),
    [appCtx.queryParams]
  );

  const { characters } = useAppSelector((state) => state.character);

  useEffect(() => {
    dispatch(getCharactersRequest(ctxProps.queryParams));
  }, [ctxProps.queryParams, dispatch]);

  return (
    <div>
      <div className="row justify-content-center">
        {characters?.length > 0 &&
          characters.map((char: Character) => (
            <Card key={char.id}>
              <CardHeader
                title={char.name}
                source={
                  char.thumbnail.path +
                  '/landscape_incredible.' +
                  char.thumbnail.extension
                }
              />
              <CardBody title={char.name} description={char.description} />
              <CardFooter>
                <Button color="secondary">Explore</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
