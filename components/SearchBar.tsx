import React from "react";
import Input from "./basic/Input";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <Input Icon={BiSearch} />
    </div>
  );
};

export default SearchBar;
