import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";

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

const styles = (): Record<ClassNames, CreateCSSProperties<Props>> => ({
  container: {
    background: (props: Props) => `url(${props.imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: (props: Props) => props.height,
    width: (props: Props) => props.width,
  },
});

export default withStyles(styles)(Image);
