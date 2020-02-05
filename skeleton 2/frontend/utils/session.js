// creating a user, logging in a user, and logging out a user

export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: "POST",
    data: { user }
  })
)

export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: "POST",
    data: { user }
  })
)

export const deleteSession = () => (
  $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
)