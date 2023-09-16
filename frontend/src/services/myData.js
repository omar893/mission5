import http from "../http-common";

class MyDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }
}

export default new MyDataService();