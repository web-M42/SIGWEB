--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 16.3

-- Started on 2024-07-23 02:25:39 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- TOC entry 3942 (class 1262 OID 5)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3943 (class 0 OID 0)
-- Dependencies: 3942
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 3945 (class 0 OID 0)
-- Name: postgres; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE postgres SET "app.settings.jwt_secret" TO '8/izHg4XCZHle8hGiM5inNwfHQzY/eM50M72chjDWjAvCxJWFzcnM4e5tfK1WsprxUT4jU6yr470Xr4uW0wX6Q==';
ALTER DATABASE postgres SET "app.settings.jwt_exp" TO '3600';


\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 13 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3946 (class 0 OID 0)
-- Dependencies: 13
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 298 (class 1259 OID 29238)
-- Name: areadetalhe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.areadetalhe (
    id integer NOT NULL,
    idimovel integer,
    idareafip integer,
    nomearea text,
    dataregistro date,
    idtipoarea integer,
    idtipoclassificacaoarea integer,
    idestrategia integer
);


ALTER TABLE public.areadetalhe OWNER TO postgres;

--
-- TOC entry 297 (class 1259 OID 29237)
-- Name: AreaDetails_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.areadetalhe ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."AreaDetails_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 300 (class 1259 OID 29295)
-- Name: recomendacoes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recomendacoes (
    id integer NOT NULL,
    idarea integer,
    idpropriedade integer,
    codigorecomendacao integer,
    subgrouporecomendacao integer,
    grouporecomendacao integer,
    statusrecomendacao integer
);


ALTER TABLE public.recomendacoes OWNER TO postgres;

--
-- TOC entry 299 (class 1259 OID 29294)
-- Name: Recommendations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.recomendacoes ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Recommendations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 302 (class 1259 OID 29324)
-- Name: tipoclassificacaoarea; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipoclassificacaoarea (
    id integer NOT NULL,
    desctipoclassificacaoarea text
);


ALTER TABLE public.tipoclassificacaoarea OWNER TO postgres;

--
-- TOC entry 301 (class 1259 OID 29323)
-- Name: classifareatype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tipoclassificacaoarea ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.classifareatype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 306 (class 1259 OID 29340)
-- Name: classificacaofip; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.classificacaofip (
    id integer NOT NULL,
    descclassificacao text
);


ALTER TABLE public.classificacaofip OWNER TO postgres;

--
-- TOC entry 296 (class 1259 OID 29210)
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    id integer NOT NULL,
    comentario text,
    data character varying(255),
    status character varying(255),
    likes character varying(255),
    quemcomentou integer,
    quemaprovou integer,
    idnoticia integer
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- TOC entry 295 (class 1259 OID 29209)
-- Name: comentarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.comentarios ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comentarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 286 (class 1259 OID 29140)
-- Name: contatos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contatos (
    id integer NOT NULL,
    nome character varying(255),
    foto character varying(255),
    telefone character varying(255),
    celular character varying(255),
    email character varying(255),
    status character varying(255),
    quemcriou integer
);


ALTER TABLE public.contatos OWNER TO postgres;

--
-- TOC entry 285 (class 1259 OID 29139)
-- Name: contatos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contatos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contatos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 304 (class 1259 OID 29332)
-- Name: descrecomendacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.descrecomendacao (
    id integer NOT NULL,
    descrecomendacao text,
    shortrecomendacao text,
    recomendacaoid integer
);


ALTER TABLE public.descrecomendacao OWNER TO postgres;

--
-- TOC entry 303 (class 1259 OID 29331)
-- Name: descrecomendation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.descrecomendacao ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.descrecomendation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 288 (class 1259 OID 29153)
-- Name: documentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documentos (
    id integer NOT NULL,
    titulo character varying(255),
    descricao text,
    url text,
    downloads character varying(255),
    status character varying(255),
    quemcriou integer
);


ALTER TABLE public.documentos OWNER TO postgres;

--
-- TOC entry 287 (class 1259 OID 29152)
-- Name: documentos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.documentos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.documentos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 308 (class 1259 OID 29348)
-- Name: estrategiafip; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estrategiafip (
    id integer NOT NULL,
    descestrategia text
);


ALTER TABLE public.estrategiafip OWNER TO postgres;

--
-- TOC entry 305 (class 1259 OID 29339)
-- Name: fipClassification_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.classificacaofip ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."fipClassification_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 307 (class 1259 OID 29347)
-- Name: fipetrategia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.estrategiafip ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.fipetrategia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 320 (class 1259 OID 29477)
-- Name: geolocalizacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.geolocalizacao (
    id integer NOT NULL,
    idimovel integer,
    idarea integer,
    geom text,
    nomeprodutor character varying(255),
    nomepropriedade character varying(255),
    regiaopropriedade character varying(255),
    tipo character varying(255),
    recomendacao text,
    estrategia text,
    visitas integer,
    cpfprodutor character varying(255),
    telefoneprodutor character varying,
    latitude character varying,
    longitude character varying,
    shortrecomendation text,
    cercamentodearea character varying,
    plantiodemudas character varying,
    construcaodeaceiros character varying,
    remocaodepragas character varying,
    subsolagem character varying,
    controlequimico character varying,
    analisedesolo character varying,
    na character varying,
    outras character varying,
    status character varying
);


