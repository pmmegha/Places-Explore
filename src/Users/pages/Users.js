import React from "react"
import { UserList } from "../components/UserList"
import place1 from "../../Assets/Images/place1.jpeg"
export const Users = () => {
  const USERS_LIST = [
    {
      id: 1,
      name: "Mcdonalds",
      placesCount: 4,
      image: place1,
    },
  ]
  return (
    <>
      <UserList users={USERS_LIST} />
    </>
  )
}
