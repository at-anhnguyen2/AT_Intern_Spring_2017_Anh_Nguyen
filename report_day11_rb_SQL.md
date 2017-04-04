# SeQuel
## NoSQL & SQL
**SQL**(*Structured Query Language) databases have been a primary data storage mechanism. Usage exploded with the rise of web applications and open-source options such as MySQL, PostgreSQL and SQLite.

**NoSQL** databases have existed since the 1960s, but have been recently gaining traction with popular options such as MongoDB, CouchDB, Redis and Apache Cassandra.

Some projects are better suited to using an SQL database. Some are better suited to NoSQL. Some could use either interchangeably.

Most projects apply to the popular SQL and NoSQL database systems. SQL/NoSQL databases are similar, but there will be minor differences in features and syntax.

### SQL Tables & NoSQL Documents
**SQL** databases provide a store of related data tables.

**Ex** Table `city`

|CityID|CityName   |TelephoneCode|
|------|-----------|-------------|
|id01  |Da Nang    |0511         |
|id02  |Ha Noi     |04           |
|id03  |Ho Chi Minh|08           |

Every row is a different city record. The design is rigid, Can not use the same table to store different information or insert a string where a number is expected.

**NoSQL** databases store document filed value pairs like JSON.

**Ex**
```json
  {
    CityID: "id01",
    CityName: "Da Nang",
    TelephoneCode: "0511"
  }
```
Similar documents can be stored in a collection, which is analogous to an SQL table. However, can store any data you like in any document, also different information.

> SQL tables create a strict data template, so it’s difficult to make mistakes. NoSQL is more flexible and forgiving, but being able to store any data anywhere can lead to consistency issues.

### Syntax
#### Insert new record
**SQL**
```sql 
  INSERT INTO city(`CityID`, `CityName`, `TelephoneCode`) 
  VALUES ('id04', 'Quang Nam', '0510') 
```
**NoSQL**
```json 
  db.city.insert({
  CityID: "id01", 
  CityName: "Da Nang",
  TelephoneCode: "0511"
  });
```
#### Update a record
**SQL**
```sql 
  UPDATE city 
  SET TelephoneCode = "05113" 
  WHERE CityID = 'id01'
```
**NoSQL**
```json
  db.city.update(
    { CityID: "id01" },
    { $set: { TelephoneCode: "05113" } }
  );
```
#### Return all city
**SQL**
```sql
  SELECT CityName
  FROM city;
```
**NoSQL**
```json
  db.city.find(
    { CityName: 0 }
  );
```
With `0` is colunm index.

#### Return the quntity of city
**SQL**
```sql
  SELECT COUNT(CityID) AS `total`
  FROM city
  GROUP BY CityID;
```
**NoSQL**
```json
  db.city.aggregate([
    { 
      $group
      {
        total: { $sum: "$CityID" }
      }
    }
  ]);
```

#### Delete a record
**SQL**
```sql
  DELETE FROM city
  WHERE CityID = 'id02';
```
**NoSQL**
```json
  db.city.remove({
    $CityID: "id02"
  });
```

### Features
|Feature|SQL|NoSQL|
|-------|---|-----|
|Performance|Worse than NoSQL because the query to must be calculator, check and processing tables.|Better than SQL because it ignoring the constraints.|
|Extensions|Extensible, but the extension process is complicated when data in the database exists.|Easy extension.|
|Speed|Slower than NoSQL because ensure data binding between tables. If Usage multiple servers then must ensure consistency of data in the server together.|Faster than SQL because it ignoring the constraints of tables.Because data is stored in RAM, pushing HDD after and it have last consistency.|
|HardWare|Require high hardware.|Not require high hardware.|
|Change the number of nodes in the system|Because of the consistency of the data so when change one node must to shutdown the system a period of time.|Because last consistency so must not shutdown the system.|
|Query and Report|Easy using SQL languege to direct query database or using tools to get the report.|Getting the direct data report from NoSQL not yet supported, executing through application UI.|
|Extensions data|Tables must be declared before|Must not be declared before.|
|Application|Using to build systems having close relationship and consistency of data.|Using to build systems storing large data, not important for data consistency in a certain time.|

