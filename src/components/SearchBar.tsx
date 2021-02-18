import { Box, TextField } from "@material-ui/core";
import React from "react";

type SearchBarState = {
  term: string;
};

type SearchBarProps = {
  onSubmit: any;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = { term: "" };

  onFormSubmit = (e: any) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} noValidate autoComplete="off">
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <TextField
              fullWidth
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              id="outlined-basic"
              label="Image Search"
              placeholder="Enter your text and press 'Enter' key"
              variant="outlined"
            />
          </Box>
        </form>
      </div>
    );
  }
}
export default SearchBar;
