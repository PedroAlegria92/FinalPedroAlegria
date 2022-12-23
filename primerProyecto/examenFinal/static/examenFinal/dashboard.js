//PREGUNTA 1 IMPLEMENTACION DE LA FUNCION PARA MOSTRAR EL DETALLE DE LA TAREA
            /*
            En esta funcion se recomienda seguir los siguientes pasos
            -Al capturar el id de la tarea dentro de un string, desarrollar la funcion obtener_info_tarea en el server
            que permita capturar el id de la tarea y devoler un objeto JSON con dicha informacion
            -Realizar la funcion fetch correspondiente al interior de mostrarDetalle y captura la 
            informacion devuelta desde el servidor
            -Obtener los elementos HTML internos de la ventana o crearlos utilizando javascript y anexar
            la informacion recibida en el objeto JSON
            -Las modificaciones realizadas en el codigo se mostraran de forma instantanea en la ventana
            */

            /*function obtener_info_tarea(id_tarea)
            {
             console.log(id_tarea)
             fetch(`http://127.0.0.1:8000/examenFinal/obtener_info_tarea?tarea=${id_tarea}`)
             .then(response => response.json())
             .then(data => {
                 console.log(data)
             })
            }*/
             
            function mostrarDetalle(id_tarea)
            {
             console.log(id_tarea)
             fetch(`http://127.0.0.1:8000/examenFinal/obtener_info_tarea?tarea=${id_tarea}`)
             .then(response => response.json())
             .then(data => {
                 console.log(data)
                 let cuerpoTabla=document.getElementById('cuerpoTabla')
                 for(let i=0;i<data.dato.length;i++)
                 {
                    cuerpoTabla.innerHTML+=`
                    <tr>
                        <td>${data.dato[i]}</td>
                    </tr>
                    `
                 }
             })
            }
 
            /*
            Para eliminar la informacion al interior de la ventana mostrar detalle capturar los elementos
            apropiados y eliminar los datos al interior de su propiedad innerHTML, recordar que para capturar
            los elementos lo puede realizar con la funcion querySelector, getElementByID, etc.
            No olvide darle las propiedades ID, name, class, etc ... a los elementos HTML para su correspondiente
            captura.
            */
            function eliminarDetalle()
            {
             console.log('Funcion para eliminar el HTML interior de la ventana')
            }
 
            //PREGUNTA 2-1
            /*
            La funcion nuevaTarea permite capturar la informacion al interior de la ventana modal
            Luego de capturar la informacion se debe enviar la informacion al servidor a traves
            de fetch y guardar la informacion enviada en el servidor
            Al recibir la confirmacion del servidor se debe eliminar la totalidad de informacion
            al interior de la venta
            No olvidar agregar los datos principales a la tabla con javascript, capturar la tabla y
            anexar los datos de la nueva tarea como una fila nueva
            Al infalizar el codigo recordar eliminar la informacion al interior de los inputs definidos
            */
            function nuevaTarea()
            {
             console.log('Crear nueva tarea')
             //Escribir su codigo aqui
 
             //Fin del codigo
             $(".modal-backdrop").remove();
             $('#nuevaTarea').hide()
            }
 
            /*
            Capturar los input de la ventana modal para nuevaTarea y eliminar el valor al interior de 
            dichos campos
            */
            function eliminarNuevo()
            {
 
            }
 
            //PREGUNTA 2-2
            /*
            Se recepciona el id de la tarea a eliminar
            Esta funcion debe enviar la informacion al servidor a traves de una instruccion fetch
            En el servidor se debe eliminar la tarea de la base de datos y enviar una confirmacion de vuelta
            a la vista
            La funcion fetch deberá de recibir dicha confirmacion y eliminará la tarea de la tabla
            */
            function eliminarTarea(id_tarea)
            {
             console.log(id_tarea)
            }
 
            //PREGUNTA 2-3
            /*
            Esta funcion recibe el id de la tarea correspondiente
            Con el id de la tarea obtener la informacion desde el servidor
            utilizando la funcion fetch
            Con la informacion capturada agregar dicha informacion a los inputs definidos en la vista modal
            Se recomienda crear un input con propiedad readonly en donde el id de la tarea sea mostrado,
            esto debido a que al presionar el boton Actualizar se deberá enviar la informacion al servidor a traves de un formulario
            y se requiere el id de la tarea para modificar sus parametros
            */
            function editarTarea(id_tarea)
            {
             console.log(id_tarea)
             //El codigo inicia aqui
 
             //Fin del codigo
            }