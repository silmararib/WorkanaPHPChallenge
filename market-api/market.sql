PGDMP     
        	            {            market    15.3    15.3     &           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            '           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            (           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            )           1262    16398    market    DATABASE     }   CREATE DATABASE market WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE market;
                postgres    false                        3079    16399 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            *           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16495    product_types    TABLE     �   CREATE TABLE public.product_types (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    code character varying(10) NOT NULL,
    description character varying(100) NOT NULL,
    tax_rate numeric(20,2) DEFAULT 0 NOT NULL
);
 !   DROP TABLE public.product_types;
       public         heap    postgres    false    2            �            1259    16502    products    TABLE       CREATE TABLE public.products (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    code character varying(10) NOT NULL,
    description character varying(100) NOT NULL,
    unit_price numeric(20,2) DEFAULT 0 NOT NULL,
    id_product_type uuid NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false    2            �            1259    16523 
   sale_items    TABLE       CREATE TABLE public.sale_items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    quantity numeric(20,2) DEFAULT 0 NOT NULL,
    price numeric(20,2) DEFAULT 0 NOT NULL,
    tax numeric(20,2) DEFAULT 0 NOT NULL,
    id_product uuid NOT NULL,
    id_sale uuid NOT NULL
);
    DROP TABLE public.sale_items;
       public         heap    postgres    false    2            �            1259    16514    sales    TABLE     �   CREATE TABLE public.sales (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    total numeric(20,2) DEFAULT 0 NOT NULL,
    tax numeric(20,2) DEFAULT 0 NOT NULL,
    date_time timestamp without time zone DEFAULT now()
);
    DROP TABLE public.sales;
       public         heap    postgres    false    2                       0    16495    product_types 
   TABLE DATA           H   COPY public.product_types (id, code, description, tax_rate) FROM stdin;
    public          postgres    false    215   �       !          0    16502    products 
   TABLE DATA           V   COPY public.products (id, code, description, unit_price, id_product_type) FROM stdin;
    public          postgres    false    216   �       #          0    16523 
   sale_items 
   TABLE DATA           S   COPY public.sale_items (id, quantity, price, tax, id_product, id_sale) FROM stdin;
    public          postgres    false    218   U       "          0    16514    sales 
   TABLE DATA           :   COPY public.sales (id, total, tax, date_time) FROM stdin;
    public          postgres    false    217           �           2606    16501    product_types product_types_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public.product_types
    ADD CONSTRAINT product_types_pk PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.product_types DROP CONSTRAINT product_types_pk;
       public            postgres    false    215            �           2606    16508    products products_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pk PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pk;
       public            postgres    false    216            �           2606    16531    sale_items sale_items_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.sale_items
    ADD CONSTRAINT sale_items_pk PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.sale_items DROP CONSTRAINT sale_items_pk;
       public            postgres    false    218            �           2606    16522    sales sales_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.sales DROP CONSTRAINT sales_pk;
       public            postgres    false    217            �           2606    16532    sale_items product_fk    FK CONSTRAINT     z   ALTER TABLE ONLY public.sale_items
    ADD CONSTRAINT product_fk FOREIGN KEY (id_product) REFERENCES public.products(id);
 ?   ALTER TABLE ONLY public.sale_items DROP CONSTRAINT product_fk;
       public          postgres    false    3210    218    216            �           2606    16509    products product_type_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT product_type_fk FOREIGN KEY (id_product_type) REFERENCES public.product_types(id);
 B   ALTER TABLE ONLY public.products DROP CONSTRAINT product_type_fk;
       public          postgres    false    3208    216    215            �           2606    16537    sale_items sale_fk    FK CONSTRAINT     q   ALTER TABLE ONLY public.sale_items
    ADD CONSTRAINT sale_fk FOREIGN KEY (id_sale) REFERENCES public.sales(id);
 <   ALTER TABLE ONLY public.sale_items DROP CONSTRAINT sale_fk;
       public          postgres    false    217    218    3212                �  x���;n�1���S�4H��:�H#>�Y� ���K�Q7�F3#fұi �0�� %0�>yʒ�"�����׏���u�Ļq*��;	��D�e�%���v��x{�Jƍ�X�YXR�FGhvnלhُ��~�=���Q?�?��w|}��䞀�� f�c�F��fV��;�'�=��l�s��w�_!�9-aF/`z�`U5WX���4_��|_�@�]�;�d�EE�i�c@t���&����"}�.�\�i��(
Qq\���� ��T��.%�&t�M����;��/�W1�Z#��M'�g!����nr:��8�``:=�yUŀ�l{��n1�uѓ�̱�:�nl`r�-<��Z��Z�����8'=���5Ի�@�F�7�_/���#E      !   �   x���;n1E�zf� R�(��6܈"���?ZA*���MjNc��]���k^,z ����~�z�5����?���[Ãq!&hdۉP�V�Y4A�z��RM�X��*�v(N6yՙ�)�9L�5 ��㠤��NI=�s%'��1�C`4��|�e{����)9P����:xNɊ�U�+���<�?{�o�      #   �   x��λq�0�Zޅ>�DQ��!Mj�bg�4��{ ��Hz��O�A�'��kȍ8��'��fRD�V���rgB!-o֣���jR��m��D����sM:�����R����Z���������h��F�^�ɘ��X�r���?�u]��Y=�      "   K   x�Ļ� �:�"=�	��A�!��%��8[�?�g�u�2���>�D.�S�1�7����Y�No#��t�     