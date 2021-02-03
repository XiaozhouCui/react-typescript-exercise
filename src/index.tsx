import ReactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";
// import EventComponent from "./events/EventComponent";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import UserSearch from "./classes/UserSearch";

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
