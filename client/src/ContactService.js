const urlServer = "/mensaje/enviado"

class ContactService {
  static send(msg) {
    return fetch(urlServer, {
      method: "POST",
      body: JSON.stringify(msg),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
  }
}

export default ContactService