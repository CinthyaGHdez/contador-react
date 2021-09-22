// Definiendo nuestro  componente Contador
const Contador = ()=>{
    //Definiendo el estado del componete. Cada vez que el estado cambia todo el componente se volverá a renderizar.
    const [contador, setContador]= React.useState(0);
    //Definiendo las funciones para aumentar y disminuir el estado del contador ambas invocan a la función setContador.
    const aumentar = ()=>setContador(contador+1);
    const disminuir =()=>setContador(contador-1);

    return(
        <div>
            <h2 className = {contador < 0 ? 'menor': 'mayor'}>Contador: {contador}</h2>
            <hr/>

            <button onClick={aumentar}> <i class="fa fa-plus" aria-hidden="true"></i> Aumenta</button>
            <button onClick={disminuir}> <i class="fa fa-minus" aria-hidden="true"></i> Disminuye</button>
        </div>
    )
}