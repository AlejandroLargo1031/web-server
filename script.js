const servers = ["data1.json", "data2.json"];

async function fetchData() {
  try {
    // Selección aleatoria: cada acceso a la página elige un archivo al azar
    const randomIndex = Math.floor(Math.random() * servers.length);
    const url = servers[randomIndex] + '?t=' + new Date().getTime();  // Evitar caché
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById("output").innerText =
      `Mensaje: ${data.message} - Servidor: ${data.server} - Hora: ${data.timestamp}`;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    document.getElementById("output").innerText = "Error al cargar datos.";
  }
}

// Ejecuta fetchData una sola vez cuando se carga la página
fetchData();
