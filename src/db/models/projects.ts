import {query} from '../db'
import {tryCatch} from '../../utils/try-catch'

export async function getProjects() {
  const result = await tryCatch(query('SELECT * FROM projects'))
  return result.data.rows
}

export async function getProjectBySlug(slug: string) {
  const result = await tryCatch(
    query('SELECT * FROM projects WHERE slug = $1', [slug]),
  )
  return result.data.rows[0]
}
