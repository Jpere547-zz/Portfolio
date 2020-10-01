import React, { useState } from "react";
import * as Icon from "react-feather";
import FsLightbox from "fslightbox-react";
import PortfolioTags from "./PortfolioTags";

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const {
    title,
    subtitle,
    imageUrl,
    largeImageUrl,
    url,
    tags,
    projectType,
    githubUrl,
  } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div
      className={
        props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"
      }
    >
      <p className={`mi-portfolio-${projectType}`}>{projectType}</p>
      <div className="mi-portfolio-image">
        <img src={imageUrl} alt={title} />
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {tags ? (
        <h6>
          {tags.map((tag) => (
            <PortfolioTags tag={tag} />
          ))}
        </h6>
      ) : null}{" "}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
