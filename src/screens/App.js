import { Sidebar, Header } from "../components";
import { SidebarContent, Ul, Nav, Li } from "../components/SidebarContent";

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
              <Li>My Day</Li>
              <Li>Important</Li>
              <Li>Planned</Li>
              <Li>Assigned to me</Li>
              <Li>Flagged email</Li>
              <Li>Tasks</Li>
            </Ul>
          </Nav>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default App;
