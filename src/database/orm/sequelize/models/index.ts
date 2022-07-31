import Users from './users.model'
import Posts from './posts.model'

Users.hasMany(Posts)
Posts.belongsTo(Users)

export const UsersModel = Users
export const PostsModel = Posts
