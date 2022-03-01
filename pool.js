//import pg from pg
const {Pool} = require ('pg')
const { Pool } = require('pg/lib')

const pool = new Pool({
    user:'postgres',
    host:'127.0.0.1',
    database:'alwaysmusic',
    max:20,
    min:2,
    idleTimeoutMillis:30000,
    connectionTimeoutMillis: 2000
})
async function consultar(){
    const client = await pool.connect()
    const res = await client.query('select * from estudiantes')
    console.log(res.rows)
    client.release()
    pool.end()
}
async function insert(){
    const client = await pool.connect()
    const res = await client.query('insert into estudiantes(nombre, rut, curso, ')
    console.log(res.rows)
    client.release()
    pool.end()
}
consultar()