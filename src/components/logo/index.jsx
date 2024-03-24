import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ image }) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/about"}>
            <img src={process.env.PUBLIC_URL + image} alt="Zack" />
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
};

export default Logo;
