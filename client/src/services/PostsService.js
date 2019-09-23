const apiNewPost = "/su/panel/nueva-publicacion"
const apiEditPost = "/su/panel/publicaciones/editar/"
const apiRemovePost = "/su/panel/publicaciones/eliminar/"

class PostsService {
  static send(newPost) {
    return fetch(apiNewPost, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
  }

  static edit(post, id) {
    return fetch(apiEditPost + id, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
  }

  static remove(id) {
    return fetch(apiRemovePost + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
  }
}

export default PostsService