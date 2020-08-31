import React from 'react';
import PropTypes from 'prop-types';

const Error = ({msj}) => (
    <p className="alert alert-danger error">{msj}</p>
);


Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;