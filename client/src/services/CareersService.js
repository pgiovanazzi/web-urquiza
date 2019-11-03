const apiGetCareers = "/su/panel/carreras";
const apiNewCareer = "/su/panel/carrera/nueva";
const apiEditCareer = "/su/panel/carrera/editar/";
const apiRemoveCareer = "/su/panel/carrera/eliminar/";

class CareerService {
  static get() {
    return fetch(apiGetCareers, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static send(newCareer) {
    var formData = new FormData();

    for (var name in newCareer) {
      formData.append(name, newCareer[name]);
    }

    return fetch(apiNewCareer, {
      method: "POST",
      body: formData
    });
  }

  static edit(career, id) {
    return fetch(apiEditCareer + id, {
      method: "PUT",
      body: JSON.stringify(career),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static remove(id) {
    return fetch(apiRemoveCareer + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
}

export default CareerService;
