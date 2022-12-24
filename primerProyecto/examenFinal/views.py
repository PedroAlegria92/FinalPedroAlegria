from django.shortcuts import render
from django.urls import reverse
from .models import tareasExamen, usuariosFinal
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
import json

# Create your views here.
def index(request):
    if request.method == 'POST':
        nombreUsuario = request.POST.get('nombreUsuario')
        passwordUsuario = request.POST.get('passwordUsuario')
        #Validacion de informacion
        usuario_registrado = 0
        usuarios_totales = usuariosFinal.objects.all()

        for usuario in usuarios_totales:
            if usuario.usuario == nombreUsuario and usuario.contra == passwordUsuario:
                usuario_registrado = 1
        
        if usuario_registrado == 1:
            return HttpResponseRedirect(reverse('examenFinal:dashboard'))
        else:
            return render(request,'examenFinal/ingresar.html',{
                'mensaje':'Los datos ingresados son incorrectos',
            })
    return render(request,'examenFinal/ingresar.html')

def dashboard(request):
    return render(request,'examenFinal/dashboard.html',{
        'tareas_totales':tareasExamen.objects.all().order_by('id')
    })



def obtener_info_tarea(request):
    datoTarea=str(request.GET.get('tarea'))
    print(datoTarea)
    infoTarea=tareasExamen.objects.get(id=datoTarea)
    arregloTarea=[infoTarea.fechaCreacion,infoTarea.fechaEntrega,infoTarea.descripcion,infoTarea.estadoTarea]
    return JsonResponse({
        'dato':arregloTarea,
    })

def agregarTarea(request):
    if request.method=='POST':
        datos=json.load(request)
        #arregloTarea=datos.get('productoTarea')
        print(datos)
        tareasExamen(fechaCreacion=datos[0],fechaEntrega=datos[1],descripcion=datos[2],estadoTarea=datos[3]).save()
        return JsonResponse({
            'resp':datos
        })

def eliminarTarea(request):
    datoTarea=str(request.GET.get('eliminar'))
    tarea_eliminar=tareasExamen.objects.get(id=datoTarea)
    tarea_eliminar.delete()
    return JsonResponse({
        'dato':'Eliminado ok',
    })