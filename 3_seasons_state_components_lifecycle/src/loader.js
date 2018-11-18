import React from 'react';
import ReactLoading from 'react-loading';


const Loader = ({type, color}) => (
    <ReactLoading type='cylon' color='#ff0000' height={'10%'} width={'80%'} />
);
 
export default Loader;