title notes spa

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
El browser carga spa.js
y al cargar ejecuta solicitud
para obtener JSON
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: [{ content: "35505 is cursed", date: "2021-04-19" }, ...]

note over browser:
Se ejecuta el evento para
rendelizar las notas con la que
se acaba de ingresar
end note