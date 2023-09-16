import MyDataDAO from "../dao/myDataDAO.js"

export default class MyDataController {
    static async apiGetMyData(req, res, next) {
        const myDataPerPage = req.query.myDataPerPage ? parseInt(req.query.myDataPerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;

        let filters = {}
        if(req.query.cuisine) {
            filters.cuisine = req.query.cuisine;
        } else if (req.query.zipcode) {
            filters.zipcode = req.query.zipcode;
        } else if (req.query.name) {
            filters.name = req.query.name;
        }

        const { myDataList, totalNumMyData } = await MyDataDAO.getMyData({
            filters,
            page,
            myDataPerPage,
        })

        let response = {
            myData: myDataList,
            page: page,
            filters: filters,
            entries_per_page: myDataPerPage,
            total_results: totalNumMyData,
        }

        res.json(response);
    }
}
