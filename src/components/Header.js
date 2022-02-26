const Header = () => {
  return (
    <header>
      <div className="time">
        <h1>00:14.36</h1>
      </div>
      <div className="control">
        <button className="btn-start">Start</button>
        <button className="btn-lap">Lap</button>
        <button className="btn-reset">Reset</button>
      </div>
    </header>
  );
};

export default Header;
