/*
Secondary -  Среднее общее (11 класс)
Professional - Среднее профессиональное (колледж)
Bachelor - Бакалавр
Master - Магистр
*/

create type educational_stage as enum (
    'secondary',
    'professional',
    'bachelor',
    'master'
);

create table resume_education (
    id serial primary key,
    stage educational_stage not null,
    institute varchar(63) not null,
    faculty varchar(63) not null,
    speciality varchar(63) not null,
    graduation_year varchar(3) not null,
    resume_id integer not null references resumes(id) on delete cascade
);