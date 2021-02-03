import { Action } from "./../actions/index";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// To make better use of TypeScript, add returned type "RepositoriesState"
const reducer = (
  state: RepositoriesState,
  action: Action // add type guard
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // type guard make 100% certain that "action" is if interface SearchRepositoriesAction
      // meaning that action.payload is 100% an array of strings
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