ALTER TABLE public.geolocalizacao OWNER TO postgres;

--
-- TOC entry 319 (class 1259 OID 29476)
-- Name: geolocalizacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.geolocalizacao ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.geolocalizacao_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 310 (class 1259 OID 29356)
-- Name: grouprecomendation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grouprecomendation (
    id integer NOT NULL,
    descgroup text
);


ALTER TABLE public.grouprecomendation OWNER TO postgres;

--
-- TOC entry 309 (class 1259 OID 29355)
-- Name: grouprecomendation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.grouprecomendation ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.grouprecomendation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 316 (class 1259 OID 29437)
-- Name: imoveis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.imoveis (
    id integer NOT NULL,
    idpropriedade integer,
    nome character varying(255),
    area character varying(255),
    areaprodutiva character varying(255),
    areaapp character varying(255),
    arearl character varying(255),
    regiao character varying(255),
    bacia character varying(255),
    statusimovel character varying(255),
    tecnicoresponsavel character varying(255),
    supervisorresponsavel character varying(255),
    dataultimavisita date,
    situacaoimovel character varying(255),
    status character varying(255),
    latitude double precision,
    longitude double precision,
    idproprietario integer,
    quemcadastrou integer,
    quantiadevisitas integer,
    areatecnologiasabc character varying(255),
    areaplanejamentoisa character varying(255)
);


ALTER TABLE public.imoveis OWNER TO postgres;

--
-- TOC entry 315 (class 1259 OID 29436)
-- Name: imoveis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.imoveis ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.imoveis_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 322 (class 1259 OID 29624)
-- Name: mapastematicos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mapastematicos (
    id integer NOT NULL,
    create_time date,
    nome character varying(255),
    descricao text,
    imoveis json,
    coordenadas json,
    status character varying(255),
    quemcriou integer,
    views integer
);


ALTER TABLE public.mapastematicos OWNER TO postgres;

--
-- TOC entry 321 (class 1259 OID 29623)
-- Name: mapastematicos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.mapastematicos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.mapastematicos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 290 (class 1259 OID 29166)
-- Name: noticias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.noticias (
    id integer NOT NULL,
    titulo character varying(255),
    conteudo text,
    data character varying(255),
    publicado character varying(255),
    ativado character varying(255),
    linkoriginal text,
    anexo text,
    quemaprovou integer,
    quemescreveu integer,
    escritor integer,
    numerodeviews integer
);


ALTER TABLE public.noticias OWNER TO postgres;

--
-- TOC entry 289 (class 1259 OID 29165)
-- Name: noticias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.noticias ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.noticias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 292 (class 1259 OID 29184)
-- Name: parceiros; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parceiros (
    id integer NOT NULL,
    nome character varying(255),
    descricao text,
    link text,
    logo character varying(255),
    status character varying(255),
    quemcriou integer
);


ALTER TABLE public.parceiros OWNER TO postgres;

--
-- TOC entry 291 (class 1259 OID 29183)
-- Name: parceiros_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.parceiros ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.parceiros_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 294 (class 1259 OID 29197)
-- Name: proprietarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proprietarios (
    id integer NOT NULL,
    nome character varying(255),
    cpf character varying(255),
    telefone character varying(255),
    celular character varying(255),
    sexo character varying(255),
    uf character varying(255),
    email character varying(255),
    status character varying(255),
    quemcadastrou integer
);


ALTER TABLE public.proprietarios OWNER TO postgres;

--
-- TOC entry 293 (class 1259 OID 29196)
-- Name: proprietarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.proprietarios ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.proprietarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 314 (class 1259 OID 29431)
-- Name: statusrecomendacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.statusrecomendacao (
    id integer NOT NULL,
    descstatus character varying(255)
);


ALTER TABLE public.statusrecomendacao OWNER TO postgres;

--
-- TOC entry 313 (class 1259 OID 29430)
-- Name: statusrecomendacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.statusrecomendacao ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.statusrecomendacao_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 312 (class 1259 OID 29425)
-- Name: subgruporecomendacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subgruporecomendacao (
    id integer NOT NULL,
    descsubgrupo character varying(255)
);


ALTER TABLE public.subgruporecomendacao OWNER TO postgres;

--
-- TOC entry 311 (class 1259 OID 29424)
-- Name: subgruporecomendacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.subgruporecomendacao ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.subgruporecomendacao_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 318 (class 1259 OID 29456)
-- Name: tipoarea; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipoarea (
    id integer NOT NULL,
    desctipoarea character varying(255)
);


ALTER TABLE public.tipoarea OWNER TO postgres;

