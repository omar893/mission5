let myData;

export default class MyDataDAO {
    static async injectDB(conn) {
        if (myData) {
            return
        }

        try {
            myData = await conn.db(process.env.MYDATA_NS).collection('sample_data');
        }

        catch(e) {
            console.error(
                `Unable to establish a collection handle in myDataDAO: ${e}`, 
            )
        }
    }

    static async getMyData({
        filters = null,
        page = 0,
        myDataPerPage = 5,
    } = {}) {
        let query
        if(filters) {
            if('name' in filters) {
                query = { $text: { $search: filters['name'] }}
            } else if ('cuisine' in filters) {
                query = {'cuisine': { $eq: filters['cuisine'] }}
            } else if ('zipcode' in filters) {
                query = {'address.zipcode': { $eq: filters['zipcode'] }}
            }
        }

        let cursor

        try {
            cursor = await myData
                .find(query);
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { myDataList: [], totalMyData: 0 }
        }

        const displayCursor = cursor.limit(myDataPerPage).skip(myDataPerPage * page);

        try {
            const myDataList = await displayCursor.toArray();
            const totalNumMyData = await myData.countDocuments(query);

            return { myDataList, totalNumMyData }
        } catch (e) {
            console.error(
                `Unable to conver cursor to array or problem counting documents, ${e}`
            );
            return { myDataList: [], totalNumMyData: 0}
        }
    }
}