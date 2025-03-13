import './App.css';
import Form from "./assets/components/form.jsx";
import Preview from "./assets/components/preview.jsx";
import {useState} from "react";
import TestComponent from "../backEnd/src/components/TestComponents.jsx";
function App(){

    function formatearPrecios(numero){
        return Number(numero).toLocaleString('es-CL');
    }

    const [dataForm, setDataForm] = useState({
        titulo: "",
        subtitulo: "",
        descripcion: "",
        precioNormal: "",
        precioOferta: "",
        imagenProducto: "",
        imagenFondo: "",
        logoProducto: ""
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setDataForm(prevData => ({...prevData, imagenProducto: reader.result}))
            };
            reader.readAsDataURL(file);
        }
    }

    return <>
        <header>
            <nav className={'flex align-between'}>
                <h1 className={'text-start text-2xl'}>
                    SnapGen
                </h1>
                <div className={'w-4 h-4'}>x</div>
            </nav>
        </header>


        <section
            className={'grid grid-cols-1 md:grid-cols-3 mt-4 h-full gap-4'}>

            <div className={'col-span-1 bg-gray-100 items-center justify-center p-5 rounded-lg'}>
                <Form setDataForm={setDataForm} imageChange={handleImageChange} />
            </div>

            <div className={'col-span-1 md:col-span-2 bg-gray-100 p-10 flex items-center justify-center rounded-lg'}>
                <Preview dataForm={dataForm} />
            </div>
        </section>

        <TestComponent/>


    </>
}

export default App