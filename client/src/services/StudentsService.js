const apiGetStudents = "/su/panel/alumnos";
const apiAddStudent = "/su/panel/nuevo-alumno";
const apiEditStudent = "/su/panel/alumnos/modificar/";
const apiDeleteStudent = "/su/panel/alumnos/eliminar/";

class StudentsService {
  static get() {
    return fetch(apiGetStudents, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static add(body) {
    return fetch(apiAddStudent, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static update(id, body) {
    return fetch(apiEditStudent + id, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  static delete(id) {
    return fetch(apiDeleteStudent + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
}

export default StudentsService;
