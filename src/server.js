require("dotenv").config()

const cors = require("cors")
const sequelize = require("./config/db")
const app = require("./app")

app.use(
  cors({
    origin: [
      "kl-radio.vercel.app",
      "https://klradio-frontend.vercel.app",
      "https://klradio-member-signup-mphu.vercel.app",
      "https://klradio.in/",
      "https://6000-firebase-studio-1765370272139.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev",
      "https://signup-guardian.vercel.app",
      "https://studio.firebase.google.com/studio-9926426404",
      "https://9000-firebase-studio-1765370272139.cluster-xpmcxs2fjnhg6xvn446ubtgpio.cloudworkstations.dev"
    ],
    credentials: true
  })
)

  ; (async () => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })

    try {
      await sequelize.authenticate()
      console.log("Database connected successfully")
      await sequelize.sync()
    } catch (error) {
      console.error("Failed to connect to the database:", error)
      // We don't process.exit(1) here so Render considers the deploy successful and the server stays up.
    }
  })()
