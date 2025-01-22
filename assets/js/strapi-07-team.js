// Funciones para acceder a la API de Strapi, cargar el contenido y actualizarlo en la BD de Strapi.

//? ================================================================================================================================================================================
//? TEAM Section
//? ================================================================================================================================================================================

// <!-- Funciones para trabajar con el Team desde la API de Strapi-->
// URL de la API de Strapi
const apiURLTeam = "https://www.geidyestrada.com/api/team";

//? ================================================================================================
//? (1) OBTENER Y MOSTRAR DATOS DE TEAM EN LA PÁGINA PRINCIPAL
//? ================================================================================================

/**
 * fetchTeamContent
 * Obtiene el contenido de la seccion Team desde la API de Strapi y lo muestra en el sitio web.
 * - Realiza una solicitud HTTP GET a la API.
 * - Parsea la respuesta y actualiza el contenido de la seccion Team.
 * - Asigna valores a los elementos HTML correspondientes.
 */

//? -- INICIO FUNCIÓN --> fetchTeamContent() (Obtener y mostrar los datos de Team en la Página Principal) /////////////////////////////////////////////////////////////////////////////////////////////////
async function fetchTeamContent() {
  try {
    const response = await fetch(apiURLTeam + "?populate=*");
    const data = await response.json();

    // Verifica la estructura exacta de los datos
    console.log("Datos completos de Team FETCH:", data);

    if (data && data.data) {
      const TeamData = data.data;

      // Actualizar textos generales
      document.getElementById("team-title").textContent = TeamData.Title || "";
      document.getElementById("team-intro").textContent = TeamData.Intro || "";

      // Iterar sobre los miembros del equipo
      for (let i = 1; i <= 4; i++) {
        const teamName = TeamData[`Name_${i}`] || "";
        const teamJob = TeamData[`Job_${i}`] || "";
        const teamPic = TeamData.Pic_1[i - 1]; // Obtener la imagen correspondiente

        // Asignar texto
        document.getElementById(`team-name_${i}`).textContent = teamName;
        document.getElementById(`team-job_${i}`).textContent = teamJob;

        // Asignar imagen
        const imageElement = document.getElementById(`team-pic_${i}`);
        if (teamPic?.url && imageElement) {
          imageElement.src = `https://www.geidyestrada.com${teamPic.url}`;
          imageElement.alt = `Imagen del equipo ${i}`;
        } else if (imageElement) {
          imageElement.src = ""; // Si no hay imagen, limpiar el src
          imageElement.alt = "Sin imagen";
        }
      }
    } else {
      console.error("Estructura de datos no esperada en Team.");
    }
  } catch (error) {
    console.error("Error al obtener el contenido de Team:", error);
  }
}

// Llama a la función después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", fetchTeamContent);

//* Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", fetchTeamContent);
//? -- FIN DE FUNCIÓN --> fetchTeamContent() (Obtener y mostrar los datos del Team) /////////////////////////////////////////////////////////////////////////////////////////////////

//? ==========================================================================================
//? (2) CARGAR CONTENIDO DE TEAM PARA EDICIÓN EN EL EDITOR DE CONTENIDO
//? ==========================================================================================

/**
 * loadTeamContent
 * Carga el contenido de Team desde la API de Strapi y lo muestra en el editor.
 * - Solicita el contenido de Team para edición.
 * - Asigna los valores a los campos del formulario de edición.
 */

