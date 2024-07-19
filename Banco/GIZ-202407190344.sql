-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	nome varchar(255) NULL,
	email varchar(255) NULL,
	senha varchar(255) NULL,
	instituicao varchar(255) NULL,
	cidade varchar(255) NULL,
	tipoparceiro varchar(255) NULL,
	estrategiagip varchar(255) NULL,
	sexo varchar(255) NULL,
	avatar varchar(255) NULL,
	status varchar(255) NULL,
	CONSTRAINT usuarios_pkey PRIMARY KEY (id)
);


-- public.contatos definition

-- Drop table

-- DROP TABLE public.contatos;

CREATE TABLE public.contatos (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	nome varchar(255) NULL,
	foto varchar(255) NULL,
	telefone varchar(255) NULL,
	celular varchar(255) NULL,
	email varchar(255) NULL,
	status varchar(255) NULL,
	quemcriou int4 NULL,
	CONSTRAINT contatos_pkey PRIMARY KEY (id),
	CONSTRAINT contatos_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id)
);


-- public.documentos definition

-- Drop table

-- DROP TABLE public.documentos;

CREATE TABLE public.documentos (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	titulo varchar(255) NULL,
	descricao text NULL,
	url text NULL,
	downloads varchar(255) NULL,
	status varchar(255) NULL,
	quemcriou int4 NULL,
	CONSTRAINT documentos_pkey PRIMARY KEY (id),
	CONSTRAINT documentos_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id)
);


-- public.noticias definition

-- Drop table

-- DROP TABLE public.noticias;

CREATE TABLE public.noticias (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	titulo varchar(255) NULL,
	conteudo text NULL,
	"data" varchar(255) NULL,
	publicado varchar(255) NULL,
	ativado varchar(255) NULL,
	linkoriginal text NULL,
	anexo text NULL,
	quemcriou int4 NULL,
	quemescreveu int4 NULL,
	escritor int4 NULL,
	numerodeviews int4 NULL,
	CONSTRAINT noticias_pkey PRIMARY KEY (id),
	CONSTRAINT noticias_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id),
	CONSTRAINT noticias_quemescreveu_fkey FOREIGN KEY (quemescreveu) REFERENCES public.usuarios(id)
);


-- public.parceiros definition

-- Drop table

-- DROP TABLE public.parceiros;

CREATE TABLE public.parceiros (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	nome varchar(255) NULL,
	descricao text NULL,
	link text NULL,
	logo varchar(255) NULL,
	status varchar(255) NULL,
	quemcriou int4 NULL,
	CONSTRAINT parceiros_pkey PRIMARY KEY (id),
	CONSTRAINT parceiros_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id)
);


-- public.proprietarios definition

-- Drop table

-- DROP TABLE public.proprietarios;

CREATE TABLE public.proprietarios (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	nome varchar(255) NULL,
	cpf varchar(255) NULL,
	telefone varchar(255) NULL,
	celular varchar(255) NULL,
	sexo varchar(255) NULL,
	uf varchar(255) NULL,
	email varchar(255) NULL,
	status varchar(255) NULL,
	quemcadastrou int4 NULL,
	CONSTRAINT proprietarios_pkey PRIMARY KEY (id),
	CONSTRAINT proprietarios_quemcadastrou_fkey FOREIGN KEY (quemcadastrou) REFERENCES public.usuarios(id)
);


-- public.comentarios definition

-- Drop table

-- DROP TABLE public.comentarios;

CREATE TABLE public.comentarios (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	comentario text NULL,
	"data" varchar(255) NULL,
	status varchar(255) NULL,
	likes varchar(255) NULL,
	quemcomentou int4 NULL,
	quemaprovou int4 NULL,
	idnoticia int4 NULL,
	CONSTRAINT comentarios_pkey PRIMARY KEY (id),
	CONSTRAINT comentarios_idnoticia_fkey FOREIGN KEY (idnoticia) REFERENCES public.noticias(id),
	CONSTRAINT comentarios_quemaprovou_fkey FOREIGN KEY (quemaprovou) REFERENCES public.usuarios(id),
	CONSTRAINT comentarios_quemcomentou_fkey FOREIGN KEY (quemcomentou) REFERENCES public.usuarios(id)
);