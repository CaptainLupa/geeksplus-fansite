import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="flex flex-col items-center bg-amber-300">
        <h1 className="text-blue-500">
          This content is accessible by the screen reader.
        </h1>
      </header>
    );
  }
}

export default Header;
