import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  height?: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  color: string;
  children: React.ReactNode | string;
}

export const FormControlInput: React.FC<InputProps> = ({ color, height, ...props }) => (
  <StyledInput {...props} height={height} color={color} />
);

export const FormControlLabel: React.FC<LabelProps> = ({ children, color, ...props }) => (
  <StyledLabel {...props} color={color}>
    {children}
  </StyledLabel>
);
export const FormControlFeedbackLabel: React.FC<{ feedback: string; color: string }> = ({
  feedback,
  color,
}) => <StyledFeedbackLabel color={color}>{feedback}</StyledFeedbackLabel>;

export const FormControlWrapper: React.FC = ({ children }) => (
  <StyledFormControl>{children}</StyledFormControl>
);

const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;
const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: ${(props) => props.height || "3rem"};
  border: 1px solid var(--darkGray);
  border-radius: var(--border-radius);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: ${(props) => props.color || "var(--darkGray)"};
  &:focus,
  &:hover {
    outline: none;
    border-color: var(--primary);
  }
  &:disabled {
    background-color: var(--lightGray);
  }
  &::placeholder {
    color: var(--darkGray);
  }
`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => `var(--${props.color})`};
`;
const StyledFeedbackLabel = styled.div`
  color: var(--${(props) => props.color});
  font-size: 0.7rem;
  margin-top: 0.2rem;
`;
