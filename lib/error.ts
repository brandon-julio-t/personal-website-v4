export const getErrorMessage = (error: unknown) => {
  let errorMessage = "Unknown error";

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else if (typeof error === "object" && error !== null) {
    errorMessage = JSON.stringify(error);
  }

  return errorMessage;
};
