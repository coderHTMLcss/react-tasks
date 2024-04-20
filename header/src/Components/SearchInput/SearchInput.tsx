import StyledSearchInput from "./styledSearchInput";

const SearchInput = () => {
    return (
        <form className="search" role="search">
            <StyledSearchInput type="search" name="search" placeholder="Search" />
        </form>
    )
}


export default SearchInput;