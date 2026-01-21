// Funciones para acceder a la API de Strapi, cargar el contenido y actualizarlo en la BD de Strapi.

//? ================================================================================================================================================================================
//? TESTIMONIAL Section
//? ================================================================================================================================================================================

// <!-- Funciones para trabajar con el Testimonial desde la API de Strapi-->
// URL de la API de Strapi
const apiURLTestimonial = "https://automatic-cheese-6aca9a943b.strapiapp.com/api/Testimonial";

//? ================================================================================================
//? (1) OBTENER Y MOSTRAR DATOS DE TESTIMONIAL EN LA PÁGINA PRINCIPAL
//? ================================================================================================

/**
 * fetchTestimonialContent
 * Obtiene el contenido de la seccion Testimonial desde la API de Strapi y lo muestra en el sitio web.
 * - Realiza una solicitud HTTP GET a la API.
 * - Parsea la respuesta y actualiza el contenido de la seccion Testimonial.
 * - Asigna valores a los elementos HTML correspondientes.
 */

//? -- INICIO FUNCIÓN --> fetchTestimonialContent() (Obtener y mostrar los datos de Testimonial en la Página Principal) /////////////////////////////////////////////////////////////////////////////////////////////////
async function fetchTestimonialContent() {
  try {
    const response = await fetch(apiURLTestimonial + "?populate=*");
    const data = await response.json();

    // Verifica la estructura exacta de los datos
    console.log("Datos completos de Testimonial FETCH:", data);

    if (data && data.data) {
      const TestimonialData = data.data;

      // Asegúrate de que los `id` en HTML coincidan
      document.getElementById("testimonial-title").textContent =
        TestimonialData.Title || "";
      document.getElementById("testimonial-intro").textContent =
        TestimonialData.Intro || "";
      // Testimonial_1:
      document.getElementById("testimonial-testimonial_1").textContent =
        TestimonialData.Testimonial_1 || "";
      document.getElementById("testimonial-name_1").textContent =
        TestimonialData.Name_1 || "";
      document.getElementById("testimonial-job_1").textContent =
        TestimonialData.Job_1 || "";
      // Testimonial_2:
      document.getElementById("testimonial-testimonial_2").textContent =
        TestimonialData.Testimonial_2 || "";
      document.getElementById("testimonial-name_2").textContent =
        TestimonialData.Name_2 || "";
      document.getElementById("testimonial-job_2").textContent =
        TestimonialData.Job_2 || "";
      // Testimonial_3:
      document.getElementById("testimonial-testimonial_3").textContent =
        TestimonialData.Testimonial_3 || "";
      document.getElementById("testimonial-name_3").textContent =
        TestimonialData.Name_3 || "";
      document.getElementById("testimonial-job_3").textContent =
        TestimonialData.Job_3 || "";
      // Testimonial_4:
      document.getElementById("testimonial-testimonial_4").textContent =
        TestimonialData.Testimonial_4 || "";
      document.getElementById("testimonial-name_4").textContent =
        TestimonialData.Name_4 || "";
      document.getElementById("testimonial-job_4").textContent =
        TestimonialData.Job_4 || "";
      // Testimonial_5:
      document.getElementById("testimonial-testimonial_5").textContent =
        TestimonialData.Testimonial_5 || "";
      document.getElementById("testimonial-name_5").textContent =
        TestimonialData.Name_5 || "";
      document.getElementById("testimonial-job_5").textContent =
        TestimonialData.Job_5 || "";

      // Asignar textos y nombres a cada testimonio
      const testimonials = [
        {
          text: TestimonialData.Testimonial_1,
          name: TestimonialData.Name_1,
          job: TestimonialData.Job_1,
        },
        {
          text: TestimonialData.Testimonial_2,
          name: TestimonialData.Name_2,
          job: TestimonialData.Job_2,
        },
        {
          text: TestimonialData.Testimonial_3,
          name: TestimonialData.Name_3,
          job: TestimonialData.Job_3,
        },
        {
          text: TestimonialData.Testimonial_4,
          name: TestimonialData.Name_4,
          job: TestimonialData.Job_4,
        },
        {
          text: TestimonialData.Testimonial_5,
          name: TestimonialData.Name_5,
          job: TestimonialData.Job_5,
        },
      ];

      testimonials.forEach((testimonial, index) => {
        document.getElementById(
          `testimonial-testimonial_${index + 1}`
        ).textContent = testimonial.text || "";
        document.getElementById(`testimonial-name_${index + 1}`).textContent =
          testimonial.name || "";
        document.getElementById(`testimonial-job_${index + 1}`).textContent =
          testimonial.job || "";
      });

      // Asignar imágenes a cada testimonio
      const picArray = TestimonialData.Pic_1 || [];
      picArray.forEach((pic, index) => {
        const imageElement = document.getElementById(
          `testimonial-pic_${index + 1}`
        );
        if (imageElement && pic?.url) {
          imageElement.src = `https://automatic-cheese-6aca9a943b.strapiapp.com${pic.url}`;
          imageElement.alt = `Imagen del testimonio ${index + 1}`;
        }
      });
    } else {
      console.error("Estructura de datos no esperada en Testimonial.");
    }
  } catch (error) {
    console.error("Error al obtener el contenido de Testimonial:", error);
  }
}

//* Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", fetchTestimonialContent);
//? -- FIN DE FUNCIÓN --> fetchTestimonialContent() (Obtener y mostrar los datos del Testimonial) /////////////////////////////////////////////////////////////////////////////////////////////////

//? ==========================================================================================
//? (2) CARGAR CONTENIDO DE TESTIMONIAL PARA EDICIÓN EN EL EDITOR DE CONTENIDO
//? ==========================================================================================

/**
 * loadTestimonialContent
 * Carga el contenido de Testimonial desde la API de Strapi y lo muestra en el editor.
 * - Solicita el contenido de Testimonial para edición.
 * - Asigna los valores a los campos del formulario de edición.
 */

//? -- INICIO FUNCIÓN -- loadContent() (Cargar contenido del Testimonial en el Editor) ////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cargar imágenes en el editor
async function loadTestimonialContent() {
  console.log("Iniciando carga del Testimonial...");
  try {
    // Solicitar datos de la API de Strapi con `populate=*` para incluir imágenes
    const response = await fetch(
      "https://automatic-cheese-6aca9a943b.strapiapp.com/api/testimonial?populate=*"
    );
    if (!response.ok) {
      throw new Error(
        "Error al obtener el contenido de Testimonios: " + response.status
      );
    }
    const data = await response.json();
    console.log("Datos del Testimonial recibidos:", data); // Verificar datos recibidos

    if (data && data.data) {
      const TestimonialData = data.data;

      // Actualizar los campos de texto generales
      document.getElementById("edit-title-testimonial").value =
        TestimonialData.Title || "";
      document.getElementById("edit-intro-testimonial").value =
        TestimonialData.Intro || "";

      // Iterar sobre los cinco testimonios
      for (let i = 1; i <= 5; i++) {
        // Actualizar los textos de cada testimonio
        document.getElementById(`edit-testimonial_${i}`).value =
          TestimonialData[`Testimonial_${i}`] || "";
        document.getElementById(`edit-name_${i}`).value =
          TestimonialData[`Name_${i}`] || "";
        document.getElementById(`edit-job_${i}`).value =
          TestimonialData[`Job_${i}`] || "";

        // Cargar imágenes de cada testimonio
        const picArray = TestimonialData.Pic_1 || [];
        const container = document.getElementById(`Testimonial_${i}_Selection`);

        if (!container) {
          console.error(
            `Contenedor #Testimonial_${i}_Selection no encontrado en el DOM.`
          );
          continue;
        }

        container.innerHTML = ""; // Limpiar el contenido anterior

        if (picArray.length > 0) {
          picArray.forEach((pic) => {
            const imgElement = document.createElement("img");
            imgElement.src = `https://automatic-cheese-6aca9a943b.strapiapp.com${pic.url}`;
            imgElement.alt = pic.name || `Imagen del testimonio ${i}`;
            imgElement.classList.add("thumbnail");

            // Evento de selección
            imgElement.onclick = () => {
              document
                .querySelectorAll(`#Testimonial_${i}_Selection .thumbnail`)
                .forEach((img) => img.classList.remove("selected"));
              imgElement.classList.add("selected");

              // Actualizar la imagen seleccionada
              window[`pic_${i}_ImageId`] = pic.id;
              console.log(`Imagen seleccionada para Testimonio ${i}:`, pic.id);
            };

            container.appendChild(imgElement);
          });
        } else {
          console.log(`No hay imágenes disponibles para Testimonio ${i}.`);
        }
      }
    } else {
      console.error("Estructura de datos no esperada. Datos completos:", data);
      alert(
        "La estructura de los datos no es la esperada. Revisa la consola para más detalles."
      );
    }
  } catch (error) {
    console.error("Error al cargar el contenido del Testimonial:", error);
    alert("No se pudo cargar el contenido. Por favor, intenta de nuevo.");
  }
}

//* Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", loadTestimonialContent);

//? -- FIN DE FUNCIÓN -- loadTestimonialContent() (Cargar contenido del Testimonial en el Editor) /////////////////////////////////////////////////////////////////////////////////////////////////////

//? ======================================================================================
//? FUNCION PARA SELECCIONAR IMAGEN DE TESTIMONIAL EN EL EDITOR
//? ======================================================================================

