import './App.css';
import Form from "./assets/components/form.jsx";
import Preview from "./assets/components/preview.jsx";
import {useState} from "react";
function App(){

    const [formData, setFormData] = useState({
        nombreEntrada: "",
        nombrePlatoFondo: "",
        nombrePostre: ""
    });

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
            className={'grid grid-cols-12 h-196 mt-4'}>
            <div className={'col-span-4 bg-gray-100 items-center justify-center p-5'}>
                <Form setFormData={setFormData}/>
            </div>

                <div className={'col-span-7 bg-gray-200  flex items-center'}>
                    <Preview formData={formData}/>
                </div>
        </section>


    </>
}

export default App