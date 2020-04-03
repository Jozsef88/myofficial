import React from "react";
import '../assets/css/templatemo-style.css';
import { FaSearch } from 'react-icons/fa';

const WorkElement = ({id, dataType, image, title, description}) => {
    return (
                <div className="isotope-item" data-type={dataType}>
                    <figure className="snip1321">
                      <div className="left-image">
                        <img
                          src={image}
                          alt={id}
                        />
                      </div>
                      <figcaption>
                        <a
                          href="/#"
                          data-lightbox="image-1"
                          data-title="Caption"
                          ><i><FaSearch /></i
                        ></a>
                        <h4>{title}</h4>
                        <span>{description}</span>
                      </figcaption>
                    </figure>
                </div>
    );
  }

  export default WorkElement;
