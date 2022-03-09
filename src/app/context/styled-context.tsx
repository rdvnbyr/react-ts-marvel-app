import { createContext } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { colors } from '../helpers';

const StyleContext = createContext({});

export function StyleProvider(props: { children: React.ReactNode }) {
  const value = {};
  return (
    <StyleContext.Provider value={value}>
      <StyleWrapper>{props.children}</StyleWrapper>
    </StyleContext.Provider>
  );
}

const StyleWrapper = styled.div`
  --primary: ${colors.primary};
  --primary-dark: ${darken(0.125, colors.primary)};
  --primary-light: ${lighten(0.09, colors.primary)};
  --primary-inverse: ${colors.white};

  --secondary: ${colors.secondary};
  --secondary-dark: ${darken(0.125, colors.secondary)};
  --secondary-light: ${lighten(0.09, colors.secondary)};
  --secondary-inverse: ${colors.white};

  --info: ${colors.info};
  --info-dark: ${darken(0.125, colors.info)};
  --info-light: ${lighten(0.09, colors.info)};
  --info-inverse: ${colors.white};

  --warning: ${colors.warning};
  --warning-dark: ${darken(0.125, colors.warning)};
  --warning-light: ${lighten(0.09, colors.warning)};
  --warning-inverse: ${colors.white};

  --danger: ${colors.danger};
  --danger-dark: ${darken(0.125, colors.danger)};
  --danger-light: ${lighten(0.09, colors.danger)};
  --danger-inverse: ${colors.white};

  --success: ${colors.success};
  --success-dark: ${darken(0.125, colors.success)};
  --success-light: ${lighten(0.09, colors.success)};
  --success-inverse: ${colors.white};

  --black: ${colors.black};
  --dark: ${colors.dark};
  --white: ${colors.white};
  --darkGray: ${colors.darkGray};
  --lightGray: ${colors.lightGray};
`;
