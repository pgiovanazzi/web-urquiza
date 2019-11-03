const apiGetPages = "/su/panel/paginas";
const apiNewPage = "/su/panel/nueva-pagina";
const apiEditPage = "/su/panel/pagina/editar/";
const apiRemovePage = "/su/panel/pagina/eliminar/";

class PagesService {
  static get() {
    return fetch(apiGetPages, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static send(newPage) {
    return fetch(apiNewPage, {
      method: "POST",
      body: JSON.stringify(newPage),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
  }

  static edit(page, id) {
    return fetch(apiEditPage + id, {
      method: "PUT",
      body: JSON.stringify(page),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
  }

  static remove(id) {
    return fetch(apiRemovePage + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
  }
}

export default PagesService;
