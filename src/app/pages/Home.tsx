import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/app-context";
import { useAppDispatch, useAppSelector, useWindowResizeListener } from "../hooks";
import { getCharactersRequest } from "../_redux/characters/actions";
import {
  Button,
  UICard,
  UICardBody,
  UICardImageContainer,
  FormControlWrapper,
  FormControlInput,
} from "../components/ui-helpers";
import { isArray } from "lodash";
import { Pagination } from "../components/ui-helpers/Pagination/Pagination";

const extendedType = ["Series", "Comics", "Stories", "Events"];
const getColor: { [key: string]: string } = {
  Series: "primary",
  Comics: "secondary",
  Stories: "info",
  Events: "success",
};

export default function Home() {
  const dispatch = useAppDispatch();
  const appCtx = useAppContext();
  const ctxProps = useMemo(
    () => ({
      queryParams: appCtx.queryParams,
      pagination: appCtx.pagination,
      setPagination: appCtx.setPagination,
      setSearch: appCtx.setSearch,
      search: appCtx.search,
    }),
    [
      appCtx.pagination,
      appCtx.queryParams,
      appCtx.search,
      appCtx.setPagination,
      appCtx.setSearch,
    ]
  );

  const { characters, isLoading, totalCharacters } = useAppSelector(
    (state) => state.app
  ) as any;

  useEffect(() => {
    dispatch(getCharactersRequest(ctxProps.queryParams));
  }, [ctxProps.queryParams, dispatch]);

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [ctxProps.pagination]);

  const pageWidth = useWindowResizeListener();
  const buttonSize = useMemo(() => {
    if (pageWidth < 768) {
      return "sm";
    }
    if (pageWidth < 992) {
      return "md";
    }
    return "lg";
  }, [pageWidth]);

  return (
    <>
      <StyledHeader>
        <FormControlWrapper>
          <FormControlInput
            placeholder="Search by character name"
            value={ctxProps.search}
            onChange={(e) => ctxProps.setSearch(e.target.value)}
          />
        </FormControlWrapper>
      </StyledHeader>
      <StyledBody>
        {!characters || (characters.length === 0 && <h1>No characters found</h1>)}
        {isArray(characters) && characters.length > 0 && (
          <Pagination
            loading={isLoading}
            paginationParams={ctxProps.pagination}
            setPaginationParams={ctxProps.setPagination}
            pageSize={characters.length}
            totalSize={totalCharacters}
          />
        )}
        {isArray(characters) &&
          characters.map((character) => (
            <UICard key={character.id}>
              <UICardImageContainer
                src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`}
                title={character.name}
              />
              <UICardBody title={character.name} description={character.description}>
                {extendedType.map((extend) => (
                  <Button
                    key={extend}
                    isLink
                    href={`/character/${character.id}/${extend.toLowerCase()}`}
                    size={buttonSize}
                    color={getColor[extend]}
                  >
                    {extend}
                  </Button>
                ))}
              </UICardBody>
            </UICard>
          ))}
        {isArray(characters) && characters.length > 0 && (
          <Pagination
            loading={isLoading}
            paginationParams={ctxProps.pagination}
            setPaginationParams={ctxProps.setPagination}
            pageSize={characters.length}
            totalSize={totalCharacters}
          />
        )}
      </StyledBody>
    </>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
