import logoTCG from '/frontEnd/assets/imgs/logoTCG.png'

const Preview = ({dataForm}) => {

    return (
            <div
                id={'preview'}
                className={' m-auto rounded shadow '}>
                <p className={'nerko-one-regular text-[#f9d876] text-lg mt-5'}>Oferta del día</p>
                <h1 className={'text-white redondaExtraBold text-2xl'}>{dataForm.titulo || "Nombre del producto"}</h1>
                <p className={'text-white redonda'}>{dataForm.subtitulo || "Detalles"}</p>

                <img
                    src={dataForm.imagenProducto}
                    alt="Vista previa imagen"
                    className={'bg-red-50 w-36 h-36 rounded-lg my-3 m-auto object-center object-cover border-2 border-white'}
                />

                <div
                    className={'flex items-center justify-center text-xd text-white redonda'}>
                    <h4>Precio Normal: $</h4>
                    <h4>{dataForm.precioNormal}</h4>
                </div>

                <div
                    className="flex items-center justify-center text-xl redondaExtraBold">
                    <h2 className={'text-white'}>Precio Oferta: $</h2>
                    <h2 className={'text-white'}>{dataForm.precioOferta}</h2>
                </div>

                <img
                    src={logoTCG}
                    alt="logoTCG"
                    className="w-12 m-auto mt-4"
                />

            </div>
    )
}

export default Preview;