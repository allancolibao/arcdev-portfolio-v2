import React from "react"
import PropTypes from "prop-types"

import StarFill from "../../images/svgs/star-fill.svg";
import StartLine from "../../images/svgs/star-line.svg";

const Star = ({count, rating}) => (
    <>
        {[...Array(count)].map((star, i) => 
            (rating <= i ? 
                <StartLine  key={i}  className="w-5 md:w-6 lg:w-8 h-auto md:py-1 lg:py-2"/> : 
                <StarFill  key={i} className="w-5 md:w-6 lg:w-8 h-auto md:py-1 lg:py-2"/> 
            )
        )}
    </>
)


Star.propTypes = {
    count: PropTypes.number
  };

export default Star