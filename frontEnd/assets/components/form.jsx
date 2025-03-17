import '/frontEnd/App.css';
import {useRef, useState} from "react";

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
    const imgInputRef = useRef(null);

    const botonClick = ()=>{
        imgInputRef.current.click();
    }

    return (
        <>

            <section>
                <div className={'mb-3'}>

                    <p className={'text-sm text-gray-400 text-start font-sans'}>Personaliza el contenido y apariencia de
                        tu plantilla</p>

                </div>

                <div className={'w-full rounded bg-gray-300 h-8 mb-3'}></div>
            </section>

            <div>
                <p
                    className={'text-start font-bold leading-loose text-sm block'}>
                    Titulo</p>
                <div>
                    <form action=""
                          method={'POST'}>
                        <label htmlFor="titulo"></label>
                        <input
                            type="text"
                            placeholder={'Protectores Dragon Shield'}
                            name="titulo"
                            value={localData.titulo}
                            onChange={handleChange}
                            className={' border border-gray-300 p-2 rounded w-full h-8 mb-3'}
                        />

                    </form>

                </div>
            </div>

            <div>
                <p
                    className={'text-start font-bold text-sm block leading-loose'}>
                    Subtitulo</p>
                <div>
                    <form action=""
                          method={'POST'}>
                        <label htmlFor="subtitulo"></label>
                        <input
                            type="text"
                            placeholder={'Variedades - 100 unidades'}
                            className={' border border-gray-300 rounded w-full h-8 mb-3 p-2'}
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
                <div>
                    <form action=""
                          method={'POST'}>
                        <label htmlFor="precio"></label>
                        <input
                            type={'text'}
                            placeholder={'Precio normal'}
                            className={'bg-white border border-gray-300 rounded w-full h-8 mb-3 p-2'}
                            name="precioNormal"
                            value={localData.precioNormal}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>

            <div>
                <h4 className={'text-start font-bold text-sm leading-loose'}>
                    Precio Oferta
                </h4>
                <div>
                    <form action="">
                        <label htmlFor="precioOferta"></label>
                        <input className={'bg-white border border-gray-300 rounded h-8 p-2 mb-3 w-full'}
                               type="text"
                               placeholder={'Precio Oferta'}
                               name="precioOferta"
                               value={localData.precioOferta}
                               onChange={handleChange}
                        />
                    </form>
                </div>
            </div>

            <div>
                <div className={'w-full'}>
                    <form action="" method={'post'} id='imgForm'>
                        <div>

                            <button
                                type={'button'}
                                onClick={botonClick}
                                className={'bg-white border border-gray-300 rounded w-full h-8 my-3 cursor-pointer hover:bg-gray-50'}
                            >
                                Subir Imagen
                            </button>

                            <input
                                ref={imgInputRef}
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