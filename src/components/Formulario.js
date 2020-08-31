import React, { useState } from 'react';
import Error from './Error';
import shortId from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ( { guardarGasto, guardarCrearGasto } ) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, actualizarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if(nombre.trim() === '' || cantidad < 1 || isNaN(cantidad))
        {
            actualizarError(true);
            return;
        }
        actualizarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortId.generate()
        }

        guardarGasto(gasto);
        guardarCrearGasto(true);
        
        guardarNombre('');
        guardarCantidad(0);
    }
    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gatos aquí</h2>
            {error ?(<Error msj="Ambos campos son obligatorios o Presupuesto incorrecto"/>) :null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={ e => guardarNombre(e.target.value)}
                ></input>
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={ e => guardarCantidad(parseInt(e.target.value))}
                ></input>
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>

     );
};

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;