async function fetchAndRenderTestimonialImages() {
  try {
    const response = await fetch(
      "https://automatic-cheese-6aca9a943b.strapiapp.com/api/testimonial?populate=*"
    );
    if (!response.ok) {
      throw new Error(`Error al obtener imágenes: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos completos para las imágenes:", data);

    const picArray = data.data.Pic_1 || [];
    const container = document.getElementById("Testimonial_1_Selection");

    if (!container) {
      console.error(
        "Contenedor #Testimonial_1_Selection no encontrado en el DOM."
      );
      return;
    }

    container.innerHTML = ""; // Limpia el contenido anterior

    if (picArray.length > 0) {
      picArray.forEach((pic, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = `https://automatic-cheese-6aca9a943b.strapiapp.com${pic.url}`;
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
document.addEventListener("DOMContentLoaded", fetchAndRenderTestimonialImages);

//? FIN DE FUNCION PARA SELECCIONAR IMAGEN DEL Testimonial EN EDITOR //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? ==========================================================================================
//? (3) ACTUALIZAR EL CONTENIDO DEL TESTIMONIAL EN LA BD de Strapi
//? ==========================================================================================

/**
/**
 * updateTestimonialContent
 * Actualiza el contenido del Testimonial en la API de Strapi.
 * - Envía una solicitud HTTP PUT con los nuevos datos.
 * - Requiere un token JWT almacenado en localStorage.
 */

//? -- INICIO FUNCIÓN --> updateContent() (Función para cargar y mostrar la primera imagen de Testimonial_1 en el Testimonial) /////////////////////////////////////////////////////////////////
async function updateTestimonialContent() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("No estás autenticado. Por favor, inicia sesión.");
    return;
  }

  const newTitle = document.getElementById("edit-title-testimonial").value;
  const newIntro = document.getElementById("edit-intro-testimonial").value;

  const testimonialsData = [];
  const updatedImageIds = []; // Almacena los IDs seleccionados o existentes

  try {
    // Obtener contenido actual de la API
    const currentResponse = await fetch(
      "https://automatic-cheese-6aca9a943b.strapiapp.com/api/testimonial?populate=*"
    );
    const currentData = await currentResponse.json();

    if (!currentData.data || !currentData.data.Pic_1) {
      throw new Error("No se pudieron recuperar las imágenes actuales.");
    }

    const currentImageIds = currentData.data.Pic_1.map((img) => ({
      id: img.id,
    }));

    // Iterar a través de los 5 testimonios
    for (let i = 1; i <= 5; i++) {
      const testimonialText = document.getElementById(
        `edit-testimonial_${i}`
      ).value;
      const testimonialName = document.getElementById(`edit-name_${i}`).value;
      const testimonialJob = document.getElementById(`edit-job_${i}`).value;

      // Validar si hay una imagen seleccionada
      const selectedImageId = window[`pic_${i}_ImageId`];

      if (selectedImageId) {
        // Añadir la nueva imagen seleccionada
        if (!updatedImageIds.some((img) => img.id === selectedImageId)) {
          updatedImageIds.push({ id: selectedImageId });
        }
      } else if (currentImageIds[i - 1]) {
        // Mantener la imagen actual si no se seleccionó otra
        updatedImageIds.push(currentImageIds[i - 1]);
      }

      testimonialsData.push({
        Testimonial: testimonialText,
        Name: testimonialName,
        Job: testimonialJob,
      });
    }

    // Asegurar que todas las imágenes actuales se mantengan si no se han eliminado
    currentImageIds.forEach((img) => {
      if (!updatedImageIds.some((updatedImg) => updatedImg.id === img.id)) {
        updatedImageIds.push(img);
      }
    });

    // Crear payload para enviar a Strapi
    const payload = {
      data: {
        Title: newTitle,
        Intro: newIntro,
        Pic_1: updatedImageIds, // Enviar el arreglo completo de imágenes
      },
    };

    // Añadir los datos de cada testimonio al payload
    testimonialsData.forEach((testimonial, index) => {
      payload.data[`Testimonial_${index + 1}`] = testimonial.Testimonial;
      payload.data[`Name_${index + 1}`] = testimonial.Name;
      payload.data[`Job_${index + 1}`] = testimonial.Job;
    });

    // Realizar la solicitud PUT
    const response = await fetch("https://automatic-cheese-6aca9a943b.strapiapp.com/api/testimonial", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Contenido actualizado con éxito.");
      window.location.reload(); // Recargar la página después de guardar cambios
    } else {
      const errorData = await response.json();
      console.error("Error al actualizar el contenido:", errorData);
      alert(
        "Error al actualizar el contenido. Revisa la consola para más detalles."
      );
    }
  } catch (error) {
    console.error("Error al actualizar el contenido del Testimonial:", error);
    alert("No se pudo actualizar el contenido. Por favor, intenta de nuevo.");
  }
}
//? -- FIN DE FUNCIÓN --> updateContent() (Función para cargar y mostrar la primera imagen en el Testimonial) /////////////////////////////////////////////////////////////////

//? FIN de Función para actualizar contenido del Testimonial en la BD de Strapi


