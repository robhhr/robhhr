import {query} from '../../db'

interface Project {
  status: string
  title: string
  content: string
}

export async function createProject({
  status,
  title,
  content,
}: Project): Promise<void> {
  const sql = `
    INSERT INTO projects (
      status, 
      title,
      content,
      updated_at
    )
    VALUES ($1, $2, $3, current_timestamp)
    RETURNING id;
  `

  try {
    const project = await query<Project>(sql, [status, title, content])

    console.log(`inserted print record: ${JSON.stringify(project)}`)
  } catch (error) {
    console.error('error inserting print:', error)
    throw error
  }
}
