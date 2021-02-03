import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
