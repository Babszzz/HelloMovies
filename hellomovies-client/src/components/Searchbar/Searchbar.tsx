import { useEffect, useState } from "react";
import { ISearchbarProps } from "../../interfaces";

const Searchbar: React.FC<ISearchbarProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (searchQuery) {
      // Check if input is an array
      if (!Array.isArray(props.input)) {
        return onOutputReady([]);
      }
      const filter = props.input.filter((item) =>
        props.handleFilter(item, searchQuery?.toLowerCase())
      );
      onOutputReady(filter);
    } else {
      onOutputReady(props.input);
    }
  }, [searchQuery, props.input]);

  const onOutputReady = (data: any[]) => {
    if (!Array.isArray(props.input)) {
      return props.output([]);
    }

    // props.output(data);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchQuery(text);
  };

  return (
    <div>
      <input
        {...props}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        disabled={props.disabled}
        onChange={onChangeHandler}
        id={props.id}
        name={props.name}
        value={searchQuery}
      />
      {/* {showIcon && <SearchIcon><BiSearchAlt/></SearchIcon>} */}
    </div>
  );
};

export default Searchbar;