--
-- TOC entry 317 (class 1259 OID 29455)
-- Name: tipoarea_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tipoarea ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipoarea_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 284 (class 1259 OID 29132)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying(255),
    email character varying(255),
    senha character varying(255),
    instituicao character varying(255),
    cidade character varying(255),
    tipoparceiro character varying(255),
    estrategiagip character varying(255),
    sexo character varying(255),
    avatar character varying(255),
    status character varying(255),
    perfil integer
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 283 (class 1259 OID 29131)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.usuarios ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3912 (class 0 OID 29238)
-- Dependencies: 298
-- Data for Name: areadetalhe; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.areadetalhe OVERRIDING SYSTEM VALUE VALUES (1, 1, 1, '1', NULL, 1, 1, 1);


--
-- TOC entry 3920 (class 0 OID 29340)
-- Dependencies: 306
-- Data for Name: classificacaofip; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.classificacaofip OVERRIDING SYSTEM VALUE VALUES (1, '1');


--
-- TOC entry 3910 (class 0 OID 29210)
-- Dependencies: 296
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3900 (class 0 OID 29140)
-- Dependencies: 286
-- Data for Name: contatos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3918 (class 0 OID 29332)
-- Dependencies: 304
-- Data for Name: descrecomendacao; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3902 (class 0 OID 29153)
-- Dependencies: 288
-- Data for Name: documentos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3922 (class 0 OID 29348)
-- Dependencies: 308
-- Data for Name: estrategiafip; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.estrategiafip OVERRIDING SYSTEM VALUE VALUES (1, '1');


