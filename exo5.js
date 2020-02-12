function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers
      .every((submittedUsers) => goodUsers
      .some((goodUsers) => submittedUsers.id === goodUsers.id))
  };
}

module.exports = checkUsersValid;