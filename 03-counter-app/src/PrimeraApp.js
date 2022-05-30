import { Fragment } from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) => {

    /*     const objeto = {
            nombre: 'Aragon',
            edad: 93
        } */

    return (
        <>
            <h1>{saludo}</h1>
            {/*<h1>{JSON.stringify(objeto)}</h1>
            <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
        </>
    );
    /*     return (
            <Fragment>
                <h1>Hola mundo</h1>
                <p>Esta es mi primera aplicación en react</p>
            </Fragment>
        ); 
    */
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;