--
-- TOC entry 3934 (class 0 OID 29477)
-- Dependencies: 320
-- Data for Name: geolocalizacao; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.geolocalizacao OVERRIDING SYSTEM VALUE VALUES (1, 1, 1, '1', '1', '1', '1', '1', '1', '1', 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1');
INSERT INTO public.geolocalizacao OVERRIDING SYSTEM VALUE VALUES (3, 2, 2, '2', '2', '2', '2', '2', '2', '2', 2, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2');


--
-- TOC entry 3924 (class 0 OID 29356)
-- Dependencies: 310
-- Data for Name: grouprecomendation; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3930 (class 0 OID 29437)
-- Dependencies: 316
-- Data for Name: imoveis; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.imoveis OVERRIDING SYSTEM VALUE VALUES (2, 2, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', NULL, '2', '2', 2, 2, 2, 2, NULL, NULL, NULL);
INSERT INTO public.imoveis OVERRIDING SYSTEM VALUE VALUES (1, 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', NULL, '1', '1', 1, 1, 1, 3, NULL, NULL, NULL);


--
-- TOC entry 3936 (class 0 OID 29624)
-- Dependencies: 322
-- Data for Name: mapastematicos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3904 (class 0 OID 29166)
-- Dependencies: 290
-- Data for Name: noticias; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3906 (class 0 OID 29184)
-- Dependencies: 292
-- Data for Name: parceiros; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3908 (class 0 OID 29197)
-- Dependencies: 294
-- Data for Name: proprietarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.proprietarios OVERRIDING SYSTEM VALUE VALUES (1, '1', '1', '1', '1', '1', '1', '1', '1', 1);
INSERT INTO public.proprietarios OVERRIDING SYSTEM VALUE VALUES (2, '1', '1', '1', '1', '1', '1', '1', '1', 1);


--
-- TOC entry 3914 (class 0 OID 29295)
-- Dependencies: 300
-- Data for Name: recomendacoes; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3928 (class 0 OID 29431)
-- Dependencies: 314
-- Data for Name: statusrecomendacao; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3926 (class 0 OID 29425)
-- Dependencies: 312
-- Data for Name: subgruporecomendacao; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3932 (class 0 OID 29456)
-- Dependencies: 318
-- Data for Name: tipoarea; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tipoarea OVERRIDING SYSTEM VALUE VALUES (1, '1');


--
-- TOC entry 3916 (class 0 OID 29324)
-- Dependencies: 302
-- Data for Name: tipoclassificacaoarea; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tipoclassificacaoarea OVERRIDING SYSTEM VALUE VALUES (1, '1');
INSERT INTO public.tipoclassificacaoarea OVERRIDING SYSTEM VALUE VALUES (2, '2');
INSERT INTO public.tipoclassificacaoarea OVERRIDING SYSTEM VALUE VALUES (3, '3');
INSERT INTO public.tipoclassificacaoarea OVERRIDING SYSTEM VALUE VALUES (4, '4');


--
-- TOC entry 3898 (class 0 OID 29132)
-- Dependencies: 284
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios OVERRIDING SYSTEM VALUE VALUES (1, 'Admin', 'teste@teste.com', '123456', NULL, NULL, NULL, NULL, NULL, NULL, '1', 2);
INSERT INTO public.usuarios OVERRIDING SYSTEM VALUE VALUES (2, 'teste', 'teste', 'teste', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);


--
-- TOC entry 3988 (class 0 OID 0)
-- Dependencies: 297
-- Name: AreaDetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."AreaDetails_id_seq"', 1, true);


--
-- TOC entry 3989 (class 0 OID 0)
-- Dependencies: 299
-- Name: Recommendations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Recommendations_id_seq"', 1, false);


--
-- TOC entry 3990 (class 0 OID 0)
-- Dependencies: 301
-- Name: classifareatype_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.classifareatype_id_seq', 4, true);


--
-- TOC entry 3991 (class 0 OID 0)
-- Dependencies: 295
-- Name: comentarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_seq', 1, false);


--
-- TOC entry 3992 (class 0 OID 0)
-- Dependencies: 285
-- Name: contatos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contatos_id_seq', 1, false);


--
-- TOC entry 3993 (class 0 OID 0)
-- Dependencies: 303
-- Name: descrecomendation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.descrecomendation_id_seq', 1, false);


--
-- TOC entry 3994 (class 0 OID 0)
-- Dependencies: 287
-- Name: documentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documentos_id_seq', 1, false);


--
-- TOC entry 3995 (class 0 OID 0)
-- Dependencies: 305
-- Name: fipClassification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."fipClassification_id_seq"', 1, true);


--
-- TOC entry 3996 (class 0 OID 0)
-- Dependencies: 307
-- Name: fipetrategia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fipetrategia_id_seq', 1, true);


--
-- TOC entry 3997 (class 0 OID 0)
-- Dependencies: 319
-- Name: geolocalizacao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.geolocalizacao_id_seq', 3, true);


--
-- TOC entry 3998 (class 0 OID 0)
-- Dependencies: 309
-- Name: grouprecomendation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grouprecomendation_id_seq', 1, false);


--
-- TOC entry 3999 (class 0 OID 0)
-- Dependencies: 315
-- Name: imoveis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.imoveis_id_seq', 2, true);


--
-- TOC entry 4000 (class 0 OID 0)
-- Dependencies: 321
-- Name: mapastematicos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mapastematicos_id_seq', 1, false);


--
-- TOC entry 4001 (class 0 OID 0)
-- Dependencies: 289
-- Name: noticias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.noticias_id_seq', 1, false);


--
-- TOC entry 4002 (class 0 OID 0)
-- Dependencies: 291
-- Name: parceiros_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parceiros_id_seq', 1, false);


--
-- TOC entry 4003 (class 0 OID 0)
-- Dependencies: 293
-- Name: proprietarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proprietarios_id_seq', 2, true);


--
-- TOC entry 4004 (class 0 OID 0)
-- Dependencies: 313
-- Name: statusrecomendacao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.statusrecomendacao_id_seq', 1, false);


--
-- TOC entry 4005 (class 0 OID 0)
-- Dependencies: 311
-- Name: subgruporecomendacao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subgruporecomendacao_id_seq', 1, false);


--
-- TOC entry 4006 (class 0 OID 0)
-- Dependencies: 317
-- Name: tipoarea_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipoarea_id_seq', 1, true);


--
-- TOC entry 4007 (class 0 OID 0)
-- Dependencies: 283
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 2, true);


--
-- TOC entry 3698 (class 2606 OID 29244)
-- Name: areadetalhe AreaDetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areadetalhe
    ADD CONSTRAINT "AreaDetails_pkey" PRIMARY KEY (id);


--
-- TOC entry 3700 (class 2606 OID 29299)
-- Name: recomendacoes Recommendations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recomendacoes
    ADD CONSTRAINT "Recommendations_pkey" PRIMARY KEY (id);


--
-- TOC entry 3702 (class 2606 OID 29330)
-- Name: tipoclassificacaoarea classifareatype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipoclassificacaoarea
    ADD CONSTRAINT classifareatype_pkey PRIMARY KEY (id);


--
-- TOC entry 3696 (class 2606 OID 29216)
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3686 (class 2606 OID 29146)
-- Name: contatos contatos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contatos
    ADD CONSTRAINT contatos_pkey PRIMARY KEY (id);


--
-- TOC entry 3704 (class 2606 OID 29338)
-- Name: descrecomendacao descrecomendation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.descrecomendacao
    ADD CONSTRAINT descrecomendation_pkey PRIMARY KEY (id);


--
-- TOC entry 3688 (class 2606 OID 29159)
-- Name: documentos documentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_pkey PRIMARY KEY (id);


--
-- TOC entry 3706 (class 2606 OID 29346)
-- Name: classificacaofip fipClassification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.classificacaofip
    ADD CONSTRAINT "fipClassification_pkey" PRIMARY KEY (id);


--
-- TOC entry 3708 (class 2606 OID 29354)
-- Name: estrategiafip fipetrategia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estrategiafip
    ADD CONSTRAINT fipetrategia_pkey PRIMARY KEY (id);


--
-- TOC entry 3720 (class 2606 OID 29483)
-- Name: geolocalizacao geolocalizacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.geolocalizacao
    ADD CONSTRAINT geolocalizacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3710 (class 2606 OID 29362)
-- Name: grouprecomendation grouprecomendation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grouprecomendation
    ADD CONSTRAINT grouprecomendation_pkey PRIMARY KEY (id);


--
-- TOC entry 3716 (class 2606 OID 29443)
-- Name: imoveis imoveis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imoveis
    ADD CONSTRAINT imoveis_pkey PRIMARY KEY (id);


--
-- TOC entry 3722 (class 2606 OID 29630)
-- Name: mapastematicos mapastematicos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapastematicos
    ADD CONSTRAINT mapastematicos_pkey PRIMARY KEY (id);


--
-- TOC entry 3690 (class 2606 OID 29172)
-- Name: noticias noticias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticias
    ADD CONSTRAINT noticias_pkey PRIMARY KEY (id);


--
-- TOC entry 3692 (class 2606 OID 29190)
-- Name: parceiros parceiros_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parceiros
    ADD CONSTRAINT parceiros_pkey PRIMARY KEY (id);


--
-- TOC entry 3694 (class 2606 OID 29203)
-- Name: proprietarios proprietarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proprietarios
    ADD CONSTRAINT proprietarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3714 (class 2606 OID 29435)
-- Name: statusrecomendacao statusrecomendacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statusrecomendacao
    ADD CONSTRAINT statusrecomendacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3712 (class 2606 OID 29429)
-- Name: subgruporecomendacao subgruporecomendacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subgruporecomendacao
    ADD CONSTRAINT subgruporecomendacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3718 (class 2606 OID 29460)
-- Name: tipoarea tipoarea_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipoarea
    ADD CONSTRAINT tipoarea_pkey PRIMARY KEY (id);


--
-- TOC entry 3684 (class 2606 OID 29138)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3732 (class 2606 OID 29613)
-- Name: areadetalhe areadetalhe_idareafip_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areadetalhe
    ADD CONSTRAINT areadetalhe_idareafip_fkey FOREIGN KEY (idareafip) REFERENCES public.tipoclassificacaoarea(id);


--
-- TOC entry 3733 (class 2606 OID 29450)
-- Name: areadetalhe areadetalhe_idestrategia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areadetalhe
    ADD CONSTRAINT areadetalhe_idestrategia_fkey FOREIGN KEY (idestrategia) REFERENCES public.estrategiafip(id);


--
-- TOC entry 3734 (class 2606 OID 29471)
-- Name: areadetalhe areadetalhe_idimovel_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areadetalhe
    ADD CONSTRAINT areadetalhe_idimovel_fkey FOREIGN KEY (idimovel) REFERENCES public.imoveis(id);


--
-- TOC entry 3735 (class 2606 OID 29461)
-- Name: areadetalhe areadetalhe_idtipoarea_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areadetalhe
    ADD CONSTRAINT areadetalhe_idtipoarea_fkey FOREIGN KEY (idtipoarea) REFERENCES public.tipoarea(id);


--
-- TOC entry 3736 (class 2606 OID 29445)
-- Name: areadetalhe areadetalhe_idtipoclassificacaoarea_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areadetalhe
    ADD CONSTRAINT areadetalhe_idtipoclassificacaoarea_fkey FOREIGN KEY (idtipoclassificacaoarea) REFERENCES public.classificacaofip(id);


--
-- TOC entry 3729 (class 2606 OID 29217)
-- Name: comentarios comentarios_idnoticia_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_idnoticia_fkey FOREIGN KEY (idnoticia) REFERENCES public.noticias(id);


--
-- TOC entry 3730 (class 2606 OID 29222)
-- Name: comentarios comentarios_quemaprovou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_quemaprovou_fkey FOREIGN KEY (quemaprovou) REFERENCES public.usuarios(id);


--
-- TOC entry 3731 (class 2606 OID 29227)
-- Name: comentarios comentarios_quemcomentou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_quemcomentou_fkey FOREIGN KEY (quemcomentou) REFERENCES public.usuarios(id);


--
-- TOC entry 3723 (class 2606 OID 29147)
-- Name: contatos contatos_quemcriou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contatos
    ADD CONSTRAINT contatos_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id);


--
-- TOC entry 3742 (class 2606 OID 29618)
-- Name: descrecomendacao descrecomendacao_recomendacaoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.descrecomendacao
    ADD CONSTRAINT descrecomendacao_recomendacaoid_fkey FOREIGN KEY (recomendacaoid) REFERENCES public.recomendacoes(id);


--
-- TOC entry 3724 (class 2606 OID 29160)
-- Name: documentos documentos_quemcriou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id);


--
-- TOC entry 3745 (class 2606 OID 29484)
-- Name: geolocalizacao geolocalizacao_idimovel_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.geolocalizacao
    ADD CONSTRAINT geolocalizacao_idimovel_fkey FOREIGN KEY (idimovel) REFERENCES public.imoveis(id);


--
-- TOC entry 3743 (class 2606 OID 29608)
-- Name: imoveis imoveis_idproprietario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imoveis
    ADD CONSTRAINT imoveis_idproprietario_fkey FOREIGN KEY (idproprietario) REFERENCES public.proprietarios(id);


--
-- TOC entry 3744 (class 2606 OID 29583)
-- Name: imoveis imoveis_usuarios_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.imoveis
    ADD CONSTRAINT imoveis_usuarios_fk FOREIGN KEY (id) REFERENCES public.usuarios(id);


--
-- TOC entry 3746 (class 2606 OID 29631)
-- Name: mapastematicos mapastematicos_quemcriou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapastematicos
    ADD CONSTRAINT mapastematicos_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id);


