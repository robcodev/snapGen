const Preview = ({formData}) => {

    return (
            <div
                id={'preview'}
                className={'bg-red-50 w-3/4 h-3/4 m-auto'}>
                <h2 className={'text-lg'}>{formData.nombreEntrada || "Nombre Entrada"}</h2>
                <h2 className={'text-xl'}>{formData.nombrePlatoFondo || "Nombre del Plato de Fondo"}</h2>
                <h2 className={'text-4xl'}>{formData.nombrePostre || "Nombre del Postre"}</h2>
            </div>
    )
}

export default Preview;