//? -- INICIO FUNCIÓN -- loadContent() (Cargar contenido del Team en el Editor) ////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cargar imágenes en el editor
async function loadTeamContent() {
  console.log("Iniciando carga del Team...");
  try {
    // Solicitar datos de la API de Strapi con `populate=*` para incluir imágenes
    const response = await fetch("https://www.geidyestrada.com/api/team?populate=*");
    if (!response.ok) {
      throw new Error(
        "Error al obtener el contenido de Equipos: " + response.status
      );
    }
    const data = await response.json();
    console.log("Datos del Team recibidos:", data); // Verificar datos recibidos

    if (data && data.data) {
      const TeamData = data.data;

      // Actualizar los campos de texto generales
      document.getElementById("edit-title-team").value = TeamData.Title || "";
      document.getElementById("edit-intro-team").value = TeamData.Intro || "";

      // Iterar sobre los cinco equipos
      for (let i = 1; i <= 4; i++) {
        // Actualizar los textos de cada equipo
        document.getElementById(`edit-name_${i}-team`).value =
          TeamData[`Name_${i}`] || "";
        document.getElementById(`edit-job_${i}-team`).value =
          TeamData[`Job_${i}`] || "";

        // Cargar imágenes de cada equipo
        const picArray = TeamData.Pic_1 || [];
        const container = document.getElementById(`Team_${i}_Selection`);

        if (!container) {
          console.error(
            `Contenedor #Team_${i}_Selection no encontrado en el DOM.`
          );
          continue;
        }

        container.innerHTML = ""; // Limpiar el contenido anterior

        if (picArray.length > 0) {
          picArray.forEach((pic) => {
            const imgElement = document.createElement("img");
            imgElement.src = `https://www.geidyestrada.com${pic.url}`;
            imgElement.alt = pic.name || `Imagen del equipo ${i}`;
            imgElement.classList.add("thumbnail");

            // Evento de selección
            imgElement.onclick = () => {
              document
                .querySelectorAll(`#Team_${i}_Selection .thumbnail`)
                .forEach((img) => img.classList.remove("selected"));
              imgElement.classList.add("selected");

              // Actualizar la imagen seleccionada
              window[`pic_${i}_ImageId`] = pic.id;
              console.log(`Imagen seleccionada para Equipo ${i}:`, pic.id);
            };

            container.appendChild(imgElement);
          });
        } else {
          console.log(`No hay imágenes disponibles para Equipo ${i}.`);
        }
      }
    } else {
      console.error("Estructura de datos no esperada. Datos completos:", data);
      alert(
        "La estructura de los datos no es la esperada. Revisa la consola para más detalles."
      );
    }
  } catch (error) {
    console.error("Error al cargar el contenido del Team:", error);
    alert("No se pudo cargar el contenido. Por favor, intenta de nuevo.");
  }
}

//* Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", loadTeamContent);

//? -- FIN DE FUNCIÓN -- loadTeamContent() (Cargar contenido del Team en el Editor) /////////////////////////////////////////////////////////////////////////////////////////////////////

//? ======================================================================================
//? FUNCION PARA SELECCIONAR IMAGEN DE TEAM EN EL EDITOR
//? ======================================================================================

async function fetchAndRenderTeamImages() {
  try {
    const response = await fetch("https://www.geidyestrada.com/api/team?populate=*");
    if (!response.ok) {
      throw new Error(`Error al obtener imágenes: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos completos para las imágenes:", data);

    const picArray = data.data.Pic_1 || [];
    const container = document.getElementById("Team_1_Selection");

    if (!container) {
      console.error("Contenedor #Team_1_Selection no encontrado en el DOM.");
      return;
    }

    container.innerHTML = ""; // Limpia el contenido anterior

    if (picArray.length > 0) {
      picArray.forEach((pic, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = `https://www.geidyestrada.com${pic.url}`;
        imgElement.alt = pic.name || `Imagen ${index + 1}`;
        imgElement.classList.add("thumbnail");

        // Evento de selección de imagen
        imgElement.onclick = () => {
          document
            .querySelectorAll(".thumbnail")
            .forEach((img) => img.classList.remove("selected"));
          imgElement.classList.add("selected");

          // Actualizar el ID de la imagen seleccionada
          selectedImageId = pic.id;

          console.log("Imagen seleccionada con ID:", selectedImageId);
        };

        container.appendChild(imgElement); // Agregar la imagen al contenedor
      });
    } else {
      console.log("No hay imágenes disponibles para mostrar.");
    }
  } catch (error) {
    console.error("Error al cargar las imágenes en el editor:", error);
  }
}

