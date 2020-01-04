const apiInstituteInfoService = "/su/panel/instituto-datos/";

const InstituteInfoService = {
  get() {
    return fetch(apiInstituteInfoService, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  },

  partialUpdate(id, body) {
    return fetch(apiInstituteInfoService + id, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
};

export default InstituteInfoService;
