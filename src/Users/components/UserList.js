import React from "react"
import { UserItem } from "./UserItem"
import "./UsersList.css"
import Card from "../../Shared/components/Card/Card"
export const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <>
        <Card>
          <h2 className="center">No Users Found..</h2>
        </Card>
      </>
    )
  }
  return (
    <>
      <ul className="users-list">
        {props?.users?.map((users, index) => (
          <UserItem users={users} key={index} />
        ))}
      </ul>
    </>
  )
}
