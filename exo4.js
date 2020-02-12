function getShortMessages(messages) {
  return messages
    .filter((valideMsg => valideMsg.message.length < 50))
    .map((valideMsg) => valideMsg.message)
}

module.exports = getShortMessages;