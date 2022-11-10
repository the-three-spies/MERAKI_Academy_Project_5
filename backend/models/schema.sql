-- Create a table called **roles** in the database...3 role (admin,doner,needy)
CREATE TABLE roles (
  id SERIAL NOT NULL,
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Create a table called **permissions** in the database
CREATE TABLE permissions (
  id SERIAL NOT NULL,
  permission VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
​
-- Create a table called **role_permission** in the database
CREATE TABLE role_permission (
  role_id INT,
  permission_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id),
  PRIMARY KEY (role_id, permission_id)
);



-- Create a table called **doner** in the database
CREATE TABLE users(
  id SERIAL NOT NULL,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  age INT,
  city VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  role_id INT,
  is_deleted SMALLINT DEFAULT 0,
  FOREIGN KEY (role_id) REFERENCES roles(id),--role>>doner,admin,needy
  PRIMARY KEY (id)
);


-- Create a table called **Donations Category ** in the database
CREATE TABLE donations_Category (
  id SERIAL NOT NULL,
  title VARCHAR(255),-- clothes , food, money, furniture
  imgePath Text,
  PRIMARY KEY (id)
  
);


-- Create a table called **needy_Case** in the database
CREATE TABLE needy_Case(
  id SERIAL NOT NULL,
  description TEXT,
  category_id INT,
  needy_id INT,
  amount FLOAT,
  Address VARCHAR(255),
  is_deleted SMALLINT DEFAULT 0,
  FOREIGN KEY (category_id) REFERENCES donations_Category(id),
  FOREIGN KEY (needy_id) REFERENCES users(id),
  PRIMARY KEY (id)
);

-- Create a table called **doner_order** in the database
CREATE TABLE doner_givin(
    id SERIAL NOT NULL ,
    description TEXT,
    amount FLOAT,
    address VARCHAR(255),
    doner_id INT,
    case_id INT,
    is_deleted SMALLINT DEFAULT 0,

    deleveryDate VARCHAR(255),
     imgePathDoner TEXT,
     category_id INT,
     FOREIGN KEY (category_id) REFERENCES donations_Category(id),
     FOREIGN KEY(case_id) REFERENCES needy_Case(id),
     FOREIGN KEY (doner_id) REFERENCES users(id),
     PRIMARY KEY (id)
   );


   `CREATE TABLE needy_Case(
    id SERIAL NOT NULL,
    description TEXT,
    category_id INT,
    needy_id INT,
    amount FLOAT,
    Address VARCHAR(255),
    is_deleted SMALLINT DEFAULT 0,
     statusdonation VARCHAR(255),
      donation_amount INT,
      rest INT,
    FOREIGN KEY (category_id) REFERENCES donations_Category(id),
    FOREIGN KEY (needy_id) REFERENCES users(id),
    PRIMARY KEY (id)
  );`