--
-- TOC entry 3725 (class 2606 OID 29173)
-- Name: noticias noticias_quemcriou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticias
    ADD CONSTRAINT noticias_quemcriou_fkey FOREIGN KEY (quemaprovou) REFERENCES public.usuarios(id);


--
-- TOC entry 3726 (class 2606 OID 29178)
-- Name: noticias noticias_quemescreveu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.noticias
    ADD CONSTRAINT noticias_quemescreveu_fkey FOREIGN KEY (quemescreveu) REFERENCES public.usuarios(id);


--
-- TOC entry 3727 (class 2606 OID 29191)
-- Name: parceiros parceiros_quemcriou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parceiros
    ADD CONSTRAINT parceiros_quemcriou_fkey FOREIGN KEY (quemcriou) REFERENCES public.usuarios(id);


--
-- TOC entry 3728 (class 2606 OID 29204)
-- Name: proprietarios proprietarios_quemcadastrou_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proprietarios
    ADD CONSTRAINT proprietarios_quemcadastrou_fkey FOREIGN KEY (quemcadastrou) REFERENCES public.usuarios(id);


--
-- TOC entry 3737 (class 2606 OID 29553)
-- Name: recomendacoes recomendacoes_grouporecomendacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recomendacoes
    ADD CONSTRAINT recomendacoes_grouporecomendacao_fkey FOREIGN KEY (grouporecomendacao) REFERENCES public.grouprecomendation(id);


