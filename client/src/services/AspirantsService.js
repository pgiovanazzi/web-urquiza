const apiAspirants = "/su/panel/registros/aspirantes";
const apiUpdateAspirant = "/su/panel/aspirante/actualizar/";
const apiDeleteAspirant = "/su/panel/aspirante/elimiar/";

const AspirantsService = {
  get() {
    return fetch(apiAspirants, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET"
    });
  },

  update(body, id) {
    return fetch(apiUpdateAspirant + id, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
  },

  delete(id) {
    return fetch(apiDeleteAspirant + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
  }
};

export default AspirantsService;
