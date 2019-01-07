insert into punches(date, day, time, punch_type)
values ($(date), $(day), $(time), $(punch_type));

select * from punches