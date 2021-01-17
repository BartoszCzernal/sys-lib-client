import HttpService from "./HttpService";

const BookService = {
  getAll: () => HttpService.get("books/"),
  get: (id: number) => HttpService.get(`books/${id}/`),
  post: (data: any) => HttpService.post("books/", data),
  put: (id: number, data: any) => HttpService.put(`books/${id}/`, data),
  deleteBook: (id: number) => HttpService.delete(`books/${id}/`),
  deleteAll: () => HttpService.delete("books"),
};

export default BookService;
