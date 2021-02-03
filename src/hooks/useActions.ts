import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  // actionCreators is an object containing action (thunk) functions
  return bindActionCreators(actionCreators, dispatch);
  // { searchRepositories: dispatch(searchRepositories)}
};
