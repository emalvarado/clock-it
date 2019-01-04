create table punches(
id serial primary key,
date date,
day text,
time time,
punch_type text
)

insert into punches(date, day, time, punch_type)
values ('2019-01-01', 'Tuesday', '16:05', 'IN'),
('1/2/2019', 'Wednesday', '4:05', 'OUT'),
('12/31/18', 'Monday', '9:36', 'IN'),
('12/31/18', 'Monday', '5:38', 'OUT');


select * from punches