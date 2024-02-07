import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { sortOptions } from "../utils";

export interface Sort {
  id: string;
  label: string;
}

interface Props {
  onSelectSort: (sort: Sort) => void;
  selectedSort: Sort | null;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Order by: {selectedSort?.label ? selectedSort.label : 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sort) => (
          <MenuItem onClick={() => onSelectSort(sort)} key={sort.id}>{sort.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
