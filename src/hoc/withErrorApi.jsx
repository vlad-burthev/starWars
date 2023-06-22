import { useState } from "react";

import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { Container } from "@/components/UI/Container/Containers";

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <Container>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </Container>
    );
  };
};
