## Notes diagram

title notes

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser ejecuta el js-code
Se hace la peticion y se recibe
JSON con las notas
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "35505 is cursed", date: "2019-05-23" }, ...]

note over browser:
Se ejecuta el evento para
rendelizar las notas con la que
se acaba de ingresar
end note