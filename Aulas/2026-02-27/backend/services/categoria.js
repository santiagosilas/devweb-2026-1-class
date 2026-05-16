const url = "http://localhost:3000";
export default class CategoriaService {
  categoria(parameters) {
    this.url = `${url}/api/categorias`;
  }
  get Url() {
    return this.url;
  }
  set Url(newUrl) {
    this.url = Url;
  }
  getAll() {
    const data = null;
    return data;
  }
}

const to = setInterval(() => {}, 1000);