// Llama a la función al cargar el editor
document.addEventListener("DOMContentLoaded", fetchAndRenderTeamImages);

//? FIN DE FUNCION PARA SELECCIONAR IMAGEN DEL Team EN EDITOR //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? ==========================================================================================
//? (3) ACTUALIZAR EL CONTENIDO DEL TEAM EN LA BD de Strapi
//? ==========================================================================================

/**
/**
 * updateTeamContent
 * Actualiza el contenido del Team en la API de Strapi.
 * - Envía una solicitud HTTP PUT con los nuevos datos.
 * - Requiere un token JWT almacenado en localStorage.
 */

//? -- INICIO FUNCIÓN --> updateContent() (Función para cargar y mostrar la primera imagen de Team_1 en el Team) /////////////////////////////////////////////////////////////////
async function updateTeamContent() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("No estás autenticado. Por favor, inicia sesión.");
    return;
  }

  try {
    // Obtener datos del formulario
    const newTitle = document.getElementById("edit-title-team")?.value || "";
    const newIntro = document.getElementById("edit-intro-team")?.value || "";

    const teamsData = []; // Almacena datos de cada miembro del equipo
    const updatedImageIds = []; // Almacena imágenes seleccionadas

    // Obtener el contenido actual de la API
    const currentResponse = await fetch(
      "https://www.geidyestrada.com/api/team?populate=*"
    );
    const currentData = await currentResponse.json();

    if (!currentData.data) {
      throw new Error("No se pudo recuperar el contenido actual.");
    }

    const currentImageIds = currentData.data.Pic_1
      ? currentData.data.Pic_1.map((img) => img.id)
      : [];

    // Iterar sobre los equipos (4 miembros en este caso)
    for (let i = 1; i <= 4; i++) {
      const teamName =
        document.getElementById(`edit-name_${i}-team`)?.value || "";
      const teamJob =
        document.getElementById(`edit-job_${i}-team`)?.value || "";
      const selectedImageId = window[`pic_${i}_ImageId`];

      // Actualizar imagen seleccionada o mantener la actual
      if (selectedImageId && !updatedImageIds.includes(selectedImageId)) {
        updatedImageIds.push(selectedImageId);
      } else if (currentImageIds[i - 1]) {
        updatedImageIds.push(currentImageIds[i - 1]);
      }

      // Añadir datos del miembro al array
      teamsData.push({
        Name: teamName,
        Job: teamJob,
      });
    }

    // Mantener imágenes no eliminadas
    currentImageIds.forEach((imgId) => {
      if (!updatedImageIds.includes(imgId)) {
        updatedImageIds.push(imgId);
      }
    });

    // Crear payload
    const payload = {
      data: {
        Title: newTitle,
        Intro: newIntro,
        Pic_1: updatedImageIds.map((id) => ({ id })), // Enviar todas las imágenes
      },
    };

    // Añadir datos de cada equipo al payload
    teamsData.forEach((team, index) => {
      payload.data[`Name_${index + 1}`] = team.Name;
      payload.data[`Job_${index + 1}`] = team.Job;
    });

    // Realizar la solicitud PUT
    const response = await fetch("https://www.geidyestrada.com/api/team", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Contenido actualizado con éxito.");
      window.location.reload(); // Recargar la página para reflejar los cambios
    } else {
      const errorData = await response.json();
      console.error("Error al actualizar el contenido:", errorData);
      alert(
        "Error al actualizar el contenido. Revisa la consola para más detalles."
      );
    }
  } catch (error) {
    console.error("Error al actualizar el contenido del Team:", error);
    alert("No se pudo actualizar el contenido. Por favor, intenta de nuevo.");
  }
}

//? -- FIN DE FUNCIÓN --> updateContent() (Función para cargar y mostrar la primera imagen en el Team) /////////////////////////////////////////////////////////////////

//? FIN de Función para actualizar contenido del Team en la BD de Strapi
