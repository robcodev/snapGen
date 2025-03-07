import '/frontEnd/App.css';
import { useState } from "react";

const Form = ({ setFormData }) => {

    const [localData, setLocalData] = useState({
        nombreEntrada: "",
        nombrePlatoFondo: "",
        nombrePostre: ""
    });

    const handleChange = (e) => {
        setFormData({...localData, [e.target.name]: e.target.value});
        setLocalData({...localData, [e.target.name]: e.target.value});
    }

    return (
        <>
            {/*    pARA EL KIKE DEBERIA TENER:

        1- PREVENTA? --> boleano
        2- NOMBRE PRODUCTO --> Texto
        3- DESCRIPCIÓN
        4- PRECIO
        5- IMAGEN PRODUCTO --> Texto URL --> Subirla (Supa buckets --> URL)
        6- IMAGEN FONDO --> ""
        7- LOGO PRODUCTO --> ""

        --> ENTRADAS
            ENSALADA CESAR
            CAUSA LIMEÑA

            --> FONDOS
                --> POSTRES
                    --> BEBESTIBLES

                    AGREGADOS COMO BAJATIVOS
                            */}

                    <h1
                        className={'text-start font-bold text-xl mb-10'}>
                        Crear un nuevo archivo
                    </h1>


                    <div>
                        <p
                            className={'text-start font-bold text-sm block'}>
                            Entradas</p>
                        <div
                            className={'flex gap-2'}>
                            <form action=""
                                  method={'POST'}>
                                <label htmlFor="postNombreEntrada"></label>
                                <input
                                    type="text"
                                    placeholder={'nombre entrada'}
                                    name="nombreEntrada"
                                    value={localData.nombreEntrada}
                                    onChange={handleChange}
                                    className={'bg-white border-1 border-black rounded '}
                                />

                            </form>
                            <button
                                type={"button"}
                                className={'font-bold text-white bg-blue-300 rounded p-1 px-2 hover:bg-blue-300 focus:bg-blue-400'}>
                                +
                            </button>
                        </div>
                    </div>

                    <div>
                        <p
                            className={'text-start font-bold text-sm block'}>
                            Platos de Fondo</p>
                        <div
                            className={'flex gap-2'}>
                            <form action=""
                                  method={'POST'}>
                                <label htmlFor="postNombreplatoFondo"></label>
                                <input
                                    type="text"
                                    placeholder={'Nombre plato fondo'}
                                    className={'bg-white border-1 border-black rounded '}
                                    name="nombrePlatoFondo"
                                    value={localData.nombrePlatoFondo}
                                    onChange={handleChange}
                                />

                            </form>
                            <button
                                type={"button"}
                                className={'font-bold text-white bg-blue-300 rounded p-1 px-2 hover:bg-blue-300 focus:bg-blue-400'}>
                                +
                            </button>
                        </div>
                    </div>

                    <div>
                        <p
                            className={'text-start font-bold text-sm block'}>
                            Postres</p>
                        <div
                            className={'flex gap-2'}>
                            <form action=""
                                  method={'POST'}>
                                <label htmlFor="postNombrePostre"></label>
                                <input
                                    type="text"
                                    placeholder={'Nombre Postre'}
                                    className={'bg-white border-1 border-black rounded '}
                                    name="nombrePostre"
                                    value={localData.nombrePostre}
                                    onChange={handleChange}
                                />

                            </form>
                            <button
                                type={"button"}
                                className={'font-bold text-white bg-blue-300 rounded p-1 px-2 hover:bg-blue-300 focus:bg-blue-400'}>
                                +
                            </button>
                        </div>
                    </div>

                    <button type={'submit'}
                            className={'w-1/2 p-4 m-4 text-xl hover:font-bold hover:bg-white rounded bg-blue-300'}>Descargar
                    </button>



            {/*

        Formularios --> Ruta ADMIN
        IMGs se arman el html (emailing ejemplo)

        Puppeteer (= es una cosa que hace cosas ==> BOT ==> cabecera del navegador)
            --> Tome pantallazo al html de la img que se envia ala cabecera desde el front


        */}


        </>
    )
}

export default Form;