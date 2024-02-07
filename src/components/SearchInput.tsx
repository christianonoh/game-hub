import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearchSubmit: (searchText: string) => void;
}

const SearchInput = ({ onSearchSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearchSubmit(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input
          ref={ref}
          placeholder="Search for games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
