import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"


export default async function ServicePage() {
  const session = await getServerSession(authOptions)
  return (
    <div>ServicePage
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
    
  )
}
