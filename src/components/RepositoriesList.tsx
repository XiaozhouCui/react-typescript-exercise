import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions"; // custom hook
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions(); // useActions includes useDispatch and actionCreators
  const { data, error, loading } = useTypedSelector(
    // useTypedSelector includes useSelector
    (state) => state.repositories
  );

  // when event arg is used, must declare event type
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term))
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
