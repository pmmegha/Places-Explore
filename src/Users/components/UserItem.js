import React from "react"
import Avatar from "../../Shared/components/Avatar/Avatar"
import { Link } from "react-router-dom"
import Card from "../../Shared/components/Card/Card"
import "./UserItem.css"
export const UserItem = (props) => {
  const { users } = props
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Card>
          <Link to={`${users.id}/places`}>
            <div className="user-item__image">
              <Avatar image={users.image} alt={"alternate text"} style={{}} />
            </div>
            <div className="user-item__info">
              <h2>{users?.name}</h2>
              <h3>
                {users?.placesCount}{" "}
                {users?.placesCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  )
}
