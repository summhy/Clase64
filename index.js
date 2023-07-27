
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    // TODO: usuario y contraseña
    user: "ad-jscript-0002@hotmail.com",
    pass: "bootcamp..",
  },
});

// async..await para recuperar los datos y enviar el correo
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();

  let cuerpo =
    "<html>" +
    "<body style='background:#eee;'>" +
    "<headerer><h1>Bienvenidos</h1></headerer>" +
    "<table>" +
    "<tr style='background:lightblue'><td>Nombre</td><td>email</td></tr>";
  json.forEach((element) => {
    cuerpo += "<tr>"
            + "<td>" + element.name + "</td>"
            + "<td>" + element.email + "</td>"
            + "</tr>";
  });

  cuerpo += "</table>" + "</html>";

  // envío del corroe
  const info = await transporter.sendMail({
    from: '"Bootcamp" <ad-jscript-0002@hotmail.com>', // remitente
    to: "ad-jscript-0002@hotmail.com, ad-jscript-0002@hotmail.com", // Para
    subject: "Listado de Usuarios", // Asunto
    text: "https://jsonplaceholder.typicode.com/users", // Texto plano body
    html: cuerpo, // html body
  });

}

main().catch(console.error);
