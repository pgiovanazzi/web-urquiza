const API_URL = "/su/panel/preguntas-frecuentes/";

class FQAsService {
  static get() {
    return fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static add(body) {
    return fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static partialUpdate(id, body) {
    return fetch(API_URL + id, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static destroy(id) {
    return fetch(API_URL + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
}

export default FQAsService;
