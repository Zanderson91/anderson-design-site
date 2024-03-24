// eslint-disable-next-line
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="image-box">
            <span>
                <img
                    src={process.env.PUBLIC_URL + data.image}
                    alt="anderson-brand-logo"
                />
            </span>
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
