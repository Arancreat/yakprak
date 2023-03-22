create type user_roles as enum (
    'trainee',
    'company'
);

create type gender_enum as enum (
    'unknown',
    'male',
    'female'
);

create table users (
    id serial primary key,
    first_name varchar(31) not null default '',
    last_name varchar(31) not null default '',
    patronymic varchar(31) not null default '',
    gender gender_enum not null default 'unknown',
    birthdate timestamp,
    country varchar(31) not null default '',
    region varchar(31) not null default '',
    city varchar(31) not null default '',
    email varchar(255) not null unique,
    email_activation_link varchar(255),
    email_code varchar(255),
    email_is_activated boolean not null default false,
    hashed_password varchar(255) not null,
    phone varchar(15) not null default '',
    phone_is_verified boolean not null default false,
    user_role user_roles not null default 'trainee',
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);