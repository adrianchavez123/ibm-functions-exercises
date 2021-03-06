function split(params) {
  var text = params.text || ""
  var words = text.split(' ')
  return { words: words }
}

function reverse(params) {
  var words = params.words || []
  var reversed = words.map(word => word.split("").reverse().join(""))
  return { words: reversed }
}

function join(params) {
  var words = params.words || []
  var text = words.join(' ')
  return { text: text }
}
  function fail (params) {
    if (params.fail) {
        throw new Error("stopping sequence and returning.")
    }

    return params
  }

  function end (params) {
    return { message: "sequence finished." }
  }
