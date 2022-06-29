import React from "react";

const Items = ({ type, data }) => {
  return (
    <div className="items-container">
      <span className="title-underline">{type}</span>
      <div className="items">
        {data.map(({ title, link, img }, index) => {
          return (
            <div className="item" key={index}>
              <img src={img} alt={title} />
              <div className="item-detail">
                <span>{title}</span>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
