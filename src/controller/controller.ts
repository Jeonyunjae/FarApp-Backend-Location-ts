const controllerPool = require('../db');

const getlocation = (req: any, res: any) => {
    console.log(4321);
  controllerPool.query("select * from location", (error: any, result: any) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = {
    getlocation,
}