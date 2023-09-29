import dotenv from 'dotenv'
import { execSync } from 'child_process'

dotenv.config()

/* eslint-env node */
const command = `npx dotenv-cli -- supabase gen types typescript --project-id ${process.env.VITE_SUPABASE_PROJECT_REF} --schema public > ./src/types/db.ts`

execSync(command, { stdio: 'inherit' })
