let DB;

function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm',1);

    abrirConexion.onerror = function(){
        console.log('Hubo un error');
    }
    abrirConexion.onsuccess = function(){
        DB=abrirConexion.result;
    }
}

function imprimirAlerta(msj,tipo){
    const alerta = document.querySelector('.alerta');
    
    if(!alerta){
        //Crear la alerta
        const divMsj = document.createElement('div');
        divMsj.classList.add('px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','border','alerta')
        if(tipo === 'error'){
            divMsj.classList.add('bg-red-100','border-red-400','text-red-700');
        }else{
            divMsj.classList.add('bg-green-100','border-green-400','text-green-700');
        }
        divMsj.textContent = msj;
        formulario.appendChild(divMsj)

        setTimeout(()=>{
            divMsj.remove()
        },3000)
    }
}