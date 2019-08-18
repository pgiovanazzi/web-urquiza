const urlServer = "/aspirante/preinscripcion/aspirante-registrado"

class PrescriptionService {
   static send(formObj) {
      return fetch(urlServer, {
         method: "POST",
         body: JSON.stringify(formObj),
         headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          }
      })
   }
}

export default PrescriptionService