import '/frontEnd/App.css';
import {useState} from "react";

const Form = ({setDataForm, imageChange}) => {

   const [localData, setLocalData] = useState({
        titulo: "",
        subtitulo: "",
        descripcion: "",
        precioNormal: "",
        precioOferta: "",
        imagenProducto: "",
        imagenFondo: "",
        logoProducto: "",
    });

    const handleChange = (e) => {
        setDataForm(prev => ({...prev, [e.target.name]: e.target.value}));
        setLocalData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    return (
        <>

            <h1
                className={'text-start font-bold text-xl mb-10'}>
                Crear un nuevo archivo
            </h1>


            <div>
                <p
                    className={'text-start font-bold text-sm block'}>
                    Titulo</p>
                <div
                    className={'flex gap-2'}>
                    <form action=""
                          method={'POST'}>
                        <label htmlFor="titulo"></label>
                        <input
                            type="text"
                            placeholder={'Protectores Dragon Shield'}
                            name="titulo"
                            value={localData.titulo}
                            onChange={handleChange}
                            className={'bg-white border-1 border-black rounded '}
                        />

                    </form>

                </div>
            </div>

            <div>
                <p
                    className={'text-start font-bold text-sm block'}>
                    Subtitulo</p>
                <div
                    className={'flex gap-2'}>
                    <form action=""
                          method={'POST'}>
                        <label htmlFor="subtitulo"></label>
                        <input
                            type="text"
                            placeholder={'Variedades - 100 unidades'}
                            className={'bg-white border-1 border-black rounded '}
                            name="subtitulo"
                            value={localData.subtitulo}
                            onChange={handleChange}
                        />

                    </form>

                </div>
            </div>

            {/*<div>*/}
            {/*    <p*/}
            {/*        className={'text-start font-bold text-sm block'}>*/}
            {/*        Descripción</p>*/}
            {/*    <div*/}
            {/*        className={'flex gap-2'}>*/}
            {/*        <form action=""*/}
            {/*              method={'POST'}>*/}
            {/*            <label htmlFor="descripcion"></label>*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                placeholder={'descripcion'}*/}
            {/*                className={'bg-white border-1 border-black rounded '}*/}
            {/*                name="descripcion"*/}
            {/*                value={localData.descripcion}*/}
            {/*                onChange={handleChange}*/}
            {/*            />*/}

            {/*        </form>*/}

            {/*    </div>*/}
            {/*</div>*/}

            <div>
                <p
                    className={'text-start font-bold text-sm block'}>
                    Precio normal</p>
                <div className={'flex gap-2'}>
                    <form action=""
                          method={'POST'}>
                        <label htmlFor="precio"></label>
                        <input
                            type={'number'}
                            placeholder={'Precio normal'}
                            className={'bg-white border-1 border-black rounded'}
                            name="precioNormal"
                            value={localData.precioNormal}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>

            <div>
                <h4 className={'text-start font-bold text-sm'}>
                    Precio Oferta
                </h4>
                <div className={'flex gap-2'}>
                    <form action="">
                        <label htmlFor="precioOferta"></label>
                        <input className={'bg-white border-1 border-black rounded '}
                               type="text"
                               placeholder={'precioOferta'}
                               name="precioOferta"
                               value={localData.precioOferta}
                               onChange={handleChange}
                        />
                    </form>
                </div>
            </div>

            <div>
                <div className={'mt-6 items-start flex'}>
                    <form action="" method={'post'} id='imgForm'>
                        <div>

                            <label
                                htmlFor="imgUpload"
                                className={'bg-white border-1 border-black rounded p-2 hover:bg-blue-300 focus:bg-blue-400'}>
                            >Subir Imagen</label>
                            <input
                                id="imgUpload"
                                type="file"
                                accept="image/*"
                                onChange={imageChange}/>
                        </div>
                    </form>
                </div>
            </div>


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