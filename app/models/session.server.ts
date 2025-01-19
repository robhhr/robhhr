import {query} from '../../db'

export async function checkIFingerprintExists({
  userId,
}: {
  userId: string
}): Promise<boolean> {
  const sql = `
    SELECT is_active
    FROM fingerprints 
    WHERE user_id = $1 AND is_active = true
    LIMIT 1;
  `

  try {
    const result = await query(sql, [userId])

    if (!result) {
      return false
    }

    return true
  } catch (error) {
    console.error('Error checking if fingerprint exists', error)
    throw new Error(
      `Database query failed for userId: ${userId}. Error: ${JSON.stringify(error)}`,
    )
  }
}

