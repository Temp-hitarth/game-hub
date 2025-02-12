import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order by: relevence
    </MenuButton>
    <MenuList>
      <MenuItem>Relevence</MenuItem>
      <MenuItem>Data added</MenuItem>
      <MenuItem>name</MenuItem>
      <MenuItem>release data</MenuItem>
      <MenuItem>popularity</MenuItem>
      <MenuItem>Average rating</MenuItem>
    </MenuList>
  </Menu>
);

export default SortSelector;
