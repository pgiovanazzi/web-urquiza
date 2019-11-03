const apiAspirants = "/su/panel/registros/aspirantes";

const AspirantsService = {
  get() {
    return fetch(apiAspirants, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "GET"
    });
  }
};

export default AspirantsService;
