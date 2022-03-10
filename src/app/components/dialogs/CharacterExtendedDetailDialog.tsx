import { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { useAppContext } from '../../context/app-context';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ExtendedEndPoints } from '../../models';
import { getCharacterExtendedDetailRequest } from '../../_redux/characters/actions';
import { Button } from '../ui-helpers';

export const CharacterExtendedDetailDialog = () => {
  const dispatch = useAppDispatch();
  const appCtx = useAppContext();
  const ctxProps = useMemo(
    () => ({
      characterId: appCtx.extededCharacterId,
      showCharacterExtendedDetailDialog: appCtx.showCharacterExtendedDetailDialog,
      closeCharacterExtendedDetailDialog: appCtx.closeCharacterExtendedDetailDialog,
    }),
    [
      appCtx.closeCharacterExtendedDetailDialog,
      appCtx.extededCharacterId,
      appCtx.showCharacterExtendedDetailDialog,
    ]
  );

  const {extendedDetail} = useAppSelector((state) => state.app);

  useEffect(() => {
    console.log('CharacterExtendedDetailDialog');
    if (ctxProps.characterId) {
      dispatch(
        getCharacterExtendedDetailRequest(ctxProps.characterId, ExtendedEndPoints.comics)
      );
    }
  }, [ctxProps.characterId, dispatch]);

  return (
    <Modal
      show={ctxProps.showCharacterExtendedDetailDialog}
      onHide={ctxProps.closeCharacterExtendedDetailDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button color="info" onClick={ctxProps.closeCharacterExtendedDetailDialog}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
