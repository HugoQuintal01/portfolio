import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursors = document.querySelectorAll('.cursor');
      cursors[0].style.left = `${e.clientX}px`;
      cursors[0].style.top = `${e.clientY}px`;
      setTimeout(() => {
        cursors[1].style.left = `${e.clientX}px`;
        cursors[1].style.top = `${e.clientY}px`;
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const activateCursor = () => {
    const cursor = document.querySelectorAll('.cursor')[1];
    cursor.style.width = '100px';
    cursor.style.height = '100px';
  };

  const deactivateCursor = () => {
    const cursor = document.querySelectorAll('.cursor')[1];
    cursor.style.width = '22px';
    cursor.style.height = '22px';
  };

  return (
    <div className="bg">
      <div className="cursor"></div>
      <div className="cursor"></div>
      <div
        className="color"
        onMouseOver={activateCursor}
        onMouseOut={deactivateCursor}
        onClick={deactivateCursor}
      >
      </div>
    </div>
  );
};

export default Cursor;
