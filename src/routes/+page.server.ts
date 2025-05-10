import { db } from '$lib/server/db'
import { error, fail } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	try {
		const result = await db.query('SELECT id, name FROM users')
		const users = result.rows as { id: number; name: string }[]
		return { users }
	} catch (err) {
		error(500, 'Error loading users')
	}
}

export const actions: Actions = {
	add: async (event) => {
		const form_data = await event.request.formData()
		const name = form_data.get('name') as string

		try {
			await db.query('INSERT INTO users (name) VALUES ($1) RETURNING id', [name])
		} catch (err) {
			console.error('Error adding user:', err)
			return fail(500, { error: 'Error adding user' })
		}
	},

	remove: async (event) => {
		const form_data = await event.request.formData()
		const user_id = form_data.get('user_id') as string
		try {
			await db.query('DELETE FROM users WHERE id = $1', [user_id])
		} catch (err) {
			console.error('Error removing user:', err)
			return fail(500, { error: 'Error removing user' })
		}
	},
}
