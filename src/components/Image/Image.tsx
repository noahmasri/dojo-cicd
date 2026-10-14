import React from "react";
import { withStyles } from "@material-ui/core/styles";

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
  imgUrl: string;
  height: number;
  width: number;
}

type Props = OwnProps;

export const Image: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  return <div className={classes.container}></div>;
};

const styles = (): Record<ClassNames, any> => ({
  container: (props: Props) => ({
    background: `url(${props.imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: props.height,
    width: props.width,
  }),
});

export default withStyles(styles)(Image);
