/* ==========================================================
   SCRIPT – Datos del cliente y enlaces
   ========================================================== */

/* ---------- 1. DATOS DEL CLIENTE ---------- */
const CLIENT = {
  name:        "Abraham Mendoza (IBRA)",
  role:        "Diseñador Gráfico Profesional",
  bio:         "Mi experiencia, mis proyectos y mi visión profesional, reunidos en un solo lugar.",
  photo:       "assets/fotoperfil.jpeg",                // url de la foto
  whatsapp:    "50248371433",     // código de país + número, sin + ni espacios
  whatsappMsg: "Hola, vi tu página y quiero más información.",
  instagram:   "ibraart.gt",              // usuario, sin @
  facebook:    "abraham.mend"             // usuario o nombre de la página
};

/* ---------- 2. AYUDANTES ---------- */
const $ = (id) => document.getElementById(id);

function getInitials(name) {
  return name
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase() || "ND";
}

/* ---------- 3. TEXTOS ---------- */
$("name").textContent = CLIENT.name;
$("role").textContent = CLIENT.role;
$("bio").textContent  = CLIENT.bio;
document.title        = CLIENT.name;

/* ---------- 4. FOTO ---------- */
$("initials").textContent = getInitials(CLIENT.name);

if (CLIENT.photo) {
  const photo = $("photo");
  photo.src    = CLIENT.photo;
  photo.hidden = false;
  $("initials").hidden = true;
}

/* ---------- 5. ENLACES ---------- */
$("wa").href = "https://wa.me/" + CLIENT.whatsapp + "?text=" + encodeURIComponent(CLIENT.whatsappMsg);
$("ig").href = "https://instagram.com/" + CLIENT.instagram;
$("fb").href = "https://facebook.com/" + CLIENT.facebook;
