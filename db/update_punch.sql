update punches
set date=$(date), day=$(day), time=$(time), punch_type=$(punch_type)
where id= $(id);


select * from punches
order by date asc, time asc
