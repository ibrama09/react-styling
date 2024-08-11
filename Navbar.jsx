const Navbar = (props) => {
    const { logo, list } = props;
    return (
      <div>
        <h1>{logo}</h1>
        <div>
          <p>
            {list.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </p>
        </div>
      </div>
    );
  };
export default Navbar;