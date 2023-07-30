import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectInput,
} from "./Header.style";

const Header = ({ setSelectType, setQuery, getBooks }) => {
  const printType = ["all", "books", "magazines"];

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search Book or Magazine"
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectInput onChange={(e) => setSelectType(e.target.value)}>
          {printType.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </SelectInput>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
