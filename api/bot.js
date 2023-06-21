module.exports = {
  post: (req, res) => {
    const errorObj = {
      context: "Create",
      type: "Error",
      values: {
          sentence: "Sorry I cannot get your point",
          options: [],
          cart: {},
          cartConfirmation: false
      }
      };
      return res.json(errorObj);
  }
}