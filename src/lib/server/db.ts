import { DB_URL } from '$env/static/private'
import { Client } from 'pg'

export const db = new Client({
	connectionString: DB_URL,
})

await db.connect()
