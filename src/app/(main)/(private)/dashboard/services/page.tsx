import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"


export default async function ServicePage() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum saepe quibusdam nobis sapiente blanditiis quaerat vitae delectus aliquam, obcaecati aperiam. Alias minima, blanditiis id repellendus qui culpa rerum quod beatae?
    </div>
    
  )
}
