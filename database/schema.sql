create table TODO_ITEM
(
    IDENTIFICADOR      bigint generated by default as identity,
    VIGENTE            boolean      not null,
    FECHACREACIÓN      timestamp    not null,
    DESCRIPCIÓN        varchar(512) not null,
    FECHAACTUALIZACIÓN timestamp,
    primary key (IDENTIFICADOR)
)