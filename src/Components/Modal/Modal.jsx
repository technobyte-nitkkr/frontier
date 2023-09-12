import "./style.css";

import React, { useState } from "react";
import SearchBox from "./SearchBox";

export default function Modal({
  element,
  menuItems,
  onMenuClick,
  onClickOutside,
  show,
  isMenuOpen,
}) {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);
  return (
    show && (
      <div className="modal-superContainer">
        <div className="modal-cover" onClick={onClickOutside}></div>
        <div className="modal-container">
          <div className="modal-top">
            <div className="tag">
              <img
                src="/assets/modal/tag.png"
                alt=""
                className="modal-top-img"
              />
            </div>
            <SearchBox title="https://technobyte.live" />
            <div className="tag" onClick={onClickOutside}>
              <img
                src="/assets/modal/add.png"
                alt=""
                className="modal-top-img"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-menu">
              <img
                src="/assets/modal/menu.svg"
                alt=""
                onClick={() => (menuItems ? setMenuOpen(!menuOpen) : menuOpen)}
              />
              <div
                className="modal-menu-items"
                style={
                  menuOpen == false ? { width: "0px", padding: "0px" } : {}
                }
              >
                <div>
                  {menuItems?.map((e) => {
                    return (
                      <div
                        onClick={() => {
                          onMenuClick(e);
                          setMenuOpen(!menuOpen);
                        }}
                        key={e}
                      >
                        {e}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="modal-content">{element}</div>
          </div>
        </div>
      </div>
    )
  );
}

{
  /* <Modal menuItems={[{label:"Hackshetra"}, {label:"BlackBox"}]} onMenuClick={function} element={<Element/>} onClickOutside={onClickOutside}/> */
}
