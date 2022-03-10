import { useEffect, useMemo } from 'react';
import { useAppContext } from '../context/app-context';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Character } from '../models';
import { getCharactersRequest } from '../_redux/characters/actions';
import { BootstrapTableWrapper, Button } from '../components/ui-helpers';
import BootstrapTable from 'react-bootstrap-table-next';
import { isArray } from 'lodash';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useAppDispatch();
  const appCtx = useAppContext();
  const ctxProps = useMemo(
    () => ({
      queryParams: appCtx.queryParams,
    }),
    [appCtx.queryParams]
  );

  const { characters } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(getCharactersRequest(ctxProps.queryParams));
  }, [ctxProps.queryParams, dispatch]);

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      hidden: true,
    },
    {
      dataField: 'thumbnail',
      text: 'Avatar',
      classes: 'text-right pr-0',
      headerClasses: 'text-right pr-3',
      style: {
        minWidth: '100px',
        maxWidth: '100px',
      },
      formatter: (
        _cell: any,
        row: { thumbnail: { path: string; extension: string }; name: string | undefined }
      ) => (
        <img
          src={`${row.thumbnail.path}/landscape_incredible.${row.thumbnail.extension}`}
          alt={row.name}
          style={{ width: '100%' }}
        />
      ),
    },
    {
      dataField: 'name',
      text: 'Name',
      style: {
        minWidth: '150px',
      },
    },
    {
      dataField: 'description',
      text: 'Description',
      style: {
        minWidth: '400px',
      },
    },
    {
      dataField: 'Action',
      text: 'Action',
      classes: 'text-right',
      headerClasses: 'text-right',
      style: {
        minWidth: '200px',
        display: 'flex',
        justifyContent: 'flex-start',
      },
      formatter: (_cell: any, row: Character) => (
        <Link to={`/${row.id}/character-detail`}>Wiew</Link>
      ),
    },
  ];

  return (
    <div>
      <BootstrapTableWrapper>
        <BootstrapTable
          wrapperClasses="table-responsive"
          classes="table table-head-custom table-vertical-center overflow-hidden"
          bootstrap4
          bordered={true}
          keyField="id"
          data={characters && isArray(characters) ? characters : []}
          columns={columns}
        />
      </BootstrapTableWrapper>
    </div>
  );
}
