import styled from "styled-components";

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding-top: 1px;
`;

export const Nav = styled.nav`
  display: block;
  margin: 10px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  > * {
    &:first-child {
      font-weight: bold;
      color: #34373d;
    }
  }
`;

export const Li = styled.li`
  display: list-item;
  text-align: left;
  margin: 10px;
  &:hover {
    color: #0078d7;
    cursor: pointer;
  }
`;

export const WrapperLi = styled.div`
  display: flex;
  align-items: center;
`;