--
-- TOC entry 3738 (class 2606 OID 29538)
-- Name: recomendacoes recomendacoes_idarea_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recomendacoes
    ADD CONSTRAINT recomendacoes_idarea_fkey FOREIGN KEY (idarea) REFERENCES public.areadetalhe(id);


--
-- TOC entry 3739 (class 2606 OID 29543)
-- Name: recomendacoes recomendacoes_idpropriedade_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recomendacoes
    ADD CONSTRAINT recomendacoes_idpropriedade_fkey FOREIGN KEY (idpropriedade) REFERENCES public.imoveis(id);


--
-- TOC entry 3740 (class 2606 OID 29558)
-- Name: recomendacoes recomendacoes_statusrecomendacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recomendacoes
    ADD CONSTRAINT recomendacoes_statusrecomendacao_fkey FOREIGN KEY (statusrecomendacao) REFERENCES public.statusrecomendacao(id);


--
-- TOC entry 3741 (class 2606 OID 29548)
-- Name: recomendacoes recomendacoes_subgrouporecomendacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recomendacoes
    ADD CONSTRAINT recomendacoes_subgrouporecomendacao_fkey FOREIGN KEY (subgrouporecomendacao) REFERENCES public.subgruporecomendacao(id);


--
-- TOC entry 3944 (class 0 OID 0)
-- Dependencies: 3942
-- Name: DATABASE postgres; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE postgres TO dashboard_user;


--
-- TOC entry 3947 (class 0 OID 0)
-- Dependencies: 13
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO postgres;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;


--
-- TOC entry 3948 (class 0 OID 0)
-- Dependencies: 298
-- Name: TABLE areadetalhe; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.areadetalhe TO anon;
GRANT ALL ON TABLE public.areadetalhe TO authenticated;
GRANT ALL ON TABLE public.areadetalhe TO service_role;


--
-- TOC entry 3949 (class 0 OID 0)
-- Dependencies: 297
-- Name: SEQUENCE "AreaDetails_id_seq"; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public."AreaDetails_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."AreaDetails_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."AreaDetails_id_seq" TO service_role;


--
-- TOC entry 3950 (class 0 OID 0)
-- Dependencies: 300
-- Name: TABLE recomendacoes; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.recomendacoes TO anon;
GRANT ALL ON TABLE public.recomendacoes TO authenticated;
GRANT ALL ON TABLE public.recomendacoes TO service_role;


--
-- TOC entry 3951 (class 0 OID 0)
-- Dependencies: 299
-- Name: SEQUENCE "Recommendations_id_seq"; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public."Recommendations_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."Recommendations_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."Recommendations_id_seq" TO service_role;


--
-- TOC entry 3952 (class 0 OID 0)
-- Dependencies: 302
-- Name: TABLE tipoclassificacaoarea; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.tipoclassificacaoarea TO anon;
GRANT ALL ON TABLE public.tipoclassificacaoarea TO authenticated;
GRANT ALL ON TABLE public.tipoclassificacaoarea TO service_role;


--
-- TOC entry 3953 (class 0 OID 0)
-- Dependencies: 301
-- Name: SEQUENCE classifareatype_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.classifareatype_id_seq TO anon;
GRANT ALL ON SEQUENCE public.classifareatype_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.classifareatype_id_seq TO service_role;


--
-- TOC entry 3954 (class 0 OID 0)
-- Dependencies: 306
-- Name: TABLE classificacaofip; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.classificacaofip TO anon;
GRANT ALL ON TABLE public.classificacaofip TO authenticated;
GRANT ALL ON TABLE public.classificacaofip TO service_role;


