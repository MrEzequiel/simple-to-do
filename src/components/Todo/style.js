import styled from 'styled-components'

export const TodoWrapper = styled.li`
  background: ${props => props.theme.colors.g3};
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;

  display: flex;
  gap: 15px;

  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);

  & + li {
    margin-top: 15px;
  }

  @keyframes show-down {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  animation: show-down 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

  &:hover {
    box-shadow: 0 8px 8px -3px rgba(0, 0, 0, 0.1);
  }

  p {
    align-self: center;
    line-height: 1.5em;
  }
`

export const InputCheckboxTodo = styled.label`
  flex-shrink: 0;
  user-select: none;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.colorPrimary};
  border-radius: 10px;
  width: 25px;
  height: 25px;

  input {
    cursor: pointer;
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  input:checked + svg {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }

  svg {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
    transition: opacity 500ms, visibility 500ms, transform 700ms;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`