## DBMS of Google
Google has built a distributed storage system for managing structured data that is designed to scale to a very large size, it is called `BigTable`.

Many projects at Google store data in `BigTable`, including web indexing, Google Earth and Google Finance. These applications place very different demands on Bigtable, both in terms of data size and latency requirements.

### Architecture
**BigTable** is **not a relational database**. It does not support joins nor does it support rich `SQL-like` queries. Each table is a multidimensional sparse map. Tables consist of rows and columns, and each cell has a time stamp.

A table is around **200MB**, and each machine saves about **100 tablets**

### Server types
There are three primary server types of interest in the Bigtable system:

- **Master servers**: assign tablets to tablet servers, keeps track of where tablets are located and redistributes tasks as needed.
- **Tablet servers**: handle read/write requests for tablets and split tablets when they exceed size limits (usually 100MB - 200MB). If a tablet server fails, then a 100 tablet servers each pickup 1 new tablet and the system recovers.
- **Lock servers**: instances of the Chubby distributed lock service. Lots of actions within BigTable require acquisition of locks including opening tablets for writing, ensuring that there is no more than one active Master at a time, and access control checking.

**Example** table stores Web pages:

The row name is a reversed URL.
> www.24h.com  ---store-->  com.24h.www

The contents column contains the **page contents**, it is file type of page.
> www ---> `<html>`

And the anchor column contains the text of any anchors that reference the page. 24h page is referenced by News page, so the text is maybe `news`
> 24h, news ...

And the column name contrains the page name and the domain name.
> 24h.com

## Install Postgresql and mysql
### Install Postgresql
Ubuntu's default repositories contain **Postgres** packages, so can install these easily using the `apt` packaging system.

Install the Postgres package and a `-contrib` package that adds some additional utilities and functionality:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```
Postgresql is installed, it works and may be different from similar database management systems may have used.

### Install mysql
**MySQL** is an open-source database management system, commonly installed as part of the popular **LAMP** (Linux, Apache, MySQL, PHP/Python/Perl) stack. It uses a relational database and SQL (Structured Query Language) to manage its data.

The short version of the installation is simple: update your package index, install the `mysql-server` package, and then run the included security and database initialization scripts.
```
sudo apt-get update
sudo apt-get install mysql-server
sudo mysql_secure_installation
sudo mysql_install_db
```

## Window functions in Postgresql
**Window functions** are a tool to perform advanced sorting and limiting on a subset of a joined table of data.

Some window functions include: `row_number()`, `rank()`, `dense_rank()`, `first_value()`, `last_value()`, ...

**For example**
Here is `class_score` table about score of student in a class.

|student_name|subject_name|score|
|------------|------------|-----|
|A           |math        |9    |
|A           |literature  |5    |
|B           |math        |8    |
|B           |literature  |8    |
|C           |math        |7    |
|C           |literature  |7    |

Getting each `subject` two `student` having high score.

Start by writing a query with **mysql language**

```sql
  SELECT top(2) student_name
  FROM class_score
  WHERE subject_name in (SELECT subject_name 
                         FROM class_score
                         GROUP BY subject_name)
  ORDER BY score DESC;
```

This problem here is using 2 `SELECT` in a query. If having more number of record, must can the table two time with this large data. And it only show `student_name`.

Here solution by using **window functions**

```sql
  SELECT *, rank() OVER(PATITION subject_name
                        ORDER BY score
                        AS ranking)
  FROM class_score
  WHERE ranking = 2;
```

With **window functions**, it only use one `SELECT` and it show all field of the `class_score` table and rank of each student in each subject. It is Easy read and Easy knew.

## Discriminate between Storage Engines: MyISAM, InnoDB and Memory
|Feature               |MyISAM|InnoDB           |Memory            |
|----------------------|------|-----------------|------------------|
|Text search           |Full  |Full(ver 14.8)   |-                 |
|Transaction           |No    |Full             |-                 |
|Speed                 |High  |Lower than MyISAM|Faster than MyISAM|
|Data when reset server|Still |Still            |Lost              |