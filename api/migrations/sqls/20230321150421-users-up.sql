create type user_types as enum (
    'trainee',
    'company'
);

create table users(
    id serial primary key,
    nick varchar(31) not null default '',
    email varchar(255) not null unique,
    email_activation_link varchar(255),
    email_code varchar(255),
    email_is_activated boolean not null default false,
    hashed_password varchar(255) not null,
    phone varchar(15) not null default '',
    phone_is_verified boolean not null default false,
    user_type user_types not null default 'trainee',
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);