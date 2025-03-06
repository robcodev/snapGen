import './App.css';
import Form from "./assets/components/form.jsx";
function App(){

    return <>
<header>
    <nav className={'flex align-between'}>
        <h1 className={'text-start text-2xl'}>
            SnapGen
        </h1>
        <div className={'w-4 h-4'}>x</div>
    </nav>
</header>

<Form/>
    </>
}
export default App