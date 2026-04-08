interface LoaderProps {}

const BouncingDotsLoader = (props: LoaderProps) => {
  return (
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BouncingDotsLoader;
