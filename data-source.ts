import { DataSource } from "typeorm";
import {Ride} from "./entities/ride.entity";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'george',
    password: '',
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Ride],
    subscribers: [],
    migrations: [],
})
