import ReactDOM from "react-dom";
import App from "./components/App";
// import EventComponent from "./basics/events/EventComponent";
// import GuestList from "./basics/state/GuestList";
// import UserSearch from "./basics/state/UserSearch";
// import UserSearch from "./basics/classes/UserSearch";
// import UserSearch from "./basics/refs/UserSearch";

const Index = () => {
  return (
    <div>
      {/* <div className="basics">
        <GuestList />
        <EventComponent />
        <UserSearch />
      </div> */}
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
