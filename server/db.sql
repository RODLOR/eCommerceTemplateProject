-- Crear la base de datos

CREATE DATABASE ecommerce_data;

-- Usar la base de datos

USE ecommerce_data;

-- Crear la tabla de usuarios

create table
    users (
        id serial not null,
        email varchar(255) UNIQUE not null,
        password_hash VARCHAR(255) NOT NULL,
        first_name varchar(255) not null,
        last_name varchar(255) not null,
        active bool default true,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        role ENUM(
            'admin',
            'mod',
            'vendor',
            'customer'
        ) DEFAULT 'customer' not null,
        constraint pk_users primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    categories (
        id serial not null,
        name varchar(255) not null,
        parent_id integer,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_categories primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    products (
        id serial not null,
        sku varchar(255) not null,
        name varchar(255) not null,
        description text,
        product_status_id integer not null,
        regular_price numeric default 0,
        discount_price numeric default 0,
        quantity integer default 0,
        taxable bool default false,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_products primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    tags (
        id serial not null,
        name varchar(255) not null,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_tags primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    sales_orders (
        id serial not null,
        order_date date not null,
        total numeric not null,
        coupon_id integer,
        session_id varchar(255) not null,
        user_id integer not null,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_sales_orders primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    coupons (
        id serial not null,
        code varchar(255) not null,
        description text,
        active bool default true,
        value numeric,
        multiple bool default false,
        start_date timestamp,
        end_date timestamp,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_coupons primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    product_tags (
        product_id integer not null,
        tag_id integer not null,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_product_tags primary key (product_id, tag_id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    cc_transactions (
        id serial not null,
        code varchar(255),
        order_id integer not null,
        transdate timestamp,
        processor varchar(255) not null,
        processor_trans_id varchar(255) not null,
        amount numeric not null,
        cc_num varchar(255),
        cc_type varchar(255),
        response text,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_cc_transactions primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    sessions (
        id varchar(255) not null,
        data text,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_sessions primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    product_statuses (
        id serial not null,
        name varchar(255) not null,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_product_statuses primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    product_categories (
        category_id integer not null,
        product_id integer not null,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_product_categories primary key (category_id, product_id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    order_products (
        id serial not null,
        order_id integer,
        sku varchar(255) not null,
        name varchar(255) not null,
        description text,
        price numeric not null,
        quantity integer not null,
        subtotal numeric not null,
        inserted_at timestamp DEFAULT CURRENT_TIMESTAMP,
        updated_at timestamp DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
        constraint pk_order_products primary key (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

create table
    addresses (
        id int(11) NOT NULL AUTO_INCREMENT,
        user_id integer NOT NULL,
        address_line_1 varchar(255) NOT NULL,
        address_line_2 varchar(255) DEFAULT NULL,
        city varchar(100) NOT NULL,
        state varchar(100) NOT NULL,
        country varchar(100) NOT NULL,
        zip_code varchar(20) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE
    shopping_car (
        shopping_car_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        product_id INT,
        quantity INT,
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
    );

INSERT INTO products (sku, name, description, product_status_id, regular_price, discount_price, quantity, taxable)
VALUES 
    ('TECH001', 'Apple iPhone 12 Pro Max', 'The ultimate iPhone with 5G speed and an A14 Bionic chip.', 1, 1099.99, 999.99, 50, true),
    ('TECH002', 'Samsung Galaxy S21 Ultra', 'A powerful Android phone with a 6.8-inch display and 5G connectivity.', 1, 1199.99, 999.99, 75, true),
    ('TECH003', 'Microsoft Surface Laptop 4', 'A sleek and powerful laptop with up to 19 hours of battery life.', 1, 1299.99, 1199.99, 25, true),
    ('TECH004', 'Dell XPS 13 Laptop', 'A thin and light laptop with a 13.3-inch InfinityEdge display.', 1, 899.99, 799.99, 30, true),
    ('TECH005', 'Apple iPad Pro 12.9-inch', 'A powerful tablet with the M1 chip and Liquid Retina XDR display.', 1, 1099.99, 999.99, 60, true),
    ('TECH006', 'Sony WH-1000XM4 Wireless Headphones', 'Industry-leading noise canceling with Adaptive Sound Control and Alexa voice control.', 1, 349.99, 299.99, 100, true),
    ('TECH007', 'GoPro HERO9 Black Action Camera', '5K video and 20MP photos with HyperSmooth 3.0 video stabilization.', 1, 449.99, 399.99, 20, true),
    ('TECH008', 'Ring Video Doorbell Pro 2', 'Advanced security with 1080p HD video and 3D Motion Detection.', 1, 249.99, 199.99, 40, true),
    ('TECH009', 'Logitech G Pro X Gaming Headset', 'Professional-grade gaming headset with Blue VO!CE microphone technology.', 1, 129.99, 99.99, 50, true),
    ('TECH010', 'Razer Huntsman Elite Mechanical Gaming Keyboard', 'Opto-Mechanical Switches and customizable Chroma RGB lighting.', 1, 199.99, 149.99, 30, true);