--
-- TOC entry 3955 (class 0 OID 0)
-- Dependencies: 296
-- Name: TABLE comentarios; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.comentarios TO anon;
GRANT ALL ON TABLE public.comentarios TO authenticated;
GRANT ALL ON TABLE public.comentarios TO service_role;


--
-- TOC entry 3956 (class 0 OID 0)
-- Dependencies: 295
-- Name: SEQUENCE comentarios_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.comentarios_id_seq TO anon;
GRANT ALL ON SEQUENCE public.comentarios_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.comentarios_id_seq TO service_role;


--
-- TOC entry 3957 (class 0 OID 0)
-- Dependencies: 286
-- Name: TABLE contatos; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.contatos TO anon;
GRANT ALL ON TABLE public.contatos TO authenticated;
GRANT ALL ON TABLE public.contatos TO service_role;


--
-- TOC entry 3958 (class 0 OID 0)
-- Dependencies: 285
-- Name: SEQUENCE contatos_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.contatos_id_seq TO anon;
GRANT ALL ON SEQUENCE public.contatos_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.contatos_id_seq TO service_role;


--
-- TOC entry 3959 (class 0 OID 0)
-- Dependencies: 304
-- Name: TABLE descrecomendacao; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.descrecomendacao TO anon;
GRANT ALL ON TABLE public.descrecomendacao TO authenticated;
GRANT ALL ON TABLE public.descrecomendacao TO service_role;


--
-- TOC entry 3960 (class 0 OID 0)
-- Dependencies: 303
-- Name: SEQUENCE descrecomendation_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.descrecomendation_id_seq TO anon;
GRANT ALL ON SEQUENCE public.descrecomendation_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.descrecomendation_id_seq TO service_role;


--
-- TOC entry 3961 (class 0 OID 0)
-- Dependencies: 288
-- Name: TABLE documentos; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.documentos TO anon;
GRANT ALL ON TABLE public.documentos TO authenticated;
GRANT ALL ON TABLE public.documentos TO service_role;


--
-- TOC entry 3962 (class 0 OID 0)
-- Dependencies: 287
-- Name: SEQUENCE documentos_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.documentos_id_seq TO anon;
GRANT ALL ON SEQUENCE public.documentos_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.documentos_id_seq TO service_role;


--
-- TOC entry 3963 (class 0 OID 0)
-- Dependencies: 308
-- Name: TABLE estrategiafip; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.estrategiafip TO anon;
GRANT ALL ON TABLE public.estrategiafip TO authenticated;
GRANT ALL ON TABLE public.estrategiafip TO service_role;


--
-- TOC entry 3964 (class 0 OID 0)
-- Dependencies: 305
-- Name: SEQUENCE "fipClassification_id_seq"; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public."fipClassification_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."fipClassification_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."fipClassification_id_seq" TO service_role;


--
-- TOC entry 3965 (class 0 OID 0)
-- Dependencies: 307
-- Name: SEQUENCE fipetrategia_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.fipetrategia_id_seq TO anon;
GRANT ALL ON SEQUENCE public.fipetrategia_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.fipetrategia_id_seq TO service_role;


--
-- TOC entry 3966 (class 0 OID 0)
-- Dependencies: 320
-- Name: TABLE geolocalizacao; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.geolocalizacao TO anon;
GRANT ALL ON TABLE public.geolocalizacao TO authenticated;
GRANT ALL ON TABLE public.geolocalizacao TO service_role;


--
-- TOC entry 3967 (class 0 OID 0)
-- Dependencies: 319
-- Name: SEQUENCE geolocalizacao_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.geolocalizacao_id_seq TO anon;
GRANT ALL ON SEQUENCE public.geolocalizacao_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.geolocalizacao_id_seq TO service_role;


--
-- TOC entry 3968 (class 0 OID 0)
-- Dependencies: 310
-- Name: TABLE grouprecomendation; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.grouprecomendation TO anon;
GRANT ALL ON TABLE public.grouprecomendation TO authenticated;
GRANT ALL ON TABLE public.grouprecomendation TO service_role;


--
-- TOC entry 3969 (class 0 OID 0)
-- Dependencies: 309
-- Name: SEQUENCE grouprecomendation_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.grouprecomendation_id_seq TO anon;
GRANT ALL ON SEQUENCE public.grouprecomendation_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.grouprecomendation_id_seq TO service_role;


--
-- TOC entry 3970 (class 0 OID 0)
-- Dependencies: 316
-- Name: TABLE imoveis; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.imoveis TO anon;
GRANT ALL ON TABLE public.imoveis TO authenticated;
GRANT ALL ON TABLE public.imoveis TO service_role;


--
-- TOC entry 3971 (class 0 OID 0)
-- Dependencies: 315
-- Name: SEQUENCE imoveis_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.imoveis_id_seq TO anon;
GRANT ALL ON SEQUENCE public.imoveis_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.imoveis_id_seq TO service_role;


--
-- TOC entry 3972 (class 0 OID 0)
-- Dependencies: 322
-- Name: TABLE mapastematicos; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.mapastematicos TO anon;
GRANT ALL ON TABLE public.mapastematicos TO authenticated;
GRANT ALL ON TABLE public.mapastematicos TO service_role;


