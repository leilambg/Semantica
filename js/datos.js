var arrayNegocios  = new Array();
var negocioPantalla;
var posEnArray=0;
class Negocio
{
    constructor(id,nombre,direccion,email,ll,urlImagen,tipoEstablecimiento)
    {
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.email=email;
        this.latlon=ll;
        this.urlImagen=urlImagen;
        this.tipoEstablecimiento=tipoEstablecimiento;
    }
    visualizaNegocio(){
       
        nombre.value=this.nombre;
        direccionLocal.value=this.direccion;
        email.value=this.email;
        latitud_longitud.value=this.latlon;
        imagen.value=this.urlImagen ;
        establecimiento.value=this.tipoEstablecimiento;
    }

}

function crearNegocio()
{
        posEnArray=arrayNegocios.length;
     //   alert(" Registro grabado en posicion :"+posEnArray );
        negocioPantalla = new Negocio(
        posEnArray,
        nombre.value,
        direccionLocal.value,
        email.value,
        latitud_longitud.value,
        imagen.value ,
        establecimiento.value  );


        arrayNegocios.push(negocioPantalla);
        
      //  negocioPantalla=arrayNegocios[0];
      //  negocioPantalla.nombre="_____________________"+negocioPantalla.id
       // negocioPantalla.visualizaNegocio();
}

function siguienteNegocio()
{
    posEnArray++;

    if(posEnArray> (arrayNegocios.length-1) ){posEnArray=arrayNegocios.length-1;}

   // alert(posEnArray + "....  "+arrayNegocios.length)
   try{ 
   negocioPantalla=arrayNegocios[posEnArray];
    negocioPantalla.visualizaNegocio();
    }catch(Exception){}
}
function anteriorNegocio()
{
    posEnArray--;
    if(posEnArray< 0 ){posEnArray=0;}
   // alert(posEnArray + "....  "+arrayNegocios.length)
   try{
    negocioPantalla=arrayNegocios[posEnArray];
    negocioPantalla.visualizaNegocio();
    }catch(Exception){}

}
function borrarNegocio()
{
    try{
     arrayNegocios.splice(posEnArray, 1)
    negocioPantalla=arrayNegocios[0];
    negocioPantalla.visualizaNegocio();
    }catch(Exception){}
}

function generaTablaLocales()
{
    for(var i=0;i<arrayNegocios.length;i++){
        var linea= document.createElement("tr");

        var datoID= document.createTextNode(arrayNegocios[i].id);
        var celda= document.createElement("td");
    
        celda.setAttribute('data-label','ID');
        celda.appendChild(datoID);
        linea.appendChild(celda);

        var datoNombre= document.createTextNode(arrayNegocios[i].nombre);
        var celda= document.createElement("td");
        celda.setAttribute('data-label','Nombre');
        celda.appendChild(datoNombre);
        linea.appendChild(celda);

        var datoEmail= document.createTextNode(arrayNegocios[i].email);
        var celda= document.createElement("td");
        celda.setAttribute('data-label','Email');
        celda.appendChild(datoEmail);
        linea.appendChild(celda);

        var datoTipo= document.createTextNode(arrayNegocios[i].tipoEstablecimiento);
        var celda= document.createElement("td");
        celda.setAttribute('data-label','Tipo');
        celda.appendChild(datoTipo);
        linea.appendChild(celda);

        cuerpo.appendChild(linea);

   // Añadir marcador al mapa

    var icono = {
        url: "./imagenes/Logo.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
        };
 
    var ll_ll =arrayNegocios[i].latlon.split(",");
 
    var latlog=new google.maps.LatLng(ll_ll[0],ll_ll[1]);
    
        marker = new google.maps.Marker({
            position: latlog,
            icon: icono,
            map: map,
            nombre: arrayNegocios[i].nombre
        });
        google.maps.event.addListener(marker, 'click', function() {
            alert("Click en marcador " + this.nombre);
        });


  

    }

}