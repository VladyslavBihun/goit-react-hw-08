// SearchBox.jsx

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange}></input>
    </div>
  );
};

export default SearchBox;
