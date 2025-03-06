import '/frontEnd/App.css';

function Form() {

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

            <section className={'grid grid-cols-12 h-400'}>
                <div className={'col-span-1 bg-gray-50'}>
                    <p>O</p>
                </div>

                <div className={'col-span-4 bg-gray-100 items-center justify-center'}>
                    <form action="" method={'POST'} className={'mt-5 w-3/4 bg-white'}>
                        <label htmlFor="postNombreEntrada"></label>
                        <input type="text" placeholder={'nombre entrada'}/>

                    </form>
                    <button type={'submit'} className={'w-1/2 p-4 m-4 text-xl hover:font-bold hover:bg-white rounded bg-blue'}>Descargar</button>


                </div>

                <div className={'col-span-7 bg-gray-200'}></div>
            </section>

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