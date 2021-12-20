import { Sidebar, Header } from "../components";
import {
  SidebarContent,
  Ul,
  Nav,
  Li,
  WrapperLi,
} from "../components/SidebarContent";
import {
  FiSun,
  FiStar,
  FiCalendar,
  FiUser,
  FiFlag,
  FiHome,
} from "react-icons/fi";

export const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Header>
        <h1 style={{ color: "white" }}>To Do</h1>
      </Header>
      <Sidebar>
        <SidebarContent>
          <Nav>
            <Ul>
              <WrapperLi>
                <FiSun />
                <Li>My Day</Li>
              </WrapperLi>
              <WrapperLi>
                <FiStar />
                <Li>Important</Li>
              </WrapperLi>
              <WrapperLi>
                <FiCalendar />
                <Li>Planned</Li>
              </WrapperLi>
              <WrapperLi>
                <FiUser />
                <Li>Assigned to me</Li>
              </WrapperLi>
              <WrapperLi>
                <FiFlag />
                <Li>Flagged email</Li>
              </WrapperLi>
              <WrapperLi>
                <FiHome />
                <Li>Tasks</Li>
              </WrapperLi>
            </Ul>
          </Nav>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default App;
