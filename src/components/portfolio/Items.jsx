import React from "react";

const Items = ({ type, data }) => {
  return (
    <div className="items-container">
      <span className="title-underline">{type}</span>
      <div className="items">
        {data.map(({ _id, title, url, img }) => {
          return (
            <div className="item" key={_id}>
              <img src={img} alt={title} />
              <div className="item-detail">
                <span>{title}</span>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
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
