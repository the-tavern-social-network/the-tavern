// function to pass inside router to wrap the callback function
// expected by the router to avoid try/catch inside controllers
// ex : router.get("/", capture(callbackFunction))

const capture = (callback) => async (req, res, next) => {
  try {
    return await callback(req, res, next);
  } catch (err) {
    console.trace(err);
    res.status(500).send({
      error: 'Whoops ! Seems like an error occured... Please check your request and try again.',
    });
  }
};

module.exports = capture;
