import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  textContainer: {
    flex: 0.2
  }
});

interface Props {
  description: string;
}

const DonationPageFormBodyNonprofitDescription: React.FC<Props> = ({
  description
}) => {
  const { textContainer } = useStyles();

  return (
    <div className={textContainer}>
      <Typography>{description}</Typography>
    </div>
  );
};

export default DonationPageFormBodyNonprofitDescription;
