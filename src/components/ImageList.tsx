import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  Box,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

type ImageListProps = {
  images: Array<any>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const ImageList: FunctionComponent<ImageListProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mt={2}>
        <GridList cellHeight={300} cols={6}>
          {props.images.map(({ id, description, urls }) => {
            return (
              <GridListTile key={id} cols={Math.floor(Math.random() * 2) + 1}>
                <img src={urls.regular} alt={description} />
              </GridListTile>
            );
          })}
        </GridList>
      </Box>
    </div>
  );
};

export default ImageList;
