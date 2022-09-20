module.exports = babel => {
  const { types: t } = babel

  return {
    name: "ast-transform", // not required
    visitor: {
      ReturnStatement(path) {
        if (
          path?.node?.argument?.value === "Hello" &&
          path?.parentPath?.parentPath?.parent?.callee?.name === "useGet"
        ) {
          path.node.argument.value = "World"
          //   path.replaceWith(t.stringLiteral("World"))
        }

        //  if (
        //    path?.node?.argument?.value.toLowerCase() === "hello" &&
        //    path?.parentPath?.parentPath?.parent?.callee?.name === "useGet"
        //  ) {
        //    path.node.argument.value = "World"
        //  }
      },
    },
  }
}
