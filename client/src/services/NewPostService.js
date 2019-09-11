const urlServerNewPost = "/su/panel/nueva-publicacion"
const urlServerRemovePost = "/su/panel/publicaciones/eliminar/"

class NewPostService {
   static send(newPost) {
      return fetch(urlServerNewPost, {
         method: "POST",
         body: JSON.stringify(newPost),
         headers: {
           Accept: "application/json",
           "Content-type": "application/json"
         }
       })
   }

   static remove(id) {
      return fetch(urlServerRemovePost + id, {
         method: "DELETE",
         headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          }
      })
   }
}

export default NewPostService