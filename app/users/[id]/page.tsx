import { UserPageProps } from "@/app/lib/types"

const User = ({params: {id}}: UserPageProps) => {
return <h2>Utilisateur: {id}</h2>
}

export default User