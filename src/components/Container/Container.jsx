const Container = ({ children, ...otherProps }) => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
      className="container"
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
