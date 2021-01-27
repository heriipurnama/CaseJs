### Postgres
1. Query Create Tables
    ```sql
    create table writers(
        id serial primary key,
        full_name varchar not null,
        email varchar,
        photo varchar,
        createdAt timestamp,
        updateAt timestamp
    );

    create table books(
        id serial primary key,
        writeId int not null,
        categoryId int not null,
        title varchar not null,
        description varchar,
        photo varchar,
        createdAt timestamp,
        updateAt timestamp
    );


    create table categories(
        id serial primary key,
        category varchar not null
    );
    ```
    sql relation
    ```sql
        ALTER TABLE books 
        ADD CONSTRAINT constraint_categories 
        FOREIGN KEY (categoryId) 
        REFERENCES categories (id);

        ALTER TABLE books 
        ADD CONSTRAINT constraint_writers
        FOREIGN KEY (writeId) 
        REFERENCES books (id);
    ```
2. Query Insert
 ```sql

 insert into writers ( full_name, email, photo, createdAt,  updateAt) values
('heriipurnama','herii@gmail.com','null','2020-01-27','2020-01-27'),
('sefty','sefty@gmail.com','null','2020-01-27','2020-01-27'),
('harlita','harlita@gmail.com','null','2020-01-27','2020-01-27'),
('sofy','sofy@gmail.com','null','2020-01-27','2020-01-27'),
('karina','karina@gmail.com','null','2020-01-27','2020-01-27')
;

insert into books ( writeId, categoryId, title, description,  photo, createdAt,  updateAt) values
(1,2,'startup','startup','null','2020-01-27','2020-01-27'),
(2,1,'trueBeauty','trueBeauty','null','2020-01-27','2020-01-27'),
(3,3,'why I','why I','null','2020-01-27','2020-01-27'),
(2,4,'No way','No way','null','2020-01-27','2020-01-27'),
(1,3,'never give Up','never give Up','null','2020-01-27','2020-01-27'),
(2,2,'Finish','Finish','null','2020-01-27','2020-01-27')
;

insert into categories ( category ) values 
( 'action' ),
( 'comic'),
( 'fantasy'),
( 'horror'),
( 'comedy');
 ```

 3. Query Joind
 ```sql
select * from writers as w inner join books as b on w.id = b.writeId;

select * from writers as w left join books as b on w.id = b.writeId;

 ```

  4. Query where category
 ```sql

select * from writers as w 
	inner join books as b on w.id = b.writeId
	inner join categories as c on c.id = b.categoryId
where c.category= 'horror';
 ```

   5. Query Group By
 ```sql
    select b.categoryid from writers as w 
    inner join books as b on w.id = b.writeId
    group by b.categoryId
 ```