--
-- TOC entry 3973 (class 0 OID 0)
-- Dependencies: 321
-- Name: SEQUENCE mapastematicos_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.mapastematicos_id_seq TO anon;
GRANT ALL ON SEQUENCE public.mapastematicos_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.mapastematicos_id_seq TO service_role;


--
-- TOC entry 3974 (class 0 OID 0)
-- Dependencies: 290
-- Name: TABLE noticias; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.noticias TO anon;
GRANT ALL ON TABLE public.noticias TO authenticated;
GRANT ALL ON TABLE public.noticias TO service_role;


--
-- TOC entry 3975 (class 0 OID 0)
-- Dependencies: 289
-- Name: SEQUENCE noticias_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.noticias_id_seq TO anon;
GRANT ALL ON SEQUENCE public.noticias_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.noticias_id_seq TO service_role;


--
-- TOC entry 3976 (class 0 OID 0)
-- Dependencies: 292
-- Name: TABLE parceiros; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.parceiros TO anon;
GRANT ALL ON TABLE public.parceiros TO authenticated;
GRANT ALL ON TABLE public.parceiros TO service_role;


--
-- TOC entry 3977 (class 0 OID 0)
-- Dependencies: 291
-- Name: SEQUENCE parceiros_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.parceiros_id_seq TO anon;
GRANT ALL ON SEQUENCE public.parceiros_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.parceiros_id_seq TO service_role;


--
-- TOC entry 3978 (class 0 OID 0)
-- Dependencies: 294
-- Name: TABLE proprietarios; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.proprietarios TO anon;
GRANT ALL ON TABLE public.proprietarios TO authenticated;
GRANT ALL ON TABLE public.proprietarios TO service_role;


--
-- TOC entry 3979 (class 0 OID 0)
-- Dependencies: 293
-- Name: SEQUENCE proprietarios_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.proprietarios_id_seq TO anon;
GRANT ALL ON SEQUENCE public.proprietarios_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.proprietarios_id_seq TO service_role;


--
-- TOC entry 3980 (class 0 OID 0)
-- Dependencies: 314
-- Name: TABLE statusrecomendacao; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.statusrecomendacao TO anon;
GRANT ALL ON TABLE public.statusrecomendacao TO authenticated;
GRANT ALL ON TABLE public.statusrecomendacao TO service_role;


--
-- TOC entry 3981 (class 0 OID 0)
-- Dependencies: 313
-- Name: SEQUENCE statusrecomendacao_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.statusrecomendacao_id_seq TO anon;
GRANT ALL ON SEQUENCE public.statusrecomendacao_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.statusrecomendacao_id_seq TO service_role;


--
-- TOC entry 3982 (class 0 OID 0)
-- Dependencies: 312
-- Name: TABLE subgruporecomendacao; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.subgruporecomendacao TO anon;
GRANT ALL ON TABLE public.subgruporecomendacao TO authenticated;
GRANT ALL ON TABLE public.subgruporecomendacao TO service_role;


--
-- TOC entry 3983 (class 0 OID 0)
-- Dependencies: 311
-- Name: SEQUENCE subgruporecomendacao_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.subgruporecomendacao_id_seq TO anon;
GRANT ALL ON SEQUENCE public.subgruporecomendacao_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.subgruporecomendacao_id_seq TO service_role;


--
-- TOC entry 3984 (class 0 OID 0)
-- Dependencies: 318
-- Name: TABLE tipoarea; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.tipoarea TO anon;
GRANT ALL ON TABLE public.tipoarea TO authenticated;
GRANT ALL ON TABLE public.tipoarea TO service_role;


--
-- TOC entry 3985 (class 0 OID 0)
-- Dependencies: 317
-- Name: SEQUENCE tipoarea_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.tipoarea_id_seq TO anon;
GRANT ALL ON SEQUENCE public.tipoarea_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.tipoarea_id_seq TO service_role;


--
-- TOC entry 3986 (class 0 OID 0)
-- Dependencies: 284
-- Name: TABLE usuarios; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.usuarios TO anon;
GRANT ALL ON TABLE public.usuarios TO authenticated;
GRANT ALL ON TABLE public.usuarios TO service_role;


--
-- TOC entry 3987 (class 0 OID 0)
-- Dependencies: 283
-- Name: SEQUENCE usuarios_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.usuarios_id_seq TO anon;
GRANT ALL ON SEQUENCE public.usuarios_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.usuarios_id_seq TO service_role;


--
-- TOC entry 2537 (class 826 OID 16484)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;


--
-- TOC entry 2538 (class 826 OID 16485)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;


--
-- TOC entry 2536 (class 826 OID 16483)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;


--
-- TOC entry 2540 (class 826 OID 16487)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;


--
-- TOC entry 2535 (class 826 OID 16482)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO service_role;


--
-- TOC entry 2539 (class 826 OID 16486)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: supabase_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES TO service_role;


-- Completed on 2024-07-23 02:25:59 -03

--
-- PostgreSQL database dump complete
--

