import { Sequelize } from "sequelize";
import config from 'config';
const DBName = config.get('DB-name')
const DBUser = config.get('DB-user')
const DBPassword = config.get('DB-password')
const DBHost = config.get('DB-host')
const DBPort = config.get('DB-port')
 
export const pool = new Sequelize(
    DBName,
    DBUser,
    DBPassword,
    {
        dialect: 'postgres',
        host: DBHost,
        port: DBPort
    }
)