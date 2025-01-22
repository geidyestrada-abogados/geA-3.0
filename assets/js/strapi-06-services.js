// Funciones para acceder a la API de Strapi, cargar el contenido y actualizarlo en la BD de Strapi.

//* ========================================================================================================================================================
//* SERVICES Section
//* ========================================================================================================================================================

// <!-- Funciones para trabajar com el HERO desde la API de Strapi-->
// URL de la API de Strapi
const apiURLservice = "https://www.geidyestrada.com/api/service";

//* =========================================================================================
//* (1) OBTENER Y MOSTRAR DATOS DE SERVICES
//* =========================================================================================

// FUNCIÓN PARA: ////////////////////////////////////////////////// (1) OBTENER Y MOSTRAR DATOS DEL SERVICE ///////////////////////////////////////////////////////////////////////
/**
 * fetchHeroContent
 * Obtiene el contenido de la seccion Service desde la API de Strapi y lo muestra en el sitio web.
 * - Realiza una solicitud HTTP GET a la API.
 * - Parsea la respuesta y actualiza el contenido de la seccion Service.
 * - Asigna valores a los elementos HTML correspondientes.
 */

//* -- INICIO FUNCIÓN --> fetchServiceContent() (Obtener y mostrar los datos de Services) //////////////////////////////////////////////////////////////////////////
async function fetchServiceContent() {
  try {
    const response = await fetch(apiURLservice);
    const data = await response.json();

    if (data && data.data) {
      const serviceData = data.data;

      // Asigna los valores de texto a los elementos HTML correspondientes

      // Título Servicios
      if (document.getElementById("service-title")) {
        document.getElementById("service-title").textContent =
          serviceData.Title || "";
      }

      // Intro Servicios
      if (document.getElementById("service-intro")) {
        document.getElementById("service-intro").textContent =
          serviceData.Intro || "";
      }

      // Extranjeria
      if (document.getElementById("service-titleservice1")) {
        document.getElementById("service-titleservice1").textContent =
          serviceData.TitleService1 || "";
      }
      if (document.getElementById("service-service1")) {
        document.getElementById("service-service1").textContent =
          serviceData.Service1 || "";
      }
      // Familia
      if (document.getElementById("service-titleservice2")) {
        document.getElementById("service-titleservice2").textContent =
          serviceData.TitleService2 || "";
      }
      if (document.getElementById("service-service2")) {
        document.getElementById("service-service2").textContent =
          serviceData.Service2 || "";
      }
      // Civil
      if (document.getElementById("service-titleservice3")) {
        document.getElementById("service-titleservice3").textContent =
          serviceData.TitleService3 || "";
      }
      if (document.getElementById("service-service3")) {
        document.getElementById("service-service3").textContent =
          serviceData.Service3 || "";
      }
      // Laboral
      if (document.getElementById("service-titleservice4")) {
        document.getElementById("service-titleservice4").textContent =
          serviceData.TitleService4 || "";
      }
      if (document.getElementById("service-service4")) {
        document.getElementById("service-service4").textContent =
          serviceData.Service4 || "";
      }
      // Administrativo
      if (document.getElementById("service-titleservice5")) {
        document.getElementById("service-titleservice5").textContent =
          serviceData.TitleService5 || "";
      }
      if (document.getElementById("service-service5")) {
        document.getElementById("service-service5").textContent =
          serviceData.Service5 || "";
      }
      // Penal
      if (document.getElementById("service-titleservice6")) {
        document.getElementById("service-titleservice6").textContent =
          serviceData.TitleService6 || "";
      }
      if (document.getElementById("service-service6")) {
        document.getElementById("service-service6").textContent =
          serviceData.Service6 || "";
      }
    }

    //console.log("Datos completos de la API:", data); // Log para ver la estructura completa
  } catch (error) {
    console.error("Error al obtener el contenido de Service:", error);
  }
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", fetchServiceContent);

//* -- FIN FUNCIÓN --> fetchServiceContent() (Obtener y mostrar los datos de Services) /////////////////////////////////////////////////////////////////////////////////////////////

//* ========================================================================================
//* (2) CARGAR CONTENIDO DE SERVICES PARA EDICIÓN
//* ========================================================================================

/**
 * loadContent
 * Carga el contenido de Service desde la API de Strapi y lo muestra en el editor.
 * - Solicita el contenido de Service para edición.
 * - Asigna los valores a los campos del formulario de edición.
 */

//* -- INICIO FUNCIÓN -- loadContent() (Cargar contenido de Services en el Editor) ///////////////////////////////////////////////////////////////////////////////////////////////
async function loadServiceContent() {
  try {
    const response = await fetch("https://www.geidyestrada.com/api/service");
    if (!response.ok) {
      throw new Error("Error al obtener el contenido: " + response.serviceus);
    }
    const data = await response.json();

    // console.log("Datos recibidos de la API:", data); // Log para verificar la estructura de los datos

    // Actualizar lógica para manejar la estructura recibida
    if (data && data.data) {
      const serviceData = data.data;

      // Verificar si los elementos existen antes de asignarles valores

      // Título Servicios
      if (document.getElementById("edit-titleservice")) {
        document.getElementById("edit-titleservice").value =
          serviceData.Title || "";
      }

      // Intro Servicios
      if (document.getElementById("edit-introservice")) {
        document.getElementById("edit-introservice").value =
          serviceData.Intro || "";
      }

      // Extranjeria
      if (document.getElementById("edit-titleservice1")) {
        document.getElementById("edit-titleservice1").value =
          serviceData.TitleService1 || "";
      }
      if (document.getElementById("edit-service1")) {
        document.getElementById("edit-service1").value =
          serviceData.Service1 || "";
      }

      // Familia
      if (document.getElementById("edit-titleservice2")) {
        document.getElementById("edit-titleservice2").value =
          serviceData.TitleService2 || "";
      }
      if (document.getElementById("edit-service2")) {
        document.getElementById("edit-service2").value =
          serviceData.Service2 || "";
      }

      // Civil
      if (document.getElementById("edit-titleservice3")) {
        document.getElementById("edit-titleservice3").value =
          serviceData.TitleService3 || "";
      }
      if (document.getElementById("edit-service3")) {
        document.getElementById("edit-service3").value =
          serviceData.Service3 || "";
      }

      // Laboral
      if (document.getElementById("edit-titleservice4")) {
        document.getElementById("edit-titleservice4").value =
          serviceData.TitleService4 || "";
      }
      if (document.getElementById("edit-service4")) {
        document.getElementById("edit-service4").value =
          serviceData.Service4 || "";
      }

      // Administrativo
      if (document.getElementById("edit-titleservice5")) {
        document.getElementById("edit-titleservice5").value =
          serviceData.TitleService5 || "";
      }
      if (document.getElementById("edit-service5")) {
        document.getElementById("edit-service5").value =
          serviceData.Service5 || "";
      }

      // Penal
      if (document.getElementById("edit-titleservice6")) {
        document.getElementById("edit-titleservice6").value =
          serviceData.TitleService6 || "";
      }
      if (document.getElementById("edit-service6")) {
        document.getElementById("edit-service6").value =
          serviceData.Service6 || "";
      }
    } else {
      console.error("Estructura de datos no esperada. Datos completos:", data);
      alert(
        "La estructura de los datos no es la esperada. Revisa la consola para más detalles."
      );
    }
  } catch (error) {
    console.error("Error al cargar el contenido:", error);
    alert("No se pudo cargar el contenido. Por favor, intenta de nuevo.");
  }
}
//* -- FIN FUNCIÓN --> loadContent() (Cargar contenido de SERVICES en el Editor) ////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==========================================================================================
//* (3) ACTUALIZAR EL CONTENIDO DE SERVICES EN LA BD de Strapi
//* ==========================================================================================

/**
 * updateContent
 * Actualiza el contenido del Sat en la API de Strapi.
 * - Envía una solicitud HTTP PUT con los nuevos datos.
 * - Requiere un token JWT almacenado en localStorage.
 */

//* -- INICIO FUNCIÓN --> updateServiceContent() (Función para actualizar los contenidos de SERVICES en la BD) ////////////////////////////////////////////////
async function updateServiceContent() {
  console.log("Se ha llamado a la función updateServiceContent"); // Verifica si la función se llama correctamente

  const token = localStorage.getItem("token");

  if (!token) {
    alert("No hay una sesión activa. Por favor, inicia sesión.");
    return;
  }

  // Obtener los valores de los campos del formulario

  // Título Servicios
  const newTitle = document.getElementById("edit-titleservice").value;

  // Intro Servicios
  const newIntro = document.getElementById("edit-introservice").value;

  // Extranjeria
  const newTitleService1 = document.getElementById("edit-titleservice1").value;
  const newService1 = document.getElementById("edit-service1").value;

  // Familia
  const newTitleService2 = document.getElementById("edit-titleservice2").value;
  const newService2 = document.getElementById("edit-service2").value;

  //Civil
  const newTitleService3 = document.getElementById("edit-titleservice3").value;
  const newService3 = document.getElementById("edit-service3").value;

  // Laboral
  const newTitleService4 = document.getElementById("edit-titleservice4").value;
  const newService4 = document.getElementById("edit-service4").value;

  // Administrativo
  const newTitleService5 = document.getElementById("edit-titleservice5").value;
  const newService5 = document.getElementById("edit-service5").value;

  // Penal
  const newTitleService6 = document.getElementById("edit-titleservice6").value;
  const newService6 = document.getElementById("edit-service6").value;

  const dataToSend = {
    data: {
      // Título
      Title: newTitle,

      // Intro
      Intro: newIntro,

      // Extranjeria
      TitleService1: newTitleService1,
      Service1: newService1,

      // Familia
      TitleService2: newTitleService2,
      Service2: newService2,

      // Civil
      TitleService3: newTitleService3,
      Service3: newService3,

      // Laboral
      TitleService4: newTitleService4,
      Service4: newService4,

      // Administrativo
      TitleService5: newTitleService5,
      Service5: newService5,

      // Penal
      TitleService6: newTitleService6,
      Service6: newService6,
    },
  };

  console.log("Datos a enviar:", JSON.stringify(dataToSend));

  try {
    // Usar la URL correcta para Single Type
    const response = await fetch("https://www.geidyestrada.com/api/service", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    });

    console.log("Respuesta del servidor:", response);

    if (response.ok) {
      alert("Contenido actualizado con éxito.");
      // Recargar la página para ver los cambios reflejados
      window.location.reload();
    } else {
      const errorData = await response.json();
      console.error("Error en la respuesta:", errorData);
      alert(
        `Error al actualizar el contenido: ${
          errorData.error.message || JSON.stringify(errorData.error)
        }`
      );
    }
  } catch (error) {
    console.error("Error al actualizar el contenido:", error);
    alert("No se pudo actualizar el contenido. Por favor, intenta de nuevo.");
  }
}
//* -- FIN DE FUNCIÓN --> updateServiceContent() (Función para actualizar los contenidos de SERVICES en la BD) ////////////////////////////////////////////////
