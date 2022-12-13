import app from "./app";
import "dotenv/config"
import { startDatabase } from "./database";

const PORT = process.env.DB_PORT

export default app.listen(PORT, async () => {
    await startDatabase()
    console.log(`App is running on http://localhost:${PORT}`)
})
