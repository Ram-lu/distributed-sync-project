# Instructions to Use this Repo

## Clone the Repo

```
cd /<<Rute to save the project foler>>
git clone <<URL of this project>>

```

## Install Dependencies

go to the folder of the Service that u will working and execute the npm install command

```
cd api-users
npm install

```

## Start your Docher Buchets

from your root path going to docker/ and run this comand

```
docker compose up -d
```

## Test ur connection with any db manager (I recommend u Tableplus)

### WARNING: 

In case that you run the bucket correctly but in the moment that you try tu connect with the Database, u get an a message that told u, "invalid permissions on port ****" and you have installed PostgresSQL
in your PC before, u need go tu the docker-compose file in the root 

```
cd /docker
```
5433
and you'ld to change the port of your host pc to another, i recommend you use the next port that u get free example: 5433:5432 -> 5434:5432

### And thats all, lets Coding!!.
