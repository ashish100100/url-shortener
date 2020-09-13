CREATE TABLE `tbl_traffic` (
  `id` int(11) NOT NULL,
  `url_id` int(11) NOT NULL,
  `ip` varchar(20) NOT NULL,
  `country_code` varchar(10) NOT NULL,
  `country_name` varchar(60) NOT NULL,
  `visit_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tbl_urls` (
  `id` int(11) NOT NULL,
  `original_url` varchar(2048) NOT NULL,
  `short_url` varchar(125) NOT NULL,
  `unique_code` varchar(10) NOT NULL,
  `creation_date` datetime NOT NULL,
  `expiration_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `tbl_traffic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `url_id` (`url_id`);

ALTER TABLE `tbl_urls`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_code` (`unique_code`);

ALTER TABLE `tbl_traffic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

ALTER TABLE `tbl_urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=801;

ALTER TABLE `tbl_traffic`
  ADD CONSTRAINT `tbl_traffic_fk` FOREIGN KEY (`url_id`) REFERENCES `tbl_urls` (`id`) ON DELETE CASCADE;
COMMIT;
