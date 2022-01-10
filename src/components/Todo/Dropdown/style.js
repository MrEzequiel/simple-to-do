import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
`

export const ButtonDropdown = styled.button`
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  transition: background 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: ${props => props.theme.colors.g2};
  }
`

export const DropdownStyle = styled.div`
  position: absolute;
  z-index: 9999;
  overflow: hidden;
  top: 30px;
  right: 10px;
  box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.1);

  @keyframes show-down {
    from {
      opacity: 0.4;
      max-height: 0%;
    }
    to {
      opacity: 1;
      max-height: 400px;
    }
  }

  animation: show-down 1s ease;

  width: 100px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.g1};
`

export const DropdownItens = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 50px;
  font-size: 1.4rem;
  font-weight: 300;
  transition: background 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  & + div {
    border-top: 1px solid ${props => props.theme.colors.colorPrimary2};
  }

  &:hover {
    background: ${props => props.theme.colors.g4};
  }

  svg {
    color: ${props => props.theme.colors.colorPrimary};
  }
`
