export const getStaticPaths = async () => {
  return [{ params: { locale: undefined } }, { params: { locale: "en" } }];
};
