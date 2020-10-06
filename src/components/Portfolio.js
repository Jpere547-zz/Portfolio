import React, { useState } from "react";
import * as Icon from "react-feather";
import FsLightbox from "fslightbox-react";
import PortfolioTags from "./PortfolioTags";
import LineIcon from "react-lineicons";

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
        <a
          className="mi-portfolio-image-github"
          rel="noopener noreferrer"
          target="_blank"
          href={githubUrl}
        >
          <LineIcon name="github" />
        </a>
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
      <h6>
        {tags ? (
          <p>
            {tags.map((tag) => (
              <PortfolioTags tag={tag} />
            ))}
          </p>
        ) : null}{" "}
      </h6>
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
