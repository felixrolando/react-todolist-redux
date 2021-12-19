import { Sidebar, Header } from "../components";
import { SidebarContent, Ul, Nav, Li } from "../components/SidebarContent";
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
    <div>
      <Header>
        <h1 style={{ color: "white" }}>To Do</h1>
      </Header>
      <Sidebar>
        <SidebarContent>
          <Nav>
            <Ul>
              <Li>
                <FiSun />
                My Day
              </Li>
              <Li>
                <FiStar />
                Important
              </Li>
              <Li>
                <FiCalendar />
                Planned
              </Li>
              <Li>
                <FiUser />
                Assigned to me
              </Li>
              <Li>
                <FiFlag />
                Flagged email
              </Li>
              <Li>
                <FiHome />
                Tasks
              </Li>
            </Ul>
          </Nav>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default App;
