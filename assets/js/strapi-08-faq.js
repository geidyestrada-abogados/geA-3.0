// Funciones para acceder a la API de Strapi, cargar el contenido y actualizarlo en la BD de Strapi.

//* ========================================================================================================================================================
//* FAQ Section
//* ========================================================================================================================================================

// <!-- Funciones para trabajar com el HERO desde la API de Strapi-->
// URL de la API de Strapi
const apiURLfaq = "https://automatic-cheese-6aca9a943b.strapiapp.com/api/faq";

//* =========================================================================================
//* (1) OBTENER Y MOSTRAR DATOS DE FAQ
//* =========================================================================================

// FUNCIÓN PARA: ////////////////////////////////////////////////// (1) OBTENER Y MOSTRAR DATOS DEL SERVICE ///////////////////////////////////////////////////////////////////////
/**
 * fetchHeroContent
 * Obtiene el contenido de la seccion Faq desde la API de Strapi y lo muestra en el sitio web.
 * - Realiza una solicitud HTTP GET a la API.
 * - Parsea la respuesta y actualiza el contenido de la seccion Faq.
 * - Asigna valores a los elementos HTML correspondientes.
 */

//* -- INICIO FUNCIÓN --> fetchFaqContent() (Obtener y mostrar los datos de Faqs) //////////////////////////////////////////////////////////////////////////
async function fetchFaqContent() {
  try {
    const response = await fetch(apiURLfaq);
    const data = await response.json();

    if (data && data.data) {
      const faqData = data.data;

      // Asigna los valores de texto a los elementos HTML correspondientes

      // Título Faq
      if (document.getElementById("faq-title")) {
        document.getElementById("faq-title").textContent = faqData.Title || "";
      }

      // Intro Faq
      if (document.getElementById("faq-intro")) {
        document.getElementById("faq-intro").textContent = faqData.Intro || "";
      }

      // Faq1
      if (document.getElementById("faq-titlefaq1")) {
        document.getElementById("faq-titlefaq1").textContent =
          faqData.TitleFaq1 || "";
      }
      if (document.getElementById("faq-faq1")) {
        document.getElementById("faq-faq1").textContent = faqData.Faq1 || "";
      }
      // Fa2
      if (document.getElementById("faq-titlefaq2")) {
        document.getElementById("faq-titlefaq2").textContent =
          faqData.TitleFaq2 || "";
      }
      if (document.getElementById("faq-faq2")) {
        document.getElementById("faq-faq2").textContent = faqData.Faq2 || "";
      }
      // Faq3
      if (document.getElementById("faq-titlefaq3")) {
        document.getElementById("faq-titlefaq3").textContent =
          faqData.TitleFaq3 || "";
      }
      if (document.getElementById("faq-faq3")) {
        document.getElementById("faq-faq3").textContent = faqData.Faq3 || "";
      }
      // Faq4
      if (document.getElementById("faq-titlefaq4")) {
        document.getElementById("faq-titlefaq4").textContent =
          faqData.TitleFaq4 || "";
      }
      if (document.getElementById("faq-faq4")) {
        document.getElementById("faq-faq4").textContent = faqData.Faq4 || "";
      }
      // Faq5
      if (document.getElementById("faq-titlefaq5")) {
        document.getElementById("faq-titlefaq5").textContent =
          faqData.TitleFaq5 || "";
      }
      if (document.getElementById("faq-faq5")) {
        document.getElementById("faq-faq5").textContent = faqData.Faq5 || "";
      }
      // Faq6
      if (document.getElementById("faq-titlefaq6")) {
        document.getElementById("faq-titlefaq6").textContent =
          faqData.TitleFaq6 || "";
      }
      if (document.getElementById("faq-faq6")) {
        document.getElementById("faq-faq6").textContent = faqData.Faq6 || "";
      }
      // Faq7
      if (document.getElementById("faq-titlefaq7")) {
        document.getElementById("faq-titlefaq7").textContent =
          faqData.TitleFaq7 || "";
      }
      if (document.getElementById("faq-faq7")) {
        document.getElementById("faq-faq7").textContent = faqData.Faq7 || "";
      }
      // Faq8
      if (document.getElementById("faq-titlefaq8")) {
        document.getElementById("faq-titlefaq8").textContent =
          faqData.TitleFaq8 || "";
      }
      if (document.getElementById("faq-faq8")) {
        document.getElementById("faq-faq8").textContent = faqData.Faq8 || "";
      }
      // Faq9
      if (document.getElementById("faq-titlefaq9")) {
        document.getElementById("faq-titlefaq9").textContent =
          faqData.TitleFaq9 || "";
      }
      if (document.getElementById("faq-faq9")) {
        document.getElementById("faq-faq9").textContent = faqData.Faq9 || "";
      }
      // Faq10
      if (document.getElementById("faq-titlefaq10")) {
        document.getElementById("faq-titlefaq10").textContent =
          faqData.TitleFaq10 || "";
      }
      if (document.getElementById("faq-faq10")) {
        document.getElementById("faq-faq10").textContent = faqData.Faq10 || "";
      }
      // Faq11
      if (document.getElementById("faq-titlefaq11")) {
        document.getElementById("faq-titlefaq11").textContent =
          faqData.TitleFaq11 || "";
      }
      if (document.getElementById("faq-faq11")) {
        document.getElementById("faq-faq11").textContent = faqData.Faq11 || "";
      }
      // Faq12
      if (document.getElementById("faq-titlefaq12")) {
        document.getElementById("faq-titlefaq12").textContent =
          faqData.TitleFaq12 || "";
      }
      if (document.getElementById("faq-faq12")) {
        document.getElementById("faq-faq12").textContent = faqData.Faq12 || "";
      }
      // Faq13
      if (document.getElementById("faq-titlefaq13")) {
        document.getElementById("faq-titlefaq13").textContent =
          faqData.TitleFaq13 || "";
      }
      if (document.getElementById("faq-faq13")) {
        document.getElementById("faq-faq13").textContent = faqData.Faq13 || "";
      }
      // Faq14
      if (document.getElementById("faq-titlefaq14")) {
        document.getElementById("faq-titlefaq14").textContent =
          faqData.TitleFaq14 || "";
      }
      if (document.getElementById("faq-faq14")) {
        document.getElementById("faq-faq14").textContent = faqData.Faq14 || "";
      }
      // Faq15
      if (document.getElementById("faq-titlefaq15")) {
        document.getElementById("faq-titlefaq15").textContent =
          faqData.TitleFaq15 || "";
      }
      if (document.getElementById("faq-faq15")) {
        document.getElementById("faq-faq15").textContent = faqData.Faq15 || "";
      }
    }

    //console.log("Datos completos de la API:", data); // Log para ver la estructura completa
  } catch (error) {
    console.error("Error al obtener el contenido de Faq:", error);
  }
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", fetchFaqContent);

//* -- FIN FUNCIÓN --> fetchFaqContent() (Obtener y mostrar los datos de Faqs) /////////////////////////////////////////////////////////////////////////////////////////////

//* ========================================================================================
//* (2) CARGAR CONTENIDO DE FAQ PARA EDICIÓN
//* ========================================================================================

/**
 * loadContent
 * Carga el contenido de Faq desde la API de Strapi y lo muestra en el editor.
 * - Solicita el contenido de Faq para edición.
 * - Asigna los valores a los campos del formulario de edición.
 */

//* -- INICIO FUNCIÓN -- loadContent() (Cargar contenido de Faqs en el Editor) ///////////////////////////////////////////////////////////////////////////////////////////////
async function loadFaqContent() {
  try {
    const response = await fetch("https://gea-strapi.up.railway.app/api/faq");
    if (!response.ok) {
      throw new Error("Error al obtener el contenido: " + response.faqus);
    }
    const data = await response.json();

    // console.log("Datos recibidos de la API:", data); // Log para verificar la estructura de los datos

    // Actualizar lógica para manejar la estructura recibida
    if (data && data.data) {
      const faqData = data.data;

      // Verificar si los elementos existen antes de asignarles valores

      // Título Faq
      if (document.getElementById("edit-titlefaq")) {
        document.getElementById("edit-titlefaq").value = faqData.Title || "";
      }

      // Intro Faq
      if (document.getElementById("edit-introfaq")) {
        document.getElementById("edit-introfaq").value = faqData.Intro || "";
      }

      // Faq1
      if (document.getElementById("edit-titlefaq1")) {
        document.getElementById("edit-titlefaq1").value =
          faqData.TitleFaq1 || "";
      }
      if (document.getElementById("edit-faq1")) {
        document.getElementById("edit-faq1").value = faqData.Faq1 || "";
      }

      // Fa2
      if (document.getElementById("edit-titlefaq2")) {
        document.getElementById("edit-titlefaq2").value =
          faqData.TitleFaq2 || "";
      }
      if (document.getElementById("edit-faq2")) {
        document.getElementById("edit-faq2").value = faqData.Faq2 || "";
      }

      // Faq3
      if (document.getElementById("edit-titlefaq3")) {
        document.getElementById("edit-titlefaq3").value =
          faqData.TitleFaq3 || "";
      }
      if (document.getElementById("edit-faq3")) {
        document.getElementById("edit-faq3").value = faqData.Faq3 || "";
      }

      // Faq4
      if (document.getElementById("edit-titlefaq4")) {
        document.getElementById("edit-titlefaq4").value =
          faqData.TitleFaq4 || "";
      }
      if (document.getElementById("edit-faq4")) {
        document.getElementById("edit-faq4").value = faqData.Faq4 || "";
      }

      // Faq5
      if (document.getElementById("edit-titlefaq5")) {
        document.getElementById("edit-titlefaq5").value =
          faqData.TitleFaq5 || "";
      }
      if (document.getElementById("edit-faq5")) {
        document.getElementById("edit-faq5").value = faqData.Faq5 || "";
      }

      // Faq6
      if (document.getElementById("edit-titlefaq6")) {
        document.getElementById("edit-titlefaq6").value =
          faqData.TitleFaq6 || "";
      }
      if (document.getElementById("edit-faq6")) {
        document.getElementById("edit-faq6").value = faqData.Faq6 || "";
      }

      // Faq7
      if (document.getElementById("edit-titlefaq7")) {
        document.getElementById("edit-titlefaq7").value =
          faqData.TitleFaq7 || "";
      }
      if (document.getElementById("edit-faq7")) {
        document.getElementById("edit-faq7").value = faqData.Faq7 || "";
      }

      // Faq8
      if (document.getElementById("edit-titlefaq8")) {
        document.getElementById("edit-titlefaq8").value =
          faqData.TitleFaq8 || "";
      }
      if (document.getElementById("edit-faq8")) {
        document.getElementById("edit-faq8").value = faqData.Faq8 || "";
      }

      // Faq9
      if (document.getElementById("edit-titlefaq9")) {
        document.getElementById("edit-titlefaq9").value =
          faqData.TitleFaq9 || "";
      }
      if (document.getElementById("edit-faq9")) {
        document.getElementById("edit-faq9").value = faqData.Faq9 || "";
      }

      // Faq10
      if (document.getElementById("edit-titlefaq10")) {
        document.getElementById("edit-titlefaq10").value =
          faqData.TitleFaq10 || "";
      }
      if (document.getElementById("edit-faq10")) {
        document.getElementById("edit-faq10").value = faqData.Faq10 || "";
      }

      // Faq11
      if (document.getElementById("edit-titlefaq11")) {
        document.getElementById("edit-titlefaq11").value =
          faqData.TitleFaq11 || "";
      }
      if (document.getElementById("edit-faq11")) {
        document.getElementById("edit-faq11").value = faqData.Faq11 || "";
      }

      // Faq12
      if (document.getElementById("edit-titlefaq12")) {
        document.getElementById("edit-titlefaq12").value =
          faqData.TitleFaq12 || "";
      }
      if (document.getElementById("edit-faq12")) {
        document.getElementById("edit-faq12").value = faqData.Faq12 || "";
      }

      // Faq13
      if (document.getElementById("edit-titlefaq13")) {
        document.getElementById("edit-titlefaq13").value =
          faqData.TitleFaq13 || "";
      }
      if (document.getElementById("edit-faq13")) {
        document.getElementById("edit-faq13").value = faqData.Faq13 || "";
      }

      // Faq14
      if (document.getElementById("edit-titlefaq14")) {
        document.getElementById("edit-titlefaq14").value =
          faqData.TitleFaq14 || "";
      }
      if (document.getElementById("edit-faq14")) {
        document.getElementById("edit-faq14").value = faqData.Faq14 || "";
      }

      // Faq15
      if (document.getElementById("edit-titlefaq15")) {
        document.getElementById("edit-titlefaq15").value =
          faqData.TitleFaq15 || "";
      }
      if (document.getElementById("edit-faq15")) {
        document.getElementById("edit-faq15").value = faqData.Faq15 || "";
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
//* -- FIN FUNCIÓN --> loadContent() (Cargar contenido de FAQ en el Editor) ////////////////////////////////////////////////////////////////////////////////////////////////////

//* ==========================================================================================
//* (3) ACTUALIZAR EL CONTENIDO DE FAQ EN LA BD de Strapi
//* ==========================================================================================

/**
 * updateContent
 * Actualiza el contenido del Sat en la API de Strapi.
 * - Envía una solicitud HTTP PUT con los nuevos datos.
 * - Requiere un token JWT almacenado en localStorage.
 */

//* -- INICIO FUNCIÓN --> updateFaqContent() (Función para actualizar los contenidos de FAQ en la BD) ////////////////////////////////////////////////
async function updateFaqContent() {
  console.log("Se ha llamado a la función updateFaqContent"); // Verifica si la función se llama correctamente

  const token = localStorage.getItem("token");

  if (!token) {
    alert("No hay una sesión activa. Por favor, inicia sesión.");
    return;
  }

  // Obtener los valores de los campos del formulario

  // Título Faq
  const newTitle = document.getElementById("edit-titlefaq").value;

  // Intro Faq
  const newIntro = document.getElementById("edit-introfaq").value;

  // Faq1
  const newTitleFaq1 = document.getElementById("edit-titlefaq1").value;
  const newFaq1 = document.getElementById("edit-faq1").value;

  // Faq2
  const newTitleFaq2 = document.getElementById("edit-titlefaq2").value;
  const newFaq2 = document.getElementById("edit-faq2").value;

  // Faq3
  const newTitleFaq3 = document.getElementById("edit-titlefaq3").value;
  const newFaq3 = document.getElementById("edit-faq3").value;

  // Faq4
  const newTitleFaq4 = document.getElementById("edit-titlefaq4").value;
  const newFaq4 = document.getElementById("edit-faq4").value;

  // Faq5
  const newTitleFaq5 = document.getElementById("edit-titlefaq5").value;
  const newFaq5 = document.getElementById("edit-faq5").value;

  // Faq6
  const newTitleFaq6 = document.getElementById("edit-titlefaq6").value;
  const newFaq6 = document.getElementById("edit-faq6").value;

  // Faq7
  const newTitleFaq7 = document.getElementById("edit-titlefaq7").value;
  const newFaq7 = document.getElementById("edit-faq6").value;

  // Faq8
  const newTitleFaq8 = document.getElementById("edit-titlefaq8").value;
  const newFaq8 = document.getElementById("edit-faq8").value;

  // Faq9
  const newTitleFaq9 = document.getElementById("edit-titlefaq9").value;
  const newFaq9 = document.getElementById("edit-faq9").value;

  // Faq10
  const newTitleFaq10 = document.getElementById("edit-titlefaq10").value;
  const newFaq10 = document.getElementById("edit-faq10").value;

  // Faq11
  const newTitleFaq11 = document.getElementById("edit-titlefaq11").value;
  const newFaq11 = document.getElementById("edit-faq11").value;

  // Faq12
  const newTitleFaq12 = document.getElementById("edit-titlefaq12").value;
  const newFaq12 = document.getElementById("edit-faq12").value;

  // Faq13
  const newTitleFaq13 = document.getElementById("edit-titlefaq13").value;
  const newFaq13 = document.getElementById("edit-faq13").value;

  // Faq14
  const newTitleFaq14 = document.getElementById("edit-titlefaq14").value;
  const newFaq14 = document.getElementById("edit-faq14").value;

  // Faq15
  const newTitleFaq15 = document.getElementById("edit-titlefaq15").value;
  const newFaq15 = document.getElementById("edit-faq15").value;

  const dataToSend = {
    data: {
      // Título
      Title: newTitle,

      // Intro
      Intro: newIntro,

      // Faq1
      TitleFaq1: newTitleFaq1,
      Faq1: newFaq1,

      // Faq2
      TitleFaq2: newTitleFaq2,
      Faq2: newFaq2,

      // Faq3
      TitleFaq3: newTitleFaq3,
      Faq3: newFaq3,

      // Faq4
      TitleFaq4: newTitleFaq4,
      Faq4: newFaq4,

      // Faq5
      TitleFaq5: newTitleFaq5,
      Faq5: newFaq5,

      // Faq6
      TitleFaq6: newTitleFaq6,
      Faq6: newFaq6,

      // Faq7
      TitleFaq7: newTitleFaq7,
      Faq7: newFaq7,

      // Faq8
      TitleFaq8: newTitleFaq8,
      Faq8: newFaq8,

      // Faq9
      TitleFaq9: newTitleFaq9,
      Faq9: newFaq9,

      // Faq10
      TitleFaq10: newTitleFaq10,
      Faq10: newFaq10,

      // Faq11
      TitleFaq11: newTitleFaq11,
      Faq11: newFaq11,

      // Faq12
      TitleFaq12: newTitleFaq12,
      Faq12: newFaq12,

      // Faq13
      TitleFaq13: newTitleFaq13,
      Faq13: newFaq13,

      // Faq14
      TitleFaq14: newTitleFaq14,
      Faq14: newFaq14,

      // Faq15
      TitleFaq15: newTitleFaq15,
      Faq15: newFaq15,
    },
  };

  console.log("Datos a enviar:", JSON.stringify(dataToSend));

  try {
    // Usar la URL correcta para Single Type
    const response = await fetch("https://gea-strapi.up.railway.app/api/faq", {
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
//* -- FIN DE FUNCIÓN --> updateFaqContent() (Función para actualizar los contenidos de FAQ en la BD) ////////////////////////////////////////////////

