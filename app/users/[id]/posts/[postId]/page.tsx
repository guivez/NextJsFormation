import { PageProps } from "@/.next/types/app/layout"

const UserPost = ({params:{ id, postId }}: PageProps) => {
  return <h3> Postes n° {postId} de l&apos; utilisateur : {id}</h3>
}

export default UserPost