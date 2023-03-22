create table resume_categories (
    id serial primary key,
    category varchar(31) not null,
    resume_id integer not null references resumes(id) on delete cascade
);