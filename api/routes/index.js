var router = require('express').Router();
const db = require('../config/db.config.js');
const helper = require('../helper/functions.js');

router.post('/add', function(req, res) {
  const data  = req.body;
  const unique_code = helper.createUniqueCode(data.original_url);
  const short_url = process.env.FRONTEND_BASE_URL+'/'+unique_code;
  const sql = "INSERT INTO tbl_urls (original_url, short_url, unique_code, creation_date, expiration_date) VALUES ('"+data.original_url+"', '"+short_url+"','"+unique_code+"',now(), DATE_ADD(now(), INTERVAL 30 DAY))";
  db.query(sql, function (error, result) {
        if (error){
              res.status(200).json(
                {
                  success: false,
                  message: 'sql error'
                }
              )
        }else{
              res.status(200).json({
                success: true, 
                original_url: data.original_url,
                short_url: short_url,
                unique_code: unique_code,
                message: "Short URL created successfully."
              });
        }      
  });
});

router.post('/add_traffic',function(req, res) {
        const shortUrlCode = req.body.unique_code;
        const ip = req.body.ip;
        const country_code = req.body.country_code;
        const country_name = req.body.country_name;
        const sql = "SELECT * FROM tbl_urls where unique_code='"+shortUrlCode+"' AND expiration_date >= CURDATE() ";

        db.query(sql, function (error, results, fields) {
              if (error) throw error;

              if(results.length > 0){
                  const sql = "INSERT INTO tbl_traffic (url_id, ip, country_code, country_name, visit_date) VALUES ('"+results[0].id+"', '"+ip+"','"+country_code+"','"+country_name+"', now())";
                  db.query(sql, function (error, result) {
                    if (error){
                          res.status(200).json(
                            {
                              success: false,
                              code: 200,
                              message: 'sql error-traffic'
                            }
                          )
                    }else{
                          res.status(200).json({
                            success: true, 
                            code: 200,
                            message: "Traffic created successfully.",
                            original_url: results[0].original_url
                          });
                    }      
                  });
              }
              else{
                  res.status(200).json({
                    success: false,
                    code: 404, 
                    message: "Error 404: URL Not Exist or expired."
                  });
              }
        });
});

router.post('/stats', function(req, res) {
  const data  = req.body;
  const ip = data.ip;
  const sql = "SELECT *, count(*) as totalClicks, GROUP_CONCAT(DISTINCT country_name SEPARATOR ', ') as top_countries FROM `tbl_traffic` as T, `tbl_urls` as U WHERE T.ip='"+ip+"'  AND T.url_id = U.id group by U.unique_code ORDER BY `U`.`unique_code` ASC";
  db.query(sql, function (error, result) {
        if (error){
              res.status(200).json(
                {
                  success: false,
                  message: 'sql error'
                }
              )
        }else{
              res.status(200).json({
                success: true, 
                data: result,
                message: "Analytics Data Listing fetched successfully."
              });
        }      
  });
});

module.exports = router;