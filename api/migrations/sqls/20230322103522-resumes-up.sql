/*
about_me - О себе
skills - Навыки
pros - Сильные стороны
cons - Слабые стороны
*/

create table resumes (
    id serial primary key,
    about_me varchar(511) not null default '',
    skills varchar(255) not null default '',
    pros varchar(255) not null default '',
    cons varchar(255) not null default '',
    languages varchar(32) [],
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    user_id integer references users(id) on delete